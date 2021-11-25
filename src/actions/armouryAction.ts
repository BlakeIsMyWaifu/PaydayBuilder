import { ADDWEAPON, CHANGEMOD, REMOVEMOD, REMOVEWEAPON, RESETARMOURY } from 'constants/armouryConstant'
import { Modification, ModificationSlot, Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

export interface FindWeapon {
	slot: Slot;
	id: number;
}

export interface AddWeaponAction {
	slot: Slot;
	weapon: WeaponData;
}

export interface ChangeModAction extends FindWeapon {
	newMod: Modification<string>;
}

export interface RemoveModAction extends FindWeapon {
	modSlot: ModificationSlot;
}

export const addWeapon = createAction(ADDWEAPON)<AddWeaponAction>()
export const removeWeapon = createAction(REMOVEWEAPON)<FindWeapon>()
export const resetArmoury = createAction(RESETARMOURY)<Slot>()
export const changeMod = createAction(CHANGEMOD)<ChangeModAction>()
export const removeMod = createAction(REMOVEMOD)<RemoveModAction>()

const armouryActions = {
	addWeapon,
	removeWeapon,
	resetArmoury,
	changeMod,
	removeMod
}

export default armouryActions