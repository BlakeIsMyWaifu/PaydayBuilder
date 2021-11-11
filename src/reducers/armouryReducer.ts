import actions from 'actions/armouryAction'
import { Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import defaultState, { ArmouryState } from 'defaultStates/armouryDefaultState'
import { getType } from 'typesafe-actions'

const armouryReducer = (state = defaultState, action: Record<'type' | 'payload', any>): ArmouryState => {
	switch (action.type) {
		case getType(actions.addWeapon):
			const addSlot: 'primary' | 'secondary' = action.payload.slot
			const weaponData: WeaponData = action.payload.weapon
			const nextNum = Math.max(0, ...Object.keys(state[addSlot]).map(num => +num)) + 1
			const weapon: Weapon = {
				id: nextNum,
				weapon: weaponData,
				modifications: []
			}
			return {
				...state,
				[addSlot]: {
					...state[addSlot],
					[nextNum]: weapon
				}
			}
		case getType(actions.removeWeapon):
			const removeSlot: 'primary' | 'secondary' = action.payload.slot
			const index: number = action.payload.id
			const newState = { ...state[removeSlot] }
			delete newState[index]
			return {
				...state,
				[removeSlot]: newState
			}
		case getType(actions.resetArmoury):
			const slot: 'primary' | 'secondary' = action.payload
			return {
				...state,
				[slot]: defaultState[slot]
			}
		default:
			return state
	}
}

export default armouryReducer