import { combineReducers, configureStore } from '@reduxjs/toolkit'
import buildsReducer from 'slices/buildsSlice'
import skillsReducer from 'slices/skillsSlice'
import weaponsReducer from 'slices/weaponsSlice'

const rootReducer = combineReducers({
	builds: buildsReducer,
	skills: skillsReducer,
	weapons: weaponsReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store