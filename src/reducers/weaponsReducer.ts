import actions from 'actions/weaponsAction'
import { MeleeData } from 'data/weapons/melees'
import { ThrowableData } from 'data/weapons/throwables'
import defaultState, { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { getType } from 'typesafe-actions'

const weaponReducer = (state = defaultState, action: Record<'type' | 'payload', any>): WeaponsState => {
	switch (action.type) {
		case getType(actions.changeWeapon):
			const { slot, weapon } = action.payload
			return {
				...state,
				[slot]: weapon
			}
		case getType(actions.changeThrowable):
			const throwable: ThrowableData = action.payload
			return {
				...state,
				throwable
			}
		case getType(actions.changeMelee):
			const melee: MeleeData = action.payload
			return {
				...state,
				melee
			}
		case getType(actions.resetWeapon):
			return defaultState
		default:
			return state
	}
}

export default weaponReducer