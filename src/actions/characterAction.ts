import { CHANGEARMOUR, CHANGECHARACTER, CHANGEEQUIPMENT, CHANGEMASK, RESETCHARACTER } from 'constants/characterConstant'
import { armourData } from 'data/character/armours'
import { characterData } from 'data/character/characters'
import { equipmentData } from 'data/character/equipment'
import { maskData } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export const changeMask = createAction(CHANGEMASK)<maskData>()
export const changeCharacter = createAction(CHANGECHARACTER)<characterData>()
export const changeArmour = createAction(CHANGEARMOUR)<armourData>()
export const changeEquipment = createAction(CHANGEEQUIPMENT)<[equipmentData | null, 'primary' | 'secondary']>()

export const resetCharacter = createAction(RESETCHARACTER)<void>()

const characterActions = {
	changeMask,
	changeCharacter,
	changeArmour,
	changeEquipment,
	resetCharacter
}

export default characterActions