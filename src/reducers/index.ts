import { combineReducers } from "redux";

import skills from './skillsReducer'

const allReducers = combineReducers({
	skills
})

export default allReducers