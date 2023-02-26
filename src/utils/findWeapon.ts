import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { type WeaponData, type WeaponFind } from 'data/weapons/guns/weaponTypes'

export const findWeapon = ({ name, type, slot }: WeaponFind): WeaponData => {
	name ??= 'AMCAR'
	type ??= 'Assault Rifle'
	slot ??= 'primary'

	const slotObject: Record<string, Record<string, WeaponData>> = slot === 'primary' ? primary : secondary
	const typeObject: Record<string, WeaponData> = slotObject[type]
	const weaponData: WeaponData = typeObject[name]

	return weaponData
}

export default findWeapon