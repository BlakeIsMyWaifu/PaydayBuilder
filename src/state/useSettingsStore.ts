import create from 'zustand'

import { Slice } from './storeTypes'

type SettingsStore = SettingsStateSlice & SettingsActionSlice

interface SettingsStateSlice {
	leftFacing: boolean;
}

const initialState: SettingsStateSlice = {
	leftFacing: false
}

const createStateSlice: Slice<SettingsStore, SettingsStateSlice> = () => initialState

interface SettingsActionSlice {
	toggleLeftFacing: () => void;
}

const createActionSlice: Slice<SettingsStore, SettingsActionSlice> = set => ({
	toggleLeftFacing: () => {
		set(state => ({
			leftFacing: !state.leftFacing
		}))
	}
})

export const useSettingsStore = create<SettingsStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))