import { createStore } from "redux";

import allReducers from "./reducers";

const global: any = window
const store = createStore(
	allReducers,
	global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store