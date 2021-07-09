import { CHANGEMELEE, CHANGETHROWABLE, CHANGEWEAPON, RESETWEAPON } from 'constants/weaponsConstant'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { meleeData } from 'data/weapons/melees'
import { throwableData } from 'data/weapons/throwables'
import { createAction } from 'typesafe-actions'

interface weaponChangeAction {
	slot: 'primary' | 'secondary';
	weapon: WeaponData;
}

export const changeWeapon = createAction(CHANGEWEAPON)<weaponChangeAction>()
export const changeThrowable = createAction(CHANGETHROWABLE)<throwableData>()
export const changeMelee = createAction(CHANGEMELEE)<meleeData>()

export const resetWeapon = createAction(RESETWEAPON)<void>()

export default { changeWeapon, changeThrowable, changeMelee, resetWeapon }