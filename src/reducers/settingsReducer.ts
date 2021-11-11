import actions from 'actions/settingsAction'
import defaultState, { SettingsState } from 'defaultStates/settingsDefaultState'
import { getType } from 'typesafe-actions'

const settingsReducer = (state = defaultState, action: Record<'type' | 'payload', any>): SettingsState => {
	switch (action.type) {
		case getType(actions.changeLeftFacing):
			const leftFacing: boolean = action.payload
			return {
				...state,
				leftFacing
			}
		case getType(actions.resetSettings):
			return defaultState
		default:
			return state
	}
}

export default settingsReducer