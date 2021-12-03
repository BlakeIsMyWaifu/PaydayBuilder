import actions, { ChangeEquipmentAction } from 'actions/characterAction'
import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { MaskList } from 'data/character/masks'
import defaultstate, { CharacterState } from 'defaultStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: Record<'type' | 'payload', any>): CharacterState => {

	const changeMask = (mask: MaskList): CharacterState => {
		return {
			...state,
			mask
		}
	}

	const changeCharacter = (character: CharacterList): CharacterState => {
		return {
			...state,
			character
		}
	}

	const changeArmour = (armour: ArmourList): CharacterState => {
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