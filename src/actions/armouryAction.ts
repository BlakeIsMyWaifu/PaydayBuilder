import { ADDWEAPON, REMOVEWEAPON, RESETARMOURY } from 'constants/armouryConstant'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

type slot = 'primary' | 'secondary';

interface AddWeaponAction {
	slot: slot;
	weapon: WeaponData;
}

interface RemoveWeaponAction {
	slot: slot;
	id: number;
}

export const addWeapon = createAction(ADDWEAPON)<AddWeaponAction>()
export const removeWeapon = createAction(REMOVEWEAPON)<RemoveWeaponAction>()
export const resetArmoury = createAction(RESETARMOURY)<slot>()

const armouryActions = {
	addWeapon,
	removeWeapon,
	resetArmoury
}

export default armouryActions