import { TableCompare, TableEquipped } from 'components/Table'
import modificationList from 'data/weapons/guns/modificationList'
import { ModificationSlot, ModificationStats, Weapon, WeaponData, WeaponStats } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import findWeapon from 'utils/findWeapon'

interface WeaponsStatsTableProps {
	showExtraStats: boolean;
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const WeaponsStatsTable: React.FC<WeaponsStatsTableProps> = ({ showExtraStats, selectedWeapon, equippedWeapon }) => {

	const baseStats = (weapon: WeaponData): WeaponStats => {
		if (!showExtraStats) return weapon.stats

		const extra = weapon.extraStats
		const extraStats = {
			tacticalReload: extra.tacticalReload ? (typeof extra.tacticalReload === 'number' ? `${extra.tacticalReload}s` : `${extra.tacticalReload[0]}s | ${extra.tacticalReload[1]}s`) : '',
			reload: `${extra.reload}s`,
			equipDelays: `${extra.equipDelays[0]}s | ${extra.equipDelays[1]}s`,
			ammoPickup: extra.ammoPickup ? `${extra.ammoPickup.join(' | ')}` : '',
			recoilHorizontal: `${extra.recoilHorizontal[0]}' | ${extra.recoilHorizontal[1]}'`,
			recoilVertical: `${extra.recoilVertical[0]}' | ${extra.recoilVertical[1]}'`,
			spread: `${extra.spread}'`,
			damageModifier: extra.damageModifier ? `${extra.damageModifier.join(' | ')}` : ''
		}

		return ({ ...weapon.stats, ...extraStats })
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const skillStats = (weapon: Weapon): WeaponStats => {
		const stats: WeaponStats = {
			magazine: 0,
			totalAmmo: 0,
			rateOfFire: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0
		}

		return stats
	}

	const modStats = (weapon: Weapon): ModificationStats => {
		const baseStats: ModificationStats = {
			totalAmmo: 0,
			magazine: 0,
			reload: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0
		}

		Object.entries(weapon.modifications).forEach(([type, modName]) => {
			const modData = modificationList[(type as ModificationSlot)][modName]
			Object.entries(modData.stats).forEach(([label, stat]) => {
				baseStats[(label as keyof ModificationStats)] += stat
			})
		})

		return baseStats
	}

	const totalStats = (weapon: Weapon) => {
		return { ...skillStats(weapon), ...modStats(weapon) }
	}

	return (
		equippedWeapon ?
			<TableCompare
				equippedStats={baseStats(findWeapon(equippedWeapon.weaponFind))}
				selectedStats={baseStats(findWeapon(selectedWeapon.weaponFind))}
				equippedAdditional={totalStats(equippedWeapon)}
				selectedAdditional={totalStats(selectedWeapon)}
			/> :
			<TableEquipped
				baseStats={baseStats(findWeapon(selectedWeapon.weaponFind))}
				additionalStats={{ skill: skillStats(selectedWeapon), mod: modStats(selectedWeapon) }}
			/>
	)
}

export default WeaponsStatsTable