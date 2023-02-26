import { type Modification, type ModificationSlot, type Slot, type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { encodeArmoury } from 'utils/encodeBuild'
import { findNextNum } from 'utils/maths'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { type Slice, createActionName } from './storeTypes'
import { updateData } from './useBuildsStore'

// State

export type ArmouryStateSlice = Record<Slot, Record<number, Weapon>>

const initialState: ArmouryStateSlice = {
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

const createStateSlice: Slice<ArmouryStore, ArmouryStateSlice> = () => initialState

// Action

interface ArmouryActionSlice {
	addWeapon: (weapon: WeaponData, mods?: Partial<Record<ModificationSlot, string>>) => void;
	removeWeapon: (slot: Slot, id: number) => void;
	resetArmoury: (slot: Slot) => void;
	changeMod: (slot: Slot, id: number, newMod: Modification) => void;
	removeMod: (slot: Slot, id: number, modSlot: ModificationSlot) => void;
	resetWeaponMods: (slot: Slot, id: number) => void;
}

const actionName = createActionName('armoury')

const createActionSlice: Slice<ArmouryStore, ArmouryActionSlice> = (set, get) => ({
	addWeapon: (weapon, mods) => {
		const slot = weapon.inventorySlot
		const nextNum = findNextNum(get()[slot])
		const newWeapon: Weapon = {
			id: nextNum,
			weaponFind: {
				name: weapon.name,
				type: weapon.weaponType,
				slot
			},
			modifications: mods ?? {}
		}
		set(state => ({
			[slot]: {
				...state[slot],
				[nextNum]: newWeapon
			}
		}), ...actionName('addWeapon'))
	},
	removeWeapon: (slot, id) => {
		const weapons = get()[slot]
		delete weapons[id]
		set({ [slot]: weapons }, ...actionName('removeWeapon'))
		// Not sure why but deleting doesn't trigger the subscriptions
		updateData(slot === 'primary' ? 'ap' : 'as', encodeArmoury(weapons))
	},
	resetArmoury: slot => {
		set({ [slot]: initialState[slot] }, ...actionName('resetArmoury'))
	},
	changeMod: (slot, id, newMod) => {
		set(state => ({
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
		}), ...actionName('changeMod'))
	},
	removeMod: (slot, id, modSlot) => {
		const { modifications } = get()[slot][id]
		delete modifications[modSlot]
		set(state => ({
			[slot]: {
				...state[slot],
				[id]: {
					...state[slot][id],
					modifications
				}
			}
		}), ...actionName('removeMod'))
	},
	resetWeaponMods: (slot, id) => {
		set(state => ({
			[slot]: {
				...state[slot],
				[id]: {
					...state[slot][id],
					modifications: {}
				}
			}
		}), ...actionName('resetWeaponMods'))
	}
})

// Store

type ArmouryStore = ArmouryStateSlice & ArmouryActionSlice

export const useArmouryStore = create<ArmouryStore>()(devtools(subscribeWithSelector((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
})), { name: 'Armoury Store' }))

// Subscriptions

useArmouryStore.subscribe(state => state.primary, state => {
	updateData('ap', encodeArmoury(state))
})

useArmouryStore.subscribe(state => state.secondary, state => {
	updateData('as', encodeArmoury(state))
})