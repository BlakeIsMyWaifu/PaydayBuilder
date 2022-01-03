import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'

export interface WeaponsState {
	primary: number;
	secondary: number;
	throwable: ThrowableList;
	melee: MeleeList;
}

export const weaponsDefaultState: WeaponsState = {
	primary: 0,
	secondary: 0,
	throwable: 'Frag Grenade',
	melee: 'Weapon Butt'
}

interface ChangeWeaponAction {
	slot: 'primary' | 'secondary';
	weapon: number;
}

export const weaponsSlice = createSlice({
	name: 'weapons',
	initialState: weaponsDefaultState,
	reducers: {
		changeWeapon: (state, action: PayloadAction<ChangeWeaponAction>) => {
			const { slot, weapon } = action.payload
			state[slot] = weapon
		},
		changeThrowable: (state, action: PayloadAction<ThrowableList>) => {
			state.throwable = action.payload
		},
		changeMelee: (state, action: PayloadAction<MeleeList>) => {
			state.melee = action.payload
		}
	}
})

export const {
	changeWeapon,
	changeThrowable,
	changeMelee
} = weaponsSlice.actions

export default weaponsSlice.reducer