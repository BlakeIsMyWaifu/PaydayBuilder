import * as actions from 'actions/skillsAction'
import defaultstate from 'states/skillsDefaultState'
import { ActionType, getType } from 'typesafe-actions'

type skillsAction = ActionType<typeof actions>

const skills = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.downgradeSkill):
			let {tree, subtree, skill, oldLevel} = action.payload
			let newLevel: 'available' | 'basic' = oldLevel === 'basic' ? 'available' : 'basic'
			state.trees[tree][subtree].upgrades[skill] = newLevel
			return state
		case getType(actions.resetAll):
			return defaultstate
		case getType(actions.resetTree):
			return state
		case getType(actions.upgradeSkill): {
			let {tree, subtree, skill, oldLevel} = action.payload
			let newLevel: 'basic' | 'aced' = oldLevel === 'available' ? 'basic' : 'aced'
			state.trees[tree][subtree].upgrades[skill] = newLevel
			return state
		}
		default:
			return state
	}
}

export default skills