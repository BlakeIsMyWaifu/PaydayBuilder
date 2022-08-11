import { Slot } from 'data/weapons/guns/weaponTypes'
import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'

type WeaponsStore = WeaponsStateSlice & WeaponsActionSlice

interface WeaponsStateSlice {
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

export const useWeaponsStore = create<WeaponsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Weapons Store' }))