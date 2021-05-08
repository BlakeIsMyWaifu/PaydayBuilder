import actions from 'actions/characterAction'
import defaultstate from 'states/characterDefaultState'
import { ActionType, getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.changeMask):
			return {
				...state,
				mask: action.payload
			}
		case getType(actions.changeCharacter):
			return {
				...state,
				character: action.payload
			}
		default:
			return state
	}
}

export default characterReducer