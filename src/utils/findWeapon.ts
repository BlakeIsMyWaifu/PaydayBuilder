import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { WeaponData, WeaponFind } from 'data/weapons/guns/weaponTypes'

export const findWeapon = ({ name, type, slot }: WeaponFind): WeaponData => {
	const slotObject: Record<string, Record<string, WeaponData>> = slot === 'primary' ? primary : secondary
	const typeObject: Record<string, WeaponData> = slotObject[type]
	const weaponData: WeaponData = typeObject[name]
	return weaponData
}

export default findWeapon