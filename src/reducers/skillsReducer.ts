import actions, { skillChangeAction } from 'actions/skillsAction'
import defaultstate from 'states/skillsDefaultState'
import { getType } from 'typesafe-actions'

const acedCost = {
	1: 3,
	2: 4,
	3: 6,
	4: 8
}

const tierCost = {
	0: 1,
	1: 2,
	3: 3,
	16: 4
}

const skills = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.downgradeSkill):
			const { tree, subtree, skill, oldLevel }: skillChangeAction = action.payload
			const newLevel: 'available' | 'basic' = oldLevel === 'basic' ? 'available' : 'basic'
			const cost = oldLevel === 'basic' ? skill.tier : acedCost[skill.tier]
			return {
				points: state.points + cost,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							...state.trees[tree][subtree],
							points: state.trees[tree][subtree].points - cost,
							upgrades: {
								...state.trees[tree][subtree].upgrades,
								[skill.name]: newLevel
							}
						}
					}
				}
			}
		case getType(actions.resetAll):
			return defaultstate
		case getType(actions.resetTree): {
			const tree: string = action.payload
			let treePoints = 0
			for (let subtree in state.trees[tree]) {
				treePoints += state.trees[tree][subtree].points
			}
			return {
				points: state.points + treePoints,
				trees: {
					...state.trees,
					[tree]: {
						...defaultstate.trees[tree]
					}
				}
			}
		}
		case getType(actions.upgradeSkill): {
			const { tree, subtree, skill, oldLevel }: skillChangeAction = action.payload
			const newLevel: 'basic' | 'aced' = oldLevel === 'available' ? 'basic' : 'aced'
			const cost = oldLevel === 'available' ? skill.tier : acedCost[skill.tier]
			return {
				points: state.points - cost,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							...state.trees[tree][subtree],
							points: state.trees[tree][subtree].points + cost,
							upgrades: {
								...state.trees[tree][subtree].upgrades,
								[skill.name]: newLevel
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