import { combineReducers, configureStore } from '@reduxjs/toolkit'
import buildsReducer from 'slices/buildsSlice'

const rootReducer = combineReducers({
	builds: buildsReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store