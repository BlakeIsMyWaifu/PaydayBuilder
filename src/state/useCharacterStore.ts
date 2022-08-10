import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
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
	changeMask: () => void;
	changeCharacter: () => void;
	changeArmour: () => void;
	changeEquipment: () => void;
}

const createActionSlice: Slice<CharacterStore, CharacterActionSlice> = () => ({
	changeMask: () => null,
	changeCharacter: () => null,
	changeArmour: () => null,
	changeEquipment: () => null
})

export const useCharacterStore = create<CharacterStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))