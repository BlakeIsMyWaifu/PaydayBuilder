import { Modification, ModificationSlot, WeaponData, WeaponStats } from 'data/weapons/guns/weaponTypes'

export const getTotalWeaponStats = (weapon: WeaponData, modifications: Partial<Record<ModificationSlot, Modification<string>>>): WeaponStats => {
	const baseStats = { ...weapon.stats }
	Object.values(modifications).forEach(({ stats }) => {
		Object.entries(stats).forEach(([label, value]) => {
			baseStats[label as keyof WeaponStats] += value
		})
	})
	return baseStats
}