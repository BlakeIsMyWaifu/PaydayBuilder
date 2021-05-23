import { combineReducers } from 'redux';

import abilities from './abilitiesReducer'
import character from './characterReducer'
import skills from './skillsReducer'

const allReducers = combineReducers({
	skills,
	character,
	abilities
})

export default (state: any, action: any) => allReducers(action.type === 'RESET' ? undefined : state, action)