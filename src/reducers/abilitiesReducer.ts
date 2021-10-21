import actions from 'actions/abilitiesAction'
import { perk } from 'data/abilities/perks'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import defaultState from 'defaultStates/abilitiesDefaultState'
import { getType } from 'typesafe-actions'

const abilitiesReducer = (state = defaultState, action: Record<'type' | 'payload', any>) => {
	switch (action.type) {
		case getType(actions.changePerkdeck):
			const perkdeck: perk = action.payload
			return {
				...state,
				perkdeck
			}
		case getType(actions.changeCrewMask):
			const mask: maskData = action.payload
			return {
				...state,
				mask
			}
		case getType(actions.changeCrewCharacter):
			const character: characterData = action.payload
			return {
				...state,
				character
			}
		case getType(actions.changeCrewOutfit):
			const outfit = action.payload
			return {
				...state,
				outfit
			}
		case getType(actions.changeCrewWeapon):
			const weapon: WeaponData = action.payload
			return {
				...state,
				weapon
			}
		case getType(actions.changeCrewAbility):
			const ability = action.payload
			return {
				...state,
				ability
			}
		case getType(actions.changeCrewBoost):
			const boost = action.payload
			return {
				...state,
				boost
			}
		case getType(actions.resetAbilities):
			return defaultState
		default:
			return state
	}
}

export default abilitiesReducer