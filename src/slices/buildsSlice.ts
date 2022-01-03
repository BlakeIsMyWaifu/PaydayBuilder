import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { findNextNum } from 'utils/maths'

interface BuildSave {
	id: number;
	name: string;
	data: string;
}

export interface BuildsState {
	current: number;
	builds: Record<number, BuildSave>;
}

export const defaultBuild = 's=0-90-90-9000&p=0&a=0&t=5&d=0&m=0&k=000&c=0&ap=_&as=_&w=0-0'

export const buildsDefaultState: BuildsState = {
	current: 0,
	builds: {
		0: {
			id: 0,
			name: '',
			data: defaultBuild
		}
	}
}

interface AddBuild {
	changeToNewBuild: boolean;
}

interface SelectBuild {
	id: number;
}

interface UpdateName extends SelectBuild {
	name: string;
}

interface UpdateData extends SelectBuild {
	data: string;
}

export const buildsSlice = createSlice({
	name: 'builds',
	initialState: buildsDefaultState,
	reducers: {
		addBuild: (state, action: PayloadAction<AddBuild>) => {
			const { changeToNewBuild } = action.payload
			const nextNum = findNextNum(state.builds)
			const id = changeToNewBuild ? nextNum : state.current
			state.current = id
			state.builds[nextNum] = {
				id: nextNum,
				name: '',
				data: defaultBuild
			}
		},
		removeBuild: (state, action: PayloadAction<number>) => {
			const id = action.payload
			delete state.builds[id]
		},
		updateName: (state, action: PayloadAction<UpdateName>) => {
			const { id, name } = action.payload
			state.builds[id].name = name
		},
		updateData: (state, action: PayloadAction<UpdateData>) => {
			const { id, data } = action.payload
			state.builds[id].data = data
		},
		changeBuild: (state, action: PayloadAction<SelectBuild>) => {
			const { id } = action.payload
			state.current = id
		}
	}
})

export const {
	addBuild,
	removeBuild,
	updateName,
	updateData,
	changeBuild
} = buildsSlice.actions

export default buildsSlice.reducer