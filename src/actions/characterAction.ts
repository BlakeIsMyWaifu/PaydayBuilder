import { CHANGEARMOUR, CHANGECHARACTER, CHANGEEQUIPMENT, CHANGEMASK } from 'constants/characterConstant'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export const changeMask = createAction(CHANGEMASK)<maskData>()
export const changeCharacter = createAction(CHANGECHARACTER)<characterData>()
export const changeArmour = createAction(CHANGEARMOUR)()
export const changeEquipment = createAction(CHANGEEQUIPMENT)()

export default { changeMask, changeCharacter, changeArmour, changeEquipment }