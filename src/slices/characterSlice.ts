import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArmourList } from 'data/character/armours'
import { CharacterList } from 'data/character/characters'
import { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
import { Slot } from 'data/weapons/guns/weaponTypes'

export interface CharacterState {
	mask: MaskList;
	character: CharacterList;
	armour: ArmourList;
	equipment: {
		primary: EquipmentList;
		secondary: EquipmentList | null;
	};
}

export const characterDefaultState: CharacterState = {
	mask: 'Preferred Character',
	character: 'Dallas',
	armour: 'Two-Piece Suit',
	equipment: {
		primary: 'Ammo Bag',
		secondary: null
	}
}

interface ChangeEquipmentAction {
	equipment: EquipmentList | null;
	slot: Slot;
}

export const characterSlice = createSlice({
	name: 'character',
	initialState: characterDefaultState,
	reducers: {
		changeMask: (state, action: PayloadAction<MaskList>) => {
			state.mask = action.payload
		},
		changeCharacter: (state, action: PayloadAction<CharacterList>) => {
			state.character = action.payload
		},
		changeArmour: (state, action: PayloadAction<ArmourList>) => {
			state.armour = action.payload
		},
		changeEquipment: (state, action: PayloadAction<ChangeEquipmentAction>) => {
			const { equipment, slot } = action.payload
			if (slot === 'primary') {
				state.equipment[slot] = equipment ?? characterDefaultState.equipment.primary
			} else {
				state.equipment[slot] = equipment
			}
		}
	}
})

export const {
	changeMask,
	changeCharacter,
	changeArmour,
	changeEquipment
} = characterSlice.actions

export default characterSlice.reducer