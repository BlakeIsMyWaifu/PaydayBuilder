import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'
import create from 'zustand'

import { Slice } from './storeTypes'

type ArmouryStore = ArmouryStateSlice & ArmouryActionSlice

type ArmouryStateSlice = Record<Slot, Record<number, Weapon>>

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

interface ArmouryActionSlice {
	addWeapon: () => void;
	removeWeapon: () => void;
	resetArmoury: () => void;
	changeMod: () => void;
	removeMod: () => void;
	resetWeaponMods: () => void;
}

const createActionSlice: Slice<ArmouryStore, ArmouryActionSlice> = () => ({
	addWeapon: () => null,
	removeWeapon: () => null,
	resetArmoury: () => null,
	changeMod: () => null,
	removeMod: () => null,
	resetWeaponMods: () => null
})

export const useArmouryStore = create<ArmouryStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))