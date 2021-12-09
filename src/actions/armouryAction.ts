import { ADDWEAPON, CHANGEMOD, REMOVEMOD, REMOVEWEAPON, RESETARMOURY, RESETWEAPONSMODS } from 'constants/armouryConstant'
import { Modification, ModificationSlot, Slot, WeaponData, WeaponModifications } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

export interface SelectWeapon {
	slot: Slot;
	id: number;
}

export interface AddWeaponAction {
	slot: Slot;
	weapon: WeaponData;
	mods?: Partial<Record<keyof WeaponModifications, string>>
}

export interface ChangeModAction extends SelectWeapon {
	newMod: Modification<string>;
}

export interface RemoveModAction extends SelectWeapon {
	modSlot: ModificationSlot;
}

export const addWeapon = createAction(ADDWEAPON)<AddWeaponAction>()
export const removeWeapon = createAction(REMOVEWEAPON)<SelectWeapon>()
export const resetArmoury = createAction(RESETARMOURY)<Slot>()
export const changeMod = createAction(CHANGEMOD)<ChangeModAction>()
export const removeMod = createAction(REMOVEMOD)<RemoveModAction>()
export const resetWeaponsMods = createAction(RESETWEAPONSMODS)<SelectWeapon>()

const armouryActions = {
	addWeapon,
	removeWeapon,
	resetArmoury,
	changeMod,
	removeMod,
	resetWeaponsMods
}

export default armouryActions