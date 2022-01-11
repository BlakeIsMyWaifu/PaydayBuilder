import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import skills, { SkillData, TreeNames } from 'data/abilities/skills'
import SkillTreePoints from 'utils/skillTreePoints'

export interface SkillsState {
	points: number;
	trees: Record<string, Subtrees>;
}

export interface Subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: Record<string, SkillUpgradeTypes>;
	};
}

export type SkillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

const getTrees = (): Record<string, Subtrees> => {
	const out: Record<string, Subtrees> = {};
	(Object.keys(skills) as Array<keyof typeof skills>).forEach((tree: TreeNames) => {
		const t: TreeNames = tree
		out[tree] = getSubtrees(t)
	})
	return out
}

const getSubtrees = (tree: TreeNames): Subtrees => {
	const out: Subtrees = {}
	Object.values(skills[tree].subtrees).forEach(subtree => {
		out[subtree.name] = {
			tier: 1,
			points: 0,
			upgrades: getUpgrades(Object.values(subtree.upgrades))
		}
	})
	return out
}

const getUpgrades = (subtree: SkillData[]): Record<string, SkillUpgradeTypes> => Object.assign({}, ...subtree.map(skill => ({ [skill.name]: skill.tier === 1 ? 'available' : 'locked' })))

export const skillsDefaultState: SkillsState = {
	points: 120,
	trees: getTrees()
}

interface ChangeSkillStateAction {
	tree: string;
	subtree: string;
	skill: SkillData;
	oldLevel: SkillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

export const skillsSlice = createSlice({
	name: 'skills',
	initialState: skillsDefaultState,
	reducers: {
		changeSkillState: (state, action: PayloadAction<ChangeSkillStateAction>) => {
			const { tree, subtree, skill, oldLevel, direction } = action.payload

			const acedCost = {
				1: 3,
				2: 4,
				3: 6,
				4: 8
			}

			const tierCost = [0, 1, 3, 16]

			const skillTierIndex = [1, 2, 2, 3, 3, 4]

			let newLevel: 'available' | 'basic' | 'aced'
			let cost: number

			if (direction === 'upgrade') {
				newLevel = oldLevel === 'available' ? 'basic' : 'aced'
				cost = oldLevel === 'available' ? skill.tier : acedCost[skill.tier]
			} else {
				newLevel = oldLevel === 'basic' ? 'available' : 'basic'
				cost = (oldLevel === 'basic' ? skill.tier : acedCost[skill.tier]) * -1
			}

			const currentSubtree = state.trees[tree][subtree]
			const points = currentSubtree.points + cost

			let newTier: number
			for (newTier = 0; newTier < 4; newTier++) {
				if (points < tierCost[newTier]) break
			}

			const unlocked: Record<string, SkillUpgradeTypes> = {}
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

			state.points = state.points - cost
			state.trees[tree][subtree] = {
				points,
				tier: newTier,
				upgrades: {
					...state.trees[tree][subtree].upgrades,
					...unlocked,
					[skill.name]: newLevel
				}
			}
		},
		resetTree: (state, action: PayloadAction<TreeNames>) => {
			const tree = action.payload
			state.points = state.points + SkillTreePoints(tree, state.trees)
			state.trees[tree] = skillsDefaultState.trees[tree]
		},
		resetSkills: () => skillsDefaultState
	}
})

export const {
	changeSkillState,
	resetTree,
	resetSkills
} = skillsSlice.actions

export default skillsSlice.reducer