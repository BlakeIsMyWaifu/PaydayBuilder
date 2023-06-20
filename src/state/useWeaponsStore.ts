import { type Slot } from 'data/weapons/guns/weaponTypes'
import { type MeleeList } from 'data/weapons/melees'
import { type ThrowableList } from 'data/weapons/throwables'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createActionName, type Slice } from './storeTypes'

// State

export interface WeaponsStateSlice {
	primary: number;
	secondary: number;
	throwable: ThrowableList;
	melee: MeleeList;
}

const initialState: WeaponsStateSlice = {
	primary: 0,
	secondary: 0,
	throwable: 'Frag Grenade',
	melee: 'Weapon Butt'
}

const createStateSlice: Slice<WeaponsStore, WeaponsStateSlice> = () => initialState

// Action

interface WeaponsActionSlice {
	changeWeapon: (slot: Slot, weaponId: number) => void;
	changeThrowable: (throwable: ThrowableList) => void;
	changeMelee: (melee: MeleeList) => void;
}

const actionName = createActionName<keyof WeaponsActionSlice>('weapons')

const createActionSlice: Slice<WeaponsStore, WeaponsActionSlice> = (set, get) => ({
	changeWeapon: (slot, weaponId) => {
		if (weaponId === get()[slot]) return
		set({ [slot]: weaponId }, ...actionName('changeWeapon'))
	},
	changeThrowable: throwable => {
		if (throwable === get().throwable) return
		set({ throwable }, ...actionName('changeThrowable'))
	},
	changeMelee: melee => {
		if (melee === get().melee) return
		set({ melee }, ...actionName('changeMelee'))
	}
})

// Store

type WeaponsStore = WeaponsStateSlice & WeaponsActionSlice

export const useWeaponsStore = create<WeaponsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Weapons Store' }))