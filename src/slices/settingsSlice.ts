import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
	leftFacing: boolean;
}

export const settingsDefaultState: SettingsState = {
	leftFacing: false
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: settingsDefaultState,
	reducers: {
		changeLeftFacing: (state, action: PayloadAction<boolean>) => {
			state.leftFacing = action.payload
		}
	}
})

export const {
	changeLeftFacing
} = settingsSlice.actions

export default settingsSlice.reducer