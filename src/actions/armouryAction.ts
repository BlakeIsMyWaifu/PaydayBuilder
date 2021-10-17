import { ADDWEAPON, REMOVEWEAPON, RESETARMOURY } from 'constants/armouryConstant'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

interface AddWeaponAction {
	slot: 'primary' | 'secondary';
	weapon: WeaponData;
}

interface RemoveWeaponAction {
	slot: 'primary' | 'secondary';
	id: number;
}

export const addWeapon = createAction(ADDWEAPON)<AddWeaponAction>()
export const removeWeapon = createAction(REMOVEWEAPON)<RemoveWeaponAction>()
export const resetArmoury = createAction(RESETARMOURY)<void>()

const armouryActions = {
	addWeapon,
	removeWeapon,
	resetArmoury
}

export default armouryActions