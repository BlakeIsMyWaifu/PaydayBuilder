import * as actions from 'actions/skillsAction'
import defaultstate from 'states/skillsDefaultState'
import { ActionType, getType } from 'typesafe-actions'

type skillsAction = ActionType<typeof actions>

const skills = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.downgradeSkill):
			const {tree, subtree, skill, oldLevel}: actions.skillChangeAction = action.payload
			const newLevel: 'available' | 'basic' = oldLevel === 'basic' ? 'available' : 'basic'
			return {
				...state,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							...state.trees[tree][subtree],
							upgrades: {
								...state.trees[tree][subtree].upgrades,
								[skill]: newLevel
							}
						}
					}
				}
			}
		case getType(actions.resetAll):
			return defaultstate
		case getType(actions.resetTree): {
			const tree: string = action.payload
			return {
				...state,
				trees: {
					...state.trees,
					[tree]: {
						...defaultstate.trees[tree]
					}
				}
			}
		}
		case getType(actions.upgradeSkill): {
			const {tree, subtree, skill, oldLevel}: actions.skillChangeAction = action.payload
			const newLevel: 'basic' | 'aced' = oldLevel === 'available' ? 'basic' : 'aced'
			return {
				...state,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							...state.trees[tree][subtree],
							upgrades: {
								...state.trees[tree][subtree].upgrades,
								[skill]: newLevel
							}
						}
					}
				}
			}
		}
		default:
			return state
	}
}

export default skills