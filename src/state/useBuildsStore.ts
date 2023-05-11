import { findNextNum } from 'utils/maths'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type DevTools, type Persist, type Slice, createActionName } from './storeTypes'

// State

export interface BuildSave {
	id: number;
	name: string;
	data: string;
}

interface BuildsStateSlice {
	current: number;
	builds: Record<number, BuildSave>;
}

export const defaultBuild = 's=0-90-90-9000&p=0&c=1-5&a=0&t=5&d=0&m=0&k=100&h=0&ap=_&as=_&w=0-0&n=_'

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

const createStateSlice: Slice<BuildsStore, BuildsStateSlice, Middlewares> = () => initialState

// Action

interface BuildsActionSlice {
	addBuild: (equipBuild: boolean) => void;
	removeBuild: (id: number) => void;
	updateName: (name: string, id?: number) => void;
	updateData: (key: string, value: string) => void;
	changeBuild: (id: number) => void;
}

const actionName = createActionName('builds')

const createActionSlice: Slice<BuildsStore, BuildsActionSlice, Middlewares> = (set, get) => ({
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
	updateName: (name, id) => {
		const buildId = id ?? get().current

		const buildData = new URLSearchParams(get().builds[buildId].data)
		buildData.set('n', name || '_')

		set(state => ({
			builds: {
				...state.builds,
				[buildId]: {
					...state.builds[buildId],
					name,
					data: buildData.toString()
				}
			}
		}), ...actionName('updateName'))
	},
	updateData: (key, value) => {
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
		}), ...actionName(`updateData/${key}`))
	},
	changeBuild: id => {
		set({ current: id }, ...actionName('changeBuild'))
	}
})

// Store

type BuildsStore = BuildsStateSlice & BuildsActionSlice

type Middlewares = [DevTools, Persist]

export const useBuildsStore = create<BuildsStore>()(devtools(persist((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Builds' }), { name: 'Builds Store' }))

export const { updateData } = useBuildsStore.getState()