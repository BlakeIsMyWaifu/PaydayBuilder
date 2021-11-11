import { ADDWEAPON, REMOVEWEAPON, RESETARMOURY } from 'constants/armouryConstant'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

type Slot = 'primary' | 'secondary'

interface AddWeaponAction {
	slot: Slot;
	weapon: WeaponData;
}

interface RemoveWeaponAction {
	slot: Slot;
	id: number;
}

export const addWeapon = createAction(ADDWEAPON)<AddWeaponAction>()
export const removeWeapon = createAction(REMOVEWEAPON)<RemoveWeaponAction>()
export const resetArmoury = createAction(RESETARMOURY)<Slot>()

const armouryActions = {
	addWeapon,
	removeWeapon,
	resetArmoury
}

export default armouryActions