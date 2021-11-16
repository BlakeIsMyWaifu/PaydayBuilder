import actions from 'actions/settingsAction'
import defaultState, { SettingsState } from 'defaultStates/settingsDefaultState'
import { getType } from 'typesafe-actions'

const settingsReducer = (state = defaultState, action: Record<'type' | 'payload', any>): SettingsState => {

	const changeLeftFacing = (leftFacing: boolean): SettingsState => {
		return {
			...state,
			leftFacing
		}
	}

	switch (action.type) {
		case getType(actions.changeLeftFacing):
			return changeLeftFacing(action.payload)
		case getType(actions.resetSettings):
			return defaultState
		default:
			return state
	}
}

export default settingsReducer