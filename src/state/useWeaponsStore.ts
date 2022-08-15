import { Slot } from 'data/weapons/guns/weaponTypes'
import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'
import { encodeMelee, encodeThrowable, encodeWeapons } from 'utils/encodeBuild'
import create from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'
import { updateData } from './useBuildsStore'

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

const actionName = createActionName('weapons')

const createActionSlice: Slice<WeaponsStore, WeaponsActionSlice> = set => ({
	changeWeapon: (slot, weaponId) => {
		set({ [slot]: weaponId }, ...actionName('changeWeapon'))
	},
	changeThrowable: throwable => {
		set({ throwable }, ...actionName('changeThrowable'))
	},
	changeMelee: melee => {
		set({ melee }, ...actionName('changeMelee'))
	}
})

// Store

type WeaponsStore = WeaponsStateSlice & WeaponsActionSlice

export const useWeaponsStore = create<WeaponsStore>()(devtools(subscribeWithSelector((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
})), { name: 'Weapons Store' }))

// Subscriptions

useWeaponsStore.subscribe(state => [state.primary, state.secondary], ([primaryId, secondaryId]) => {
	updateData('w', encodeWeapons(primaryId, secondaryId))
})

useWeaponsStore.subscribe(state => state.throwable, state => {
	updateData('t', encodeThrowable(state))
})

useWeaponsStore.subscribe(state => state.melee, state => {
	updateData('m', encodeMelee(state))
})