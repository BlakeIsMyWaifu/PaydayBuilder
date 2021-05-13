import actions, { skillChangeAction } from 'actions/skillsAction'
import defaultstate, { skillsState } from 'states/skillsDefaultState'
import { getType } from 'typesafe-actions'
import skillTreePoints from 'utils/skillTreePoints'

const acedCost = {
	1: 3,
	2: 4,
	3: 6,
	4: 8
}

const tierCost = [0, 1, 3, 16]

const skills = (state = defaultstate, action: any) => {
	switch (action.type) {
		case getType(actions.changeSkillState):
			const { tree, subtree, skill, oldLevel, direction }: skillChangeAction = action.payload

			let newLevel: 'available' | 'basic' | 'aced', cost
			if (direction === 'upgrade') {
				newLevel = oldLevel === 'available' ? 'basic' : 'aced'
				cost = oldLevel === 'available' ? skill.tier : acedCost[skill.tier]
			} else {
				newLevel = oldLevel === 'basic' ? 'available' : 'basic'
				cost = (oldLevel === 'basic' ? skill.tier : acedCost[skill.tier]) * -1
			}

			const points = state.trees[tree][subtree].points + cost

			for (var tier = 0; tier < 4; tier++) {
				if (points < tierCost[tier]) break
			}

			return {
				points: state.points - cost,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							points: points,
							tier,
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
			return {
				points: state.points + skillTreePoints(tree, state.trees),
				trees: {
					...state.trees,
					[tree]: {
						...defaultstate.trees[tree]
					}
				}
			}
		}
		default:
			return state
	}
}

export default skills