import { CHANGEARMOUR, CHANGECHARACTER, CHANGEEQUIPMENT, CHANGEMASK, RESETCHARACTER } from 'constants/characterConstant'
import { ArmourData } from 'data/character/armours'
import { CharacterData } from 'data/character/characters'
import { EquipmentData } from 'data/character/equipment'
import { MaskData } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export const changeMask = createAction(CHANGEMASK)<MaskData>()
export const changeCharacter = createAction(CHANGECHARACTER)<CharacterData>()
export const changeArmour = createAction(CHANGEARMOUR)<ArmourData>()
export const changeEquipment = createAction(CHANGEEQUIPMENT)<[EquipmentData | null, 'primary' | 'secondary']>()

export const resetCharacter = createAction(RESETCHARACTER)<void>()

const characterActions = {
	changeMask,
	changeCharacter,
	changeArmour,
	changeEquipment,
	resetCharacter
}

export default characterActions