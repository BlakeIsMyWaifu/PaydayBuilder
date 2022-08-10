import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'
import create from 'zustand'

import { Slice } from './storeTypes'

type WeaponStore = WeaponStateSlice & WeaponActionSlice

interface WeaponStateSlice {
	primary: number;
	secondary: number;
	throwable: ThrowableList;
	melee: MeleeList;
}

const initialState: WeaponStateSlice = {
	primary: 0,
	secondary: 0,
	throwable: 'Frag Grenade',
	melee: 'Weapon Butt'
}

const createStateSlice: Slice<WeaponStore, WeaponStateSlice> = () => initialState

interface WeaponActionSlice {
	changeWeapon: () => void;
	changeThrowable: () => void;
	changeMelee: () => void;
}

const createActionSlice: Slice<WeaponStore, WeaponActionSlice> = () => ({
	changeWeapon: () => null,
	changeThrowable: () => null,
	changeMelee: () => null
})

export const useWeaponStore = create<WeaponStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))