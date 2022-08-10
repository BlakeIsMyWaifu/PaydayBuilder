import { combineReducers, configureStore } from '@reduxjs/toolkit'
import abilitiesReducer from 'slices/abilitiesSlice'
import armouryReducer from 'slices/armourySlice'
import buildsReducer from 'slices/buildsSlice'
import characterReducer from 'slices/characterSlice'
import settingsReducer from 'slices/settingsSlice'
import skillsReducer from 'slices/skillsSlice'
import weaponsReducer from 'slices/weaponsSlice'

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
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store