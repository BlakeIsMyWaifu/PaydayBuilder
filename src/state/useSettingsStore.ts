import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'

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

const actionName = createActionName('settings')

const createActionSlice: Slice<SettingsStore, SettingsActionSlice> = set => ({
	toggleLeftFacing: () => {
		set(state => ({
			leftFacing: !state.leftFacing
		}), ...actionName('toggleLeftFacing'))
	}
})

export const useSettingsStore = create<SettingsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Settings Store' }))