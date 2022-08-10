import skills, { SkillData, TreeNames } from 'data/abilities/skills'
import create from 'zustand'

import { Slice } from './storeTypes'

type SkillsStore = SkillsStateSlice & SkillsActionSlice

type SkillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

interface Subtrees {
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

interface SkillsActionSlice {
	changeSkillState: () => void;
	resetTree: () => void;
	resetSkills: () => void;
}

const createActionSlice: Slice<SkillsStore, SkillsActionSlice> = () => ({
	changeSkillState: () => null,
	resetTree: () => null,
	resetSkills: () => null
})

export const useSkillsStore = create<SkillsStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))