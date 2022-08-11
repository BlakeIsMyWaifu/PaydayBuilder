import { findNextNum } from 'utils/maths'
import create from 'zustand'

import { Slice } from './storeTypes'

type BuildsStore = BuildsStateSlice & BuildsActionSlice

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

const createStateSlice: Slice<BuildsStore, BuildsStateSlice> = () => initialState

interface BuildsActionSlice {
	addBuild: (equipBuild: boolean) => void;
	removeBuild: (id: number) => void;
	updateName: (id: number, name: string) => void;
	updateData: (id: number, data: string) => void;
	changeBuild: (id: number) => void;
}

const createActionSlice: Slice<BuildsStore, BuildsActionSlice> = (set, get) => ({
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
		}))
	},
	removeBuild: id => {
		const { builds } = get()
		delete builds[id]
		set({ builds })
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
		}))
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
		}))
	},
	changeBuild: id => {
		set({ current: id })
	}
})

export const useBuildsStore = create<BuildsStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))