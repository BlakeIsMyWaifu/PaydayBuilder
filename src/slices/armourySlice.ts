import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Modification, ModificationSlot, Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import { findNextNum } from 'utils/maths'

export type ArmouryState = Record<Slot, Record<number, Weapon>>

export const armouryDefaultState: ArmouryState = {
	primary: {
		0: {
			id: 0,
			weaponFind: {
				name: 'AMCAR',
				type: 'Assault Rifle',
				slot: 'primary'
			},
			modifications: {}
		}
	},
	secondary: {
		0: {
			id: 0,
			weaponFind: {
				name: 'Chimano 88',
				type: 'Pistol',
				slot: 'secondary'
			},
			modifications: {}
		}
	}
}

interface SelectWeapon {
	slot: Slot;
	id: number;
}

export interface AddWeaponAction {
	weapon: WeaponData;
	mods?: Partial<Record<ModificationSlot, string>>;
}

interface ChangeModAction extends SelectWeapon {
	newMod: Modification<string>;
}

interface RemoveModAction extends SelectWeapon {
	modSlot: ModificationSlot;
}

export const armourySlice = createSlice({
	name: 'armoury',
	initialState: armouryDefaultState,
	reducers: {
		addWeapon: (state, action: PayloadAction<AddWeaponAction>) => {
			const { weapon, mods } = action.payload
			const slot = weapon.inventorySlot
			const nextNum = findNextNum(state[slot])
			const newWeapon: Weapon = {
				id: nextNum,
				weaponFind: {
					name: weapon.name,
					type: weapon.weaponType,
					slot
				},
				modifications: mods || {}
			}
			state[slot][nextNum] = newWeapon
		},
		removeWeapon: (state, action: PayloadAction<SelectWeapon>) => {
			const { slot, id } = action.payload
			delete state[slot][id]
		},
		resetArmoury: (state, action: PayloadAction<Slot>) => {
			const slot = action.payload
			state[slot] = armouryDefaultState[slot]
		},
		changeMod: (state, action: PayloadAction<ChangeModAction>) => {
			const { slot, id, newMod } = action.payload
			state[slot][id].modifications[newMod.slot] = newMod.name
		},
		removeMod: (state, action: PayloadAction<RemoveModAction>) => {
			const { slot, id, modSlot } = action.payload
			delete state[slot][id].modifications[modSlot]
		},
		resetWeaponMods: (state, action: PayloadAction<SelectWeapon>) => {
			const { slot, id } = action.payload
			state[slot][id].modifications = {}
		}
	}
})

export const {
	addWeapon,
	removeWeapon,
	resetArmoury,
	changeMod,
	removeMod,
	resetWeaponMods
} = armourySlice.actions

export default armourySlice.reducer