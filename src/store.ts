import { createStore } from "redux";

import allReducers from "./reducers";

const saveToLocalStorage = (state: any) => {
	const serializedState = JSON.stringify(state)
	localStorage.setItem('persistantState', serializedState)
}

const loadFromLocalStorage = () => {
	const serializedState = localStorage.getItem('persistantState')
	return serializedState ? JSON.parse(serializedState) : undefined
}

const global: any = window
const store = createStore(
	allReducers,
	loadFromLocalStorage(),
	global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store