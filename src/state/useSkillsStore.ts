import skills, { SkillData, TreeNames } from 'data/abilities/skills'
import SkillTreePoints from 'utils/skillTreePoints'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'

type SkillsStore = SkillsStateSlice & SkillsActionSlice

type SkillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

export interface Subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: Record<string, SkillUpgradeTypes>;
	};
}

interface SkillsStateSlice {
	points: number;
	trees: Record<string, Subtrees>;
}

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

const initialState: SkillsStateSlice = {
	points: 120,
	trees: getTrees()
}

const createStateSlice: Slice<SkillsStore, SkillsStateSlice> = () => initialState

interface ChangeSkillState {
	tree: TreeNames;
	subtree: string;
	skill: SkillData;
	oldLevel: SkillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

interface SkillsActionSlice {
	changeSkillState: (newSkillState: ChangeSkillState) => void;
	resetTree: (treeName: TreeNames) => void;
	resetSkills: () => void;
}

const actionName = createActionName('skills')

const createActionSlice: Slice<SkillsStore, SkillsActionSlice> = (set, get) => ({
	changeSkillState: ({ tree, subtree, skill, oldLevel, direction }) => {
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

		const currentSubtree = get().trees[tree][subtree]
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

		set(state => ({
			points: state.points - cost,
			trees: {
				...state.trees,
				[tree]: {
					...state.trees[tree],
					[subtree]: {
						points,
						tier: newTier,
						upgrades: {
							...state.trees[tree][subtree].upgrades,
							...unlocked,
							[skill.name]: newLevel
						}
					}
				}
			}
		}), ...actionName('changeSkillState'))
	},
	resetTree: treeName => {
		set(state => ({
			points: state.points + SkillTreePoints(treeName, state.trees),
			trees: {
				...state.trees,
				[treeName]: initialState.trees[treeName]
			}
		}), ...actionName('resetTree'))
	},
	resetSkills: () => {
		set(initialState, ...actionName('resetSkills'))
	}
})

export const useSkillsStore = create<SkillsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Skills Store' }))