import { type ArmourList } from 'data/character/armours'
import { type CharacterList } from 'data/character/characters'
import { type EquipmentList } from 'data/character/equipment'
import { type MaskList } from 'data/character/masks'
import { type Slot } from 'data/weapons/guns/weaponTypes'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createActionName, type Slice } from './storeTypes'

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

const actionName = createActionName<keyof CharacterActionSlice>('character')

const createActionSlice: Slice<CharacterStore, CharacterActionSlice> = (set, get) => ({
	changeMask: mask => {
		if (mask === get().mask) return
		set({ mask }, ...actionName('changeMask'))
	},
	changeCharacter: character => {
		if (character === get().character) return
		set({ character }, ...actionName('changeCharacter'))
	},
	changeArmour: armour => {
		if (armour === get().armour) return
		set({ armour }, ...actionName('changeArmour'))
	},
	changeEquipment: (slot, equipment) => {
		if (equipment === get().equipment[slot]) return
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

export const useCharacterStore = create<CharacterStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Character Store' }))