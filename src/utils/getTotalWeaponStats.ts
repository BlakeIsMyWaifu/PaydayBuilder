import { Modification, ModificationSlot, Weapon, WeaponData, WeaponStats } from 'data/weapons/guns/weaponTypes'

import findWeapon from './findWeapon'
import { modificationsFromNames } from './modificationsFromNames'

export const getTotalWeaponStats = (weapon: WeaponData, modifications: Partial<Record<ModificationSlot, Modification<string>>>): WeaponStats => {
	const baseStats = { ...weapon.stats }
	Object.values(modifications).forEach(({ stats }) => {
		Object.entries(stats).forEach(([label, value]) => {
			baseStats[label as keyof WeaponStats] += value
		})
	})
	return baseStats
}

export const getTotalWeaponStatsFromWeapon = (weapon: Weapon): WeaponStats => {
	return getTotalWeaponStats(findWeapon(weapon.weaponFind), modificationsFromNames(weapon.modifications))
}

export default {
	getTotalWeaponStats,
	getTotalWeaponStatsFromWeapon
}