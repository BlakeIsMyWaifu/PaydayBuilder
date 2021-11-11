import actions from 'actions/characterAction'
import { ArmourData } from 'data/character/armours'
import { CharacterData } from 'data/character/characters'
import { EquipmentData } from 'data/character/equipment'
import { MaskData } from 'data/character/masks'
import defaultstate, { CharacterState } from 'defaultStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: Record<'type' | 'payload', any>): CharacterState => {
	switch (action.type) {
		case getType(actions.changeMask):
			const mask: MaskData = action.payload
			return {
				...state,
				mask
			}
		case getType(actions.changeCharacter):
			const character: CharacterData = action.payload
			return {
				...state,
				character
			}
		case getType(actions.changeArmour):
			const armour: ArmourData = action.payload
			return {
				...state,
				armour
			}
		case getType(actions.changeEquipment):
			const [equipment, slot]: [EquipmentData, 'primary' | 'secondary'] = action.payload
			return {
				...state,
				equipment: {
					...state.equipment,
					[slot]: equipment
				}
			}
		case getType(actions.resetCharacter):
			return defaultstate
		default:
			return state
	}
}

export default characterReducer