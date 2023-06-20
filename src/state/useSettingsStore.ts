import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { createActionName, type DevTools, type Persist, type Slice } from './storeTypes'

// State

interface SettingsStateSlice {
	leftFacing: boolean;
	acceptedCookies: boolean;
}

const initialState: SettingsStateSlice = {
	leftFacing: false,
	acceptedCookies: false
}

const createStateSlice: Slice<SettingsStore, SettingsStateSlice, Middlewares> = () => initialState

// Action

interface SettingsActionSlice {
	toggleLeftFacing: () => void;
	acceptCookies: () => void;
}

const actionName = createActionName<keyof SettingsActionSlice>('settings')

const createActionSlice: Slice<SettingsStore, SettingsActionSlice, Middlewares> = set => ({
	toggleLeftFacing: () => {
		set(state => ({
			leftFacing: !state.leftFacing
		}), ...actionName('toggleLeftFacing'))
	},
	acceptCookies: () => {
		set({ acceptedCookies: true }, ...actionName('acceptCookies'))
	}
})

// Store

type SettingsStore = SettingsStateSlice & SettingsActionSlice

type Middlewares = [DevTools, Persist]

export const useSettingsStore = create<SettingsStore>()(devtools(persist((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Settings' }), { name: 'Settings Store' }))