import data, { skillData, treeNames } from 'data/abilities/skills'

export interface skillsState {
	points: number;
	trees: Record<string, subtrees>;
}

export interface subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: Record<string, skillUpgradeTypes>;
	};
}

export type skillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced';

const getTrees = (): Record<string, subtrees> => {
	let out: Record<string, subtrees> = {}
	Object.keys(data).forEach((tree: any) => {
		let t: treeNames = tree
		out[tree] = getSubtrees(t)
	})
	return out
}

const getSubtrees = (tree: treeNames): subtrees => {
	let out: subtrees = {}
	data[tree].subtrees.forEach(subtree => {
		out[subtree.name] = {
			tier: 1,
			points: 0,
			upgrades: getUpgrades(subtree.upgrades)
		}
	})
	return out
}

const getUpgrades = (subtree: skillData[]): Record<string, skillUpgradeTypes> => Object.assign({}, ...subtree.map(skill => ({[skill.name]: skill.tier === 1 ? 'available' : 'locked'})))

const skillsDefaultState: skillsState = {
	points: 120,
	trees: getTrees()
}

export default skillsDefaultState