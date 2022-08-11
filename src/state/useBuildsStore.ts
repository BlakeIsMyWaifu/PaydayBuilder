import { findNextNum } from 'utils/maths'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { DevTools, Slice, createActionName } from './storeTypes'

// State

interface BuildSave {
	id: number;
	name: string;
	data: string;
}

interface BuildsStateSlice {
	current: number;
	builds: Record<number, BuildSave>;
}

export const defaultBuild = 's=0-90-90-9000&p=0&a=0&t=6&d=0&m=0&k=100&c=0&ap=_&as=_&w=0-0'

const initialState: BuildsStateSlice = {
	current: 0,
	builds: {
		0: {
			id: 0,
			name: '',
			data: defaultBuild
		}
	}
}

const createStateSlice: Slice<BuildsStore, BuildsStateSlice, [DevTools]> = () => initialState

// Action

interface BuildsActionSlice {
	addBuild: (equipBuild: boolean) => void;
	removeBuild: (id: number) => void;
	updateName: (id: number, name: string) => void;
	updateData: (id: number, data: string) => void;
	updateDataPartial: (key: string, value: string) => void;
	changeBuild: (id: number) => void;
}

const actionName = createActionName('builds')

const createActionSlice: Slice<BuildsStore, BuildsActionSlice, [DevTools]> = (set, get) => ({
	addBuild: equipBuild => {
		const nextNum = findNextNum(get().builds)
		const id = equipBuild ? nextNum : get().current
		set(state => ({
			current: id,
			builds: {
				...state.builds,
				[nextNum]: {
					id: nextNum,
					name: '',
					data: defaultBuild
				}
			}
		}), ...actionName('addBuild'))
	},
	removeBuild: id => {
		const { builds } = get()
		delete builds[id]
		set({ builds }, ...actionName('removeBuild'))
	},
	updateName: (id, name) => {
		set(state => ({
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					name
				}
			}
		}), ...actionName('updateName'))
	},
	updateData: (id, data) => {
		set(state => ({
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					data
				}
			}
		}), ...actionName('updateData'))
	},
	updateDataPartial: (key, value) => {
		const { data, id } = get().builds[get().current]
		const parameters = new URLSearchParams(data)
		parameters.set(key, value)
		set(state => ({
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					data: parameters.toString()
				}
			}
		}), ...actionName('updateDataPartial'))
	},
	changeBuild: id => {
		set({ current: id }, ...actionName('changeBuild'))
	}
})

// Store

type BuildsStore = BuildsStateSlice & BuildsActionSlice

export const useBuildsStore = create<BuildsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Builds Store' }))

export const { updateDataPartial } = useBuildsStore.getState()