import { CHANGEMELEE, CHANGETHROWABLE, CHANGEWEAPON, RESETWEAPON } from 'constants/weaponsConstant'
import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'
import { createAction } from 'typesafe-actions'

export interface ChangeWeaponAction {
	slot: 'primary' | 'secondary';
	weapon: number;
}

export const changeWeapon = createAction(CHANGEWEAPON)<ChangeWeaponAction>()
export const changeThrowable = createAction(CHANGETHROWABLE)<ThrowableList>()
export const changeMelee = createAction(CHANGEMELEE)<MeleeList>()

export const resetWeapon = createAction(RESETWEAPON)<void>()

const weaponsActions = {
	changeWeapon,
	changeThrowable,
	changeMelee,
	resetWeapon
}

export default weaponsActions