import { combineReducers } from 'redux';

import abilities from './abilitiesReducer'
import character from './characterReducer'
import skills from './skillsReducer'

const allReducers = combineReducers({
	skills,
	character,
	abilities
})

export default allReducers