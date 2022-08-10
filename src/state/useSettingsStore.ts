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
	changeLeftFacing: () => void;
}

const createActionSlice: Slice<SettingsStore, SettingsActionSlice> = () => ({
	changeLeftFacing: () => null
})

export const useSettingsStore = create<SettingsStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))