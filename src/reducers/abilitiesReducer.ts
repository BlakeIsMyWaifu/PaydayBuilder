/* eslint-disable @typescript-eslint/no-unused-vars */

import actions from 'actions/abilitiesAction'
import { CrewAbilityList } from 'data/abilities/crewAbilities'
import { CrewBoostsList } from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import { CharacterList } from 'data/character/characters'
import { MaskList } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import defaultState, { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { getType } from 'typesafe-actions'

const abilitiesReducer = (state = defaultState, action: Record<'type' | 'payload', any>): AbilitiesState => {

	const changePerkdeck = (perkdeck: PerkDeckList): AbilitiesState => {
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
			const mask: MaskList = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewCharacter):
			const character: CharacterList = action.payload
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
			const ability: CrewAbilityList = action.payload
			return {
				...state
			}
		case getType(actions.changeCrewBoost):
			const boost: CrewBoostsList = action.payload
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