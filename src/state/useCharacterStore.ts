import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
import { Slot } from 'data/weapons/guns/weaponTypes'
import { encodeArmour, encodeCharacter, encodeEquipment, encodeMask } from 'utils/encodeBuild'
import create from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'
import { updateData } from './useBuildsStore'

// State

export interface CharacterStateSlice {
	mask: MaskList;
	character: CharacterList;
	armour: ArmourList;
	equipment: {
		primary: EquipmentList;
		secondary: EquipmentList | null;
	};
}

const initialState: CharacterStateSlice = {
	mask: 'Preferred Character',
	character: 'Dallas',
	armour: 'Two-Piece Suit',
	equipment: {
		primary: 'Ammo Bag',
		secondary: null
	}
}

const createStateSlice: Slice<CharacterStore, CharacterStateSlice> = () => initialState

// Action

interface CharacterActionSlice {
	changeMask: (mask: MaskList) => void;
	changeCharacter: (character: CharacterList) => void;
	changeArmour: (armour: ArmourList) => void;
	changeEquipment: (slot: Slot, equipment: EquipmentList | null) => void;
}

const actionName = createActionName('character')

const createActionSlice: Slice<CharacterStore, CharacterActionSlice> = set => ({
	changeMask: mask => {
		set({ mask }, ...actionName('changeMask'))
	},
	changeCharacter: character => {
		set({ character }, ...actionName('changeCharacter'))
	},
	changeArmour: armour => {
		set({ armour }, ...actionName('changeArmour'))
	},
	changeEquipment: (slot, equipment) => {
		set(state => ({
			equipment: {
				...state.equipment,
				[slot]: equipment
			}
		}), ...actionName('changeEquipment'))
	}
})

// Store

type CharacterStore = CharacterStateSlice & CharacterActionSlice

export const useCharacterStore = create<CharacterStore>()(devtools(subscribeWithSelector((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
})), { name: 'Character Store' }))

// Subscriptions

useCharacterStore.subscribe(state => state.mask, state => {
	updateData('k', encodeMask(state))
})

useCharacterStore.subscribe(state => state.character, state => {
	updateData('c', encodeCharacter(state))
})

useCharacterStore.subscribe(state => state.armour, state => {
	updateData('a', encodeArmour(state))
})

useCharacterStore.subscribe(state => state.equipment, state => {
	updateData('d', encodeEquipment(state))
})