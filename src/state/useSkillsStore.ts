import skills, { SkillData, TreeNames } from 'data/abilities/skills'
import { decodeValues, decompressData } from 'utils/decodeBuild'
import { encodeSkills } from 'utils/encodeBuild'
import SkillTreePoints from 'utils/skillTreePoints'
import create from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'
import { updateDataPartial } from './useBuildsStore'

// State

type SkillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

export interface Subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: Record<string, SkillUpgradeTypes>;
	};
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

export interface SkillsStateSlice {
	points: number;
	trees: Record<string, Subtrees>;
}

const initialState: SkillsStateSlice = {
	points: 120,
	trees: getTrees()
}

const createStateSlice: Slice<SkillsStore, SkillsStateSlice> = () => initialState

// Action

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
	importSkillsData: (skillsDataCompressed: string) => void;
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
	},
	importSkillsData: skillsDataCompressed => {
		let skillsData = decompressData(skillsDataCompressed)

		get().resetSkills()

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeName => {
			Object.values(skills[treeName].subtrees).forEach(subtree => {

				const subtreeBasicChar = decodeValues(skillsData.substring(0, 1))
				const subtreeAcedChar = decodeValues(skillsData.substring(1, 2))
				let mask = 1

				// semicolons needed
				const upgrades = [...Object.values(subtree.upgrades)];
				[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]];
				[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

				upgrades.forEach(skill => {

					const skillBasicBit = subtreeBasicChar & mask
					const skillAcedBit = subtreeAcedChar & mask

					if (skillBasicBit !== 0 || skillAcedBit !== 0) {
						get().changeSkillState({
							tree: treeName,
							subtree: subtree.name,
							skill,
							oldLevel: 'available',
							direction: 'upgrade'
						})

						if (skillAcedBit !== 0) {
							get().changeSkillState({
								tree: treeName,
								subtree: subtree.name,
								skill,
								oldLevel: 'basic',
								direction: 'upgrade'
							})
						}
					}
					mask <<= 1
				})

				skillsData = skillsData.slice(2)
			})
		})
	}
})

// Store

type SkillsStore = SkillsStateSlice & SkillsActionSlice

export const useSkillsStore = create<SkillsStore>()(devtools(subscribeWithSelector((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
})), { name: 'Skills Store' }))

// Subscriptions

useSkillsStore.subscribe(state => state.trees, state => {
	updateDataPartial('s', encodeSkills(state))
})