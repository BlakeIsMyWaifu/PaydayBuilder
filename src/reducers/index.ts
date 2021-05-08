import { combineReducers } from "redux";

import character from './characterReducer'
import skills from './skillsReducer'

const allReducers = combineReducers({
	skills,
	character
})

export default allReducers