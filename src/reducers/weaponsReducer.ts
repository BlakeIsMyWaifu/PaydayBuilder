import actions from 'actions/weaponsAction'
import { meleeData } from 'data/weapons/melees'
import defaultState from 'defualtStates/weaponsDefaultState'
import { getType } from 'typesafe-actions'

const weaponReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case getType(actions.changeMelee):
			const melee: meleeData = action.payload
			return {
				...state,
				melee
			}
		default:
			return state
	}
}

export default weaponReducer