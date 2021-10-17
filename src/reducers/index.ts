import { combineReducers } from 'redux';

import abilities from './abilitiesReducer'
import armoury from './armouryReducer'
import character from './characterReducer'
import settings from './settingsReducer'
import skills from './skillsReducer'
import weapons from './weaponsReducer'

const allReducers = combineReducers({
	abilities,
	armoury,
	character,
	settings,
	skills,
	weapons
})

const resetAll = (state: any, action: any) => allReducers(action.type === 'RESET' ? undefined : state, action)

export default resetAll