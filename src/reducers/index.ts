import { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { ArmouryState } from 'defaultStates/armouryDefaultState'
import { BuildsState } from 'defaultStates/buildsDefaultState'
import { CharacterState } from 'defaultStates/characterDefaultState'
import { SettingsState } from 'defaultStates/settingsDefaultState'
import { SkillsState } from 'defaultStates/skillsDefaultState'
import { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { CombinedState, combineReducers } from 'redux'

import abilities from './abilitiesReducer'
import armoury from './armouryReducer'
import builds from './buildsReducer'
import character from './characterReducer'
import settings from './settingsReducer'
import skills from './skillsReducer'
import weapons from './weaponsReducer'

const allReducers = combineReducers({
	abilities,
	armoury,
	builds,
	character,
	settings,
	skills,
	weapons
})

type ResetAll = CombinedState<{
	abilities: AbilitiesState;
	armoury: ArmouryState;
	builds: BuildsState;
	character: CharacterState;
	settings: SettingsState;
	skills: SkillsState;
	weapons: WeaponsState;
}>

const resetAll = (state: any, action: any): ResetAll => allReducers(action.type === 'RESET' ? undefined : state, action)

export default resetAll