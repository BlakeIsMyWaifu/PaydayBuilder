import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { DevTools, Slice, createActionName } from './storeTypes'

// State

interface SettingsStateSlice {
	leftFacing: boolean;
}

const initialState: SettingsStateSlice = {
	leftFacing: false
}

const createStateSlice: Slice<SettingsStore, SettingsStateSlice, [DevTools]> = () => initialState

// Action

interface SettingsActionSlice {
	toggleLeftFacing: () => void;
}

const actionName = createActionName('settings')

const createActionSlice: Slice<SettingsStore, SettingsActionSlice, [DevTools]> = set => ({
	toggleLeftFacing: () => {
		set(state => ({
			leftFacing: !state.leftFacing
		}), ...actionName('toggleLeftFacing'))
	}
})

// Store

type SettingsStore = SettingsStateSlice & SettingsActionSlice

export const useSettingsStore = create<SettingsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Settings Store' }))