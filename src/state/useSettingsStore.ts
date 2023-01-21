import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { DevTools, Persist, Slice, createActionName } from './storeTypes'

// State

interface SettingsStateSlice {
	leftFacing: boolean;
}

const initialState: SettingsStateSlice = {
	leftFacing: false
}

const createStateSlice: Slice<SettingsStore, SettingsStateSlice, Middlewares> = () => initialState

// Action

interface SettingsActionSlice {
	toggleLeftFacing: () => void;
}

const actionName = createActionName('settings')

const createActionSlice: Slice<SettingsStore, SettingsActionSlice, Middlewares> = set => ({
	toggleLeftFacing: () => {
		set(state => ({
			leftFacing: !state.leftFacing
		}), ...actionName('toggleLeftFacing'))
	}
})

// Store

type SettingsStore = SettingsStateSlice & SettingsActionSlice

type Middlewares = [DevTools, Persist]

export const useSettingsStore = create<SettingsStore>()(devtools(persist((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Settings' }), { name: 'Settings Store' }))