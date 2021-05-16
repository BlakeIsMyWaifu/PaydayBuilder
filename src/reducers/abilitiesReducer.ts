import actions from 'actions/abilitiesAction'
import { perk } from 'data/abilities/perks'
import defaultState from 'defualtStates/abilitiesDefaultState'
import { getType } from 'typesafe-actions'

const abilitiesReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case getType(actions.changePerkdeck):
			const perkdeck: perk = action.payload
			return {
				...state,
				perkdeck
			}
		default:
			return state
	}
}

export default abilitiesReducer