import actions from 'actions/characterAction'
import { armourData } from 'data/character/armours'
import { characterData } from 'data/character/characters'
import { equipmentData } from 'data/character/equipment'
import { maskData } from 'data/character/masks'
import defaultstate from 'defualtStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.changeMask):
			const mask: maskData = action.payload
			return {
				...state,
				mask: {
					...state.mask,
					equipped: mask
				}
			}
		case getType(actions.toggleMaskFilter):
			const filter: string = action.payload
			return {
				...state,
				mask: {
					...state.mask,
					filter: {
						...state.mask.filter,
						[filter]: !state.mask.filter[filter]
					}
				}
			}
		case getType(actions.changeCharacter):
			const character: characterData = action.payload
			return {
				...state,
				character
			}
		case getType(actions.changeArmour):
			const armour: armourData = action.payload
			return {
				...state,
				armour
			}
		case getType(actions.changeEquipment):
			const [equipment, slot]: [equipmentData, 'primary' | 'secondary'] = action.payload
			return {
				...state,
				equipment: {
					...state.equipment,
					[slot]: equipment
				}
			}
		default:
			return state
	}
}

export default characterReducer