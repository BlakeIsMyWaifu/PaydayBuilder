/* eslint-disable @typescript-eslint/no-unused-vars */

import actions from 'actions/abilitiesAction'
import { PerkData } from 'data/abilities/perks'
import { CharacterData } from 'data/character/characters'
import { MaskData } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import defaultState, { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { getType } from 'typesafe-actions'

const abilitiesReducer = (state = defaultState, action: Record<'type' | 'payload', any>): AbilitiesState => {

	const changePerkdeck = (perkdeck: PerkData): AbilitiesState => {
		return {
			...state,
			perkdeck
		}
	}

	switch (action.type) {
		case getType(actions.changePerkdeck):
			return changePerkdeck(action.payload)

		// WIP Crew Management
		case getType(actions.changeCrewMask):
			const mask: MaskData = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewCharacter):
			const character: CharacterData = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewOutfit):
			const outfit = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewWeapon):
			const weapon: WeaponData = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewAbility):
			const ability = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewBoost):
			const boost = action.payload
			return {
				...state
			}
		case getType(actions.resetAbilities):
			return defaultState
		default:
			return state
	}
}

export default abilitiesReducer