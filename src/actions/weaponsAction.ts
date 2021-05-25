import { CHANGEMELEE, CHANGEPRIMARY, CHANGESECONDARY, CHANGETHROWABLE } from 'constants/weaponsConstant';
import { meleeData } from 'data/weapons/melees';
import { createAction } from 'typesafe-actions';

export const changePrimary = createAction(CHANGEPRIMARY)()
export const changeSecondary = createAction(CHANGESECONDARY)()
export const changeThrowable = createAction(CHANGETHROWABLE)()
export const changeMelee = createAction(CHANGEMELEE)<meleeData>()

export default { changePrimary, changeSecondary, changeThrowable, changeMelee }