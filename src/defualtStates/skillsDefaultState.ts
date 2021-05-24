import data, { skillData, treeNames } from 'data/abilities/skills'

export interface skillsState {
	points: number;
	trees: trees;
}

export interface trees {
	[key: string]: subtrees;
}

interface subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: upgrades;
	};
}

export interface upgrades {
	[key: string]: skillUpgradeTypes;
}

export type skillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced';

const getTrees = (): trees => {
	let out: trees = {}
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

const getUpgrades = (subtree: skillData[]): upgrades => Object.assign({}, ...subtree.map(skill => ({[skill.name]: skill.tier === 1 ? 'available' : 'locked'})))

const skillsDefaultState: skillsState = {
	points: 120,
	trees: getTrees()
}

export default skillsDefaultState