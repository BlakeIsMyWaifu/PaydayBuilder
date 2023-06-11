import { type ModificationSlot, type ModificationStats, type WeaponData, type WeaponStats } from 'data/weapons/guns/weaponTypes'
import { typedObject } from 'utils/typedObject'

interface UseWeaponStats {
	base: WeaponStats;
	skill: WeaponStats;
	mod: WeaponStats;
	additional: WeaponStats;
	total: WeaponStats;
}

const useWeaponStats = (weaponData: WeaponData, weaponModifications: Partial<Record<ModificationSlot, string>>, showExtraStats = true): UseWeaponStats => {

	const baseStats = (showExtraStats: boolean): WeaponStats => {
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

	const skillStats = (): WeaponStats => {
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

		return baseStats
	}

	const modStats = (): WeaponStats => {
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

	const additionalStats = (baseStats: WeaponStats): WeaponStats => {
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