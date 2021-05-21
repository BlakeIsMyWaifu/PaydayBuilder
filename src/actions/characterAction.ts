import { CHANGEARMOUR, CHANGECHARACTER, CHANGEEQUIPMENT, CHANGEMASK, TOGGLEMASKFILTER } from 'constants/characterConstant'
import { armourData } from 'data/character/armours'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export const changeMask = createAction(CHANGEMASK)<maskData>()
export const toggleMaskFilter = createAction(TOGGLEMASKFILTER)<string>()
export const changeCharacter = createAction(CHANGECHARACTER)<characterData>()
export const changeArmour = createAction(CHANGEARMOUR)<armourData>()
export const changeEquipment = createAction(CHANGEEQUIPMENT)()

export default { changeMask, toggleMaskFilter, changeCharacter, changeArmour, changeEquipment }