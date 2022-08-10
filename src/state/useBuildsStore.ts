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
	addBuild: () => void;
	removeBuild: () => void;
	updateName: () => void;
	updateData: () => void;
	changeBuild: () => void;
}

const createActionSlice: Slice<BuildsStore, BuildsActionSlice> = () => ({
	addBuild: () => null,
	removeBuild: () => null,
	updateName: () => null,
	updateData: () => null,
	changeBuild: () => null
})

export const useBuildStore = create<BuildsStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))