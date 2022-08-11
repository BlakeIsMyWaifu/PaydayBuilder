import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
import { Slot } from 'data/weapons/guns/weaponTypes'
import create from 'zustand'

import { Slice } from './storeTypes'

type CharacterStore = CharacterStateSlice & CharacterActionSlice

interface CharacterStateSlice {
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

interface CharacterActionSlice {
	changeMask: (mask: MaskList) => void;
	changeCharacter: (character: CharacterList) => void;
	changeArmour: (armour: ArmourList) => void;
	changeEquipment: (slot: Slot, equipment: EquipmentList | null) => void;
}

const createActionSlice: Slice<CharacterStore, CharacterActionSlice> = set => ({
	changeMask: mask => {
		set({ mask })
	},
	changeCharacter: character => {
		set({ character })
	},
	changeArmour: armour => {
		set({ armour })
	},
	changeEquipment: (slot, equipment) => {
		set(state => ({
			equipment: {
				...state.equipment,
				[slot]: equipment
			}
		}))
	}
})

export const useCharacterStore = create<CharacterStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))