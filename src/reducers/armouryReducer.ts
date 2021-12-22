import actions, { AddWeaponAction, ChangeModAction, RemoveModAction, SelectWeapon } from 'actions/armouryAction'
import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'
import defaultState, { ArmouryState } from 'defaultStates/armouryDefaultState'
import { getType } from 'typesafe-actions'
import { findNextNum } from 'utils/maths'

const armouryReducer = (state = defaultState, action: Record<'type' | 'payload', any>): ArmouryState => {

	const addWeapon = ({ slot, weapon, mods }: AddWeaponAction): ArmouryState => {
		const nextNum = findNextNum(state[slot])
		const newWeapon: Weapon = {
			id: nextNum,
			weaponFind: {
				name: weapon.name,
				type: weapon.weaponType,
				slot: slot
			},
			modifications: mods || {}
		}
		return {
			...state,
			[slot]: {
				...state[slot],
				[nextNum]: newWeapon
			}
		}
	}

	const removeWeapon = ({ slot, id }: SelectWeapon): ArmouryState => {
		const newState = { ...state[slot] }
		delete newState[id]
		return {
			...state,
			[slot]: newState
		}
	}

	const resetArmoury = (slot: Slot): ArmouryState => {
		return {
			...state,
			[slot]: defaultState[slot]
		}
	}

	const changeMod = ({ slot, id, newMod }: ChangeModAction): ArmouryState => {
		return {
			...state,
			[slot]: {
				...state[slot],
				[id]: {
					...state[slot][id],
					modifications: {
						...state[slot][id].modifications,
						[newMod.slot]: newMod.name
					}
				}
			}
		}
	}

	const removeMod = ({ slot, id, modSlot }: RemoveModAction): ArmouryState => {
		const newState = { ...state[slot][id].modifications }
		delete newState[modSlot]
		return {
			...state,
			[slot]: {
				...state[slot],
				[id]: {
					...state[slot][id],
					modifications: {
						...newState
					}
				}
			}
		}
	}

	const resetWeaponsMods = ({ slot, id }: SelectWeapon): ArmouryState => {
		return {
			...state,
			[slot]: {
				...state[slot],
				[id]: {
					...state[slot][id],
					modifications: {}
				}
			}
		}
	}

	switch (action.type) {
		case getType(actions.addWeapon):
			return addWeapon(action.payload)
		case getType(actions.removeWeapon):
			return removeWeapon(action.payload)
		case getType(actions.resetArmoury):
			return resetArmoury(action.payload)
		case getType(actions.changeMod):
			return changeMod(action.payload)
		case getType(actions.removeMod):
			return removeMod(action.payload)
		case getType(actions.resetWeaponsMods):
			return resetWeaponsMods(action.payload)
		default:
			return state
	}
}

export default armouryReducer