import { combineReducers } from 'redux';

import abilities from './abilitiesReducer'
import character from './characterReducer'
import skills from './skillsReducer'
import weapons from './weaponsReducer'

const allReducers = combineReducers({
	abilities,
	character,
	skills,
	weapons
})

export default (state: any, action: any) => allReducers(action.type === 'RESET' ? undefined : state, action)