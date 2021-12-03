import { CHANGEARMOUR, CHANGECHARACTER, CHANGEEQUIPMENT, CHANGEMASK, RESETCHARACTER } from 'constants/characterConstant'
import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export interface ChangeEquipmentAction {
	equipment: EquipmentList | null;
	slot: 'primary' | 'secondary';
}

export const changeMask = createAction(CHANGEMASK)<MaskList>()
export const changeCharacter = createAction(CHANGECHARACTER)<CharacterList>()
export const changeArmour = createAction(CHANGEARMOUR)<ArmourList>()
export const changeEquipment = createAction(CHANGEEQUIPMENT)<ChangeEquipmentAction>()

export const resetCharacter = createAction(RESETCHARACTER)<void>()

const characterActions = {
	changeMask,
	changeCharacter,
	changeArmour,
	changeEquipment,
	resetCharacter
}

export default characterActions