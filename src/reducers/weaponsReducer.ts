import actions from 'actions/weaponsAction'
import { meleeData } from 'data/weapons/melees'
import { throwableData } from 'data/weapons/throwables'
import defaultState from 'defualtStates/weaponsDefaultState'
import { getType } from 'typesafe-actions'

const weaponReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case getType(actions.changeThrowable):
			const throwable: throwableData = action.payload
			return {
				...state,
				throwable
			}
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