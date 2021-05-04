import skillsData, { skillData } from 'data/abilities/skills'

export interface skillsDefaultState {
	points: number,
	trees: trees
}

export interface trees {
	[key: string]: subtrees;
}

interface subtrees {
	[key: string]: subtreeState;
}

interface subtreeState {
	tier: number;
	points: number;
	upgrades: {
		[key: string]: skillUpgradeTypes;
	}
}

export type skillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

const getTrees = (): trees => {
	let out: trees = {}
	for (let tree in skillsData) {
		out[tree] = getSubtrees(tree)
	}
	return out
}

const getSubtrees = (tree: string): subtrees => {
	let out: subtrees = {}
	for (let subtree in skillsData[tree]) {
		out[subtree] = {
			tier: 0,
			points: 0,
			upgrades: getUpgrades(tree, subtree)
		}
	}
	return out
}

const getUpgrades = (tree: string, subtree: string) => Object.assign({}, ...skillsData[tree][subtree].map(skill => ({[skill.name]: skill.tier === 1 ? 'available' : 'locked'})))

const skillsState: skillsDefaultState = {
	points: 120,
	trees: getTrees()
}

export default skillsState