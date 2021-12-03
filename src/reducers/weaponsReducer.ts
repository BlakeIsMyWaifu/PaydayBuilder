import actions, { ChangeWeaponAction } from 'actions/weaponsAction'
import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'
import defaultState, { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { getType } from 'typesafe-actions'

const weaponReducer = (state = defaultState, action: Record<'type' | 'payload', any>): WeaponsState => {

	const changeWeapon = ({ slot, weapon }: ChangeWeaponAction): WeaponsState => {
		return {
			...state,
			[slot]: weapon
		}
	}

	const changeThrowable = (throwable: ThrowableList): WeaponsState => {
		return {
			...state,
			throwable
		}
	}

	const changeMelee = (melee: MeleeList): WeaponsState => {
		return {
			...state,
			melee
		}
	}

	switch (action.type) {
		case getType(actions.changeWeapon):
			return changeWeapon(action.payload)
		case getType(actions.changeThrowable):
			return changeThrowable(action.payload)
		case getType(actions.changeMelee):
			return changeMelee(action.payload)
		case getType(actions.resetWeapon):
			return defaultState
		default:
			return state
	}
}

export default weaponReducer