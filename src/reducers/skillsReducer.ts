import actions, { skillChangeAction } from 'actions/skillsAction'
import defaultstate, { skillUpgradeTypes } from 'defualtStates/skillsDefaultState'
import { getType } from 'typesafe-actions'
import skillTreePoints from 'utils/skillTreePoints'

const acedCost = {
	1: 3,
	2: 4,
	3: 6,
	4: 8
}

const tierCost = [0, 1, 3, 16]

const skillTierIndex = [1, 2, 2, 3, 3, 4]

const skills = (state = defaultstate, action: Record<'type' | 'payload', any>) => {
	switch (action.type) {
		case getType(actions.changeSkillState):
			const { tree, subtree, skill, oldLevel, direction }: skillChangeAction = action.payload

			let newLevel: 'available' | 'basic' | 'aced', cost: number
			if (direction === 'upgrade') {
				newLevel = oldLevel === 'available' ? 'basic' : 'aced'
				cost = oldLevel === 'available' ? skill.tier : acedCost[skill.tier]
			} else {
				newLevel = oldLevel === 'basic' ? 'available' : 'basic'
				cost = (oldLevel === 'basic' ? skill.tier : acedCost[skill.tier]) * -1
			}

			const currentSubtree = state.trees[tree][subtree]
			const points = currentSubtree.points + cost

			for (var newTier = 0; newTier < 4; newTier++) {
				if (points < tierCost[newTier]) break
			}

			let unlocked: Record<string, skillUpgradeTypes> = {}
			if (newTier !== currentSubtree.tier) {
				const skills = Object.keys(currentSubtree.upgrades)
				for (let i = 0; i < 6; i++) {
					if (newTier === skillTierIndex[i] && direction === 'upgrade') {
						unlocked[skills[i]] = 'available'
					}
					if (newTier < skillTierIndex[i] && direction === 'downgrade') {
						unlocked[skills[i]] = 'locked'
					}
				}
			}

			return {
				points: state.points - cost,
				trees: {
					...state.trees,
					[tree]: {
						...state.trees[tree],
						[subtree]: {
							points: points,
							tier: newTier,
							upgrades: {
								...state.trees[tree][subtree].upgrades,
								...unlocked,
								[skill.name]: newLevel
							}
						}
					}
				}
			}
		case getType(actions.resetSkills):
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