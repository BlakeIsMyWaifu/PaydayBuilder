import skills, { SkillData, TreeNames } from 'data/abilities/skills'

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

const skillsDefaultState: SkillsState = {
	points: 120,
	trees: getTrees()
}

export default skillsDefaultState