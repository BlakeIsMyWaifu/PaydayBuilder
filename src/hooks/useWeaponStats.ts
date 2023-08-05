import { type ModificationSlot, type ModificationStats, type WeaponData, type WeaponStats } from 'data/weapons/guns/weaponTypes'
import { useSkillsStore } from 'state/useSkillsStore'
import { typedObject } from 'utils/typedObject'

interface UseWeaponStats {
	base: WeaponStats;
	skill: WeaponStats;
	mod: WeaponStats;
	additional: WeaponStats;
	total: WeaponStats;
}

const useWeaponStats = (weaponData: WeaponData, weaponModifications: Partial<Record<ModificationSlot, string>>, showExtraStats = true): UseWeaponStats => {

	const baseStats = (showExtraStats: boolean) => {
		if (!showExtraStats) return weaponData.stats

		const extra = weaponData.extraStats
		const extraStats = {
			tacticalReload: extra.tacticalReload ? (typeof extra.tacticalReload === 'number' ? `${extra.tacticalReload}s` : `${extra.tacticalReload[0]}s | ${extra.tacticalReload[1]}s`) : '',
			equipDelays: `${extra.equipDelays[0]}s | ${extra.equipDelays[1]}s`,
			ammoPickup: extra.ammoPickup ? `${extra.ammoPickup.join(' | ')}` : '',
			recoilHorizontal: `${extra.recoilHorizontal[0]}' | ${extra.recoilHorizontal[1]}'`,
			recoilVertical: `${extra.recoilVertical[0]}' | ${extra.recoilVertical[1]}'`,
			spread: `${extra.spread ?? ''}'`,
			damageModifier: extra.damageModifier ? `${extra.damageModifier.join(' | ')}` : ''
		}

		return ({ ...weaponData.stats, ...extraStats })
	}

	const skillTrees = useSkillsStore(state => state.trees)

	const skillStats = () => {
		const baseStats: WeaponStats = {
			totalAmmo: 0,
			magazine: 0,
			reload: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0,
			rateOfFire: 0
		}

		// Stable Shot
		const stableShot = skillTrees.mastermind.Sharpshooter.upgrades['Stable Shot']
		baseStats.stability += stableShot === 'basic' || stableShot === 'aced' ? 8 : 0

		// Marksman
		const marksman = skillTrees.mastermind.Sharpshooter.upgrades['Marksman']
		const isSingleShot = ['Single Shot', 'Bolt action', 'Semi-Automatic'].includes(weaponData.firingMode)
		const hasSingleFire = weaponModifications.custom === 'Single Fire'
		if (['Assault Rifle', 'Submachine Gun', 'Sniper'].includes(weaponData.weaponType) && (isSingleShot || hasSingleFire)) {
			baseStats.accuracy += marksman === 'basic' || marksman === 'aced' ? 8 : 0
		}

		// Shotgun Impact
		const shotgunImpact = skillTrees.enforcer.Shotgunner.upgrades['Shotgun Impact']
		if (weaponData.weaponType === 'Akimbo Shotgun' || weaponData.weaponType === 'Shotgun') {
			baseStats.accuracy += shotgunImpact === 'basic' || shotgunImpact === 'aced' ? 8 : 0
			baseStats.damage += shotgunImpact === 'basic' || shotgunImpact === 'aced' ? weaponData.stats.damage * 0.05 : 0
			baseStats.damage += shotgunImpact === 'aced' ? weaponData.stats.damage * 0.1 : 0
		}

		// Close By
		const closeBy = skillTrees.enforcer.Shotgunner.upgrades['Close By']
		if (closeBy === 'aced') {
			if (['Brothers Grimm 12G', 'Akimbo Goliath 12G', 'Akimbo VD-12'].includes(weaponData.name)) {
				baseStats.magazine += 30
			}
			if (['IZHMA 12G', 'Steakout 12G', 'Grimm 12G', 'Goliath 12G', 'VD-12'].includes(weaponData.name)) {
				baseStats.magazine += 15
			}
		}

		// Fully Loaded
		const fullyLoaded = skillTrees.enforcer['Ammo Specialist'].upgrades['Fully Loaded']
		baseStats.totalAmmo += fullyLoaded === 'basic' || fullyLoaded === 'aced' ? (weaponData.stats.totalAmmo + baseStats.totalAmmo) * 0.25 : 0

		// Steady Grip
		const steadyGrip = skillTrees.technician.Oppressor.upgrades['Steady Grip']
		baseStats.accuracy += steadyGrip === 'basic' || steadyGrip === 'aced' ? 8 : 0
		baseStats.stability += steadyGrip === 'aced' ? 16 : 0

		// Surefire
		const surefire = skillTrees.technician.Oppressor.upgrades['Surefire']
		if (['Submachine Gun', 'LMG', 'Assault Rifle'].includes(weaponData.weaponType)) {
			baseStats.magazine += surefire === 'basic' || surefire === 'aced' ? 15 : 0
		}
		if (weaponData.weaponType === 'Akimbo SMG') {
			baseStats.magazine += surefire === 'basic' || surefire === 'aced' ? 30 : 0
		}

		const findSilencer = () => {
			if (weaponModifications.barrel) {
				const barrel = weaponData.modifications.barrel?.find(barrel => barrel.name === weaponModifications.barrel)
				if (barrel?.specialEffect?.[0] === 'Silences Weapon') {
					return barrel
				}
			}
			if (weaponModifications.barrelExt) {
				const barrelExt = weaponData.modifications.barrelExt?.find(barrelExt => barrelExt.name === weaponModifications.barrelExt)
				if (barrelExt?.specialEffect?.[0] === 'Silences Weapon') {
					return barrelExt
				}
			}
		}
		const silencer = findSilencer()

		// Optical Illusions
		const opticalIllusions = skillTrees.ghost['Silent Killer'].upgrades['Optical Illusions']
		if (silencer && silencer.slot === 'barrelExt') {
			if (silencer.stats.concealment && silencer.stats.concealment < 0) {
				baseStats.concealment += opticalIllusions === 'aced' ? Math.abs(Math.max(silencer.stats.concealment, -2)) : 0
			}
			baseStats.concealment += opticalIllusions === 'aced' ? 1 : 0
		}

		// The Professional
		const theProfessional = skillTrees.ghost['Silent Killer'].upgrades['The Professional']
		if (silencer) {
			baseStats.stability += theProfessional === 'basic' || theProfessional === 'aced' ? 8 : 0
			baseStats.accuracy += theProfessional === 'aced' ? 12 : 0
		}

		// Equilibrium
		const equilibrium = skillTrees.fugitive.Gunslinger.upgrades['Equilibrium']
		if (weaponData.weaponType === 'Pistol' || weaponData.weaponType === 'Akimbo Pistol') {
			baseStats.accuracy += equilibrium === 'aced' ? 8 : 0
		}

		// Gun Nut
		const gunNut = skillTrees.fugitive.Gunslinger.upgrades['Gun Nut']
		if (weaponData.weaponType === 'Pistol') {
			baseStats.magazine += gunNut === 'basic' || gunNut === 'aced' ? 5 : 0
			baseStats.rateOfFire += gunNut === 'aced' ? weaponData.stats.rateOfFire / 2 : 0
		}
		if (weaponData.weaponType === 'Akimbo Pistol') {
			baseStats.magazine += gunNut === 'basic' || gunNut === 'aced' ? 10 : 0
			baseStats.rateOfFire += gunNut === 'aced' ? weaponData.stats.rateOfFire / 2 : 0
		}

		// Akimbo
		const akimbo = skillTrees.fugitive.Gunslinger.upgrades['Akimbo']
		if (['Akimbo Pistol', 'Akimbo SMG', 'Akimbo Shotgun'].includes(weaponData.weaponType)) {
			baseStats.accuracy += akimbo === 'basic' || akimbo === 'aced' ? 8 : 0
			baseStats.accuracy += akimbo === 'aced' ? 8 : 0
			baseStats.totalAmmo += akimbo === 'aced' ? (weaponData.stats.totalAmmo + baseStats.totalAmmo) * 0.5 : 0
		}

		// One Handed Talent
		const oneHandedTalent = skillTrees.fugitive.Gunslinger.upgrades['One Handed Talent']
		if (weaponData.weaponType === 'Pistol' || weaponData.weaponType === 'Akimbo Pistol') {
			baseStats.damage += oneHandedTalent === 'basic' || oneHandedTalent === 'aced' ? 5 : 0
			baseStats.damage += oneHandedTalent === 'aced' ? 10 : 0
		}

		// TODO: Find reload speed calculating formula
		// const aggressiveReload = skillTrees.mastermind.Sharpshooter.upgrades['Aggressive Reload']
		// const shotgunCBQ = skillTrees.enforcer.Shotgunner.upgrades['Shotgun CBQ']
		// const desperado = skillTrees.fugitive.Gunslinger.upgrades['Desperado']

		return baseStats
	}

	const modStats = () => {
		const baseStats: WeaponStats = {
			totalAmmo: 0,
			magazine: 0,
			reload: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0,
			rateOfFire: 0
		}

		typedObject.entries(weaponModifications).forEach(([modType, modName]) => {
			const modData = weaponData.modifications[modType]?.find(mod => mod.name === modName)
			if (!modData) return
			typedObject.entries(modData.stats).forEach(([label, stat]) => {
				baseStats[(label as keyof ModificationStats)] += stat
			})
		})

		return baseStats
	}

	const additionalStats = (baseStats: WeaponStats) => {
		const stats = structuredClone(baseStats)

		const addStats = ([label, stat]: [string, number]): void => {
			stats[(label as keyof WeaponStats)] += stat
		}

		Object.entries(skillStats()).forEach(addStats)
		Object.entries(modStats()).forEach(addStats)

		return stats
	}

	return {
		base: baseStats(showExtraStats),
		skill: skillStats(),
		mod: modStats(),
		additional: additionalStats({
			totalAmmo: 0,
			magazine: 0,
			reload: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0,
			rateOfFire: 0
		}),
		total: additionalStats(weaponData.stats)
	}
}

export default useWeaponStats