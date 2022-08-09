import { combineReducers, configureStore } from '@reduxjs/toolkit'
import abilitiesReducer from 'slices/abilitiesSlice'
import armouryReducer from 'slices/armourySlice'
import buildsReducer, { buildsDefaultState } from 'slices/buildsSlice'
import characterReducer from 'slices/characterSlice'
import settingsReducer from 'slices/settingsSlice'
import skillsReducer from 'slices/skillsSlice'
import weaponsReducer from 'slices/weaponsSlice'

const saveToLocalStorage = (state: RootState): void => {
	const serializedState = JSON.stringify(state.builds)
	// localStorage.setItem('builds', serializedState)
}

const loadFromLocalStorage = (): Partial<RootState> => {
	// const serializedState = localStorage.getItem('builds')
	const serializedState = null
	const partial: Partial<RootState> = {
		builds: serializedState ? JSON.parse(serializedState) : buildsDefaultState
	}
	return partial
}

const rootReducer = combineReducers({
	abilities: abilitiesReducer,
	armoury: armouryReducer,
	builds: buildsReducer,
	character: characterReducer,
	settings: settingsReducer,
	skills: skillsReducer,
	weapons: weaponsReducer
})

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store