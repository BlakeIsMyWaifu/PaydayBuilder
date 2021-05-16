import actions from 'actions/characterAction'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import defaultstate from 'defualtStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.changeMask):
			const mask: maskData = action.payload
			return {
				...state,
				mask
			}
		case getType(actions.changeCharacter):
			const character: characterData = action.payload
			return {
				...state,
				character
			}
		default:
			return state
	}
}

export default characterReducer