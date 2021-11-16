import actions, { ChangeEquipmentAction } from 'actions/characterAction'
import { ArmourData } from 'data/character/armours'
import { CharacterData } from 'data/character/characters'
import { MaskData } from 'data/character/masks'
import defaultstate, { CharacterState } from 'defaultStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: Record<'type' | 'payload', any>): CharacterState => {

	const changeMask = (mask: MaskData): CharacterState => {
		return {
			...state,
			mask
		}
	}

	const changeCharacter = (character: CharacterData): CharacterState => {
		return {
			...state,
			character
		}
	}

	const changeArmour = (armour: ArmourData): CharacterState => {
		return {
			...state,
			armour
		}
	}

	const changeEquipment = ({ equipment, slot }: ChangeEquipmentAction): CharacterState => {
		return {
			...state,
			equipment: {
				...state.equipment,
				[slot]: equipment
			}
		}
	}

	switch (action.type) {
		case getType(actions.changeMask):
			return changeMask(action.payload)
		case getType(actions.changeCharacter):
			return changeCharacter(action.payload)
		case getType(actions.changeArmour):
			return changeArmour(action.payload)
		case getType(actions.changeEquipment):
			return changeEquipment(action.payload)
		case getType(actions.resetCharacter):
			return defaultstate
		default:
			return state
	}
}

export default characterReducer