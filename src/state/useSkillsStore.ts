import skillsMinimised, { type SkillTreeName, skillTreeNames } from 'data/abilities/skillsMinimised'
import { decodeValues, decompressData } from 'utils/decodeEncodeUtils'
import SkillTreePoints from 'utils/skillTreePoints'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createActionName, type Slice } from './storeTypes'
import { useAbilityStore } from './useAbilitiesStore'

// State

type SkillUpgradeTypes = 'locked' | 'available' | 'basic' | 'aced'

export interface Subtrees {
	[key: string]: {
		tier: number;
		points: number;
		upgrades: Record<string, SkillUpgradeTypes>;
	};
}

const getTrees = () => Object.fromEntries(skillTreeNames.map(treeName => [treeName, getSubtrees(treeName)]))

const getSubtrees = (tree: SkillTreeName) => Object.fromEntries(Object.entries(skillsMinimised[tree]).map(([treeName, subtreeSkillNames]) => [treeName, {
	tier: 1,
	points: 0,
	upgrades: getUpgrades(subtreeSkillNames)
}]))

const getUpgrades = (subtree: string[]) => Object.fromEntries(subtree.map<[string, SkillUpgradeTypes]>((skillName, i) => [skillName, i ? 'locked' : 'available']))

export interface SkillsStateSlice {
	points: number;
	trees: Record<string, Subtrees>;
}

const initialState: SkillsStateSlice = {
	points: 120,
	trees: getTrees()
}

export const createStateSlice: Slice<SkillsStore, SkillsStateSlice> = () => initialState

// Action

interface ChangeSkillState {
	tree: SkillTreeName;
	subtree: string;
	skillName: string;
	skillTier: 1 | 2 | 3 | 4;
	oldLevel: SkillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

interface SkillsActionSlice {
	changeSkillState: (newSkillState: ChangeSkillState) => void;
	resetTree: (treeName: SkillTreeName) => void;
	resetSkills: () => void;
	importSkillsData: (skillsDataCompressed: string) => void;
}

const actionName = createActionName<keyof SkillsActionSlice>('skills')

export const createActionSlice: Slice<SkillsStore, SkillsActionSlice> = (set, get) => ({
	changeSkillState: ({ tree, subtree, skillName, skillTier, oldLevel, direction }) => {

		const acedCost = {
			1: 3,
			2: 4,
			3: 6,
			4: 8
		}

		const { infamy } = useAbilityStore.getState()

		const tierCost = [0, 1, 3, infamy ? 16 : 18]

		const skillTierIndex = [1, 2, 2, 3, 3, 4]

		let newLevel: 'available' | 'basic' | 'aced'
		let cost: number

		if (direction === 'upgrade') {
			newLevel = oldLevel === 'available' ? 'basic' : 'aced'
			cost = oldLevel === 'available' ? skillTier : acedCost[skillTier]
		} else {
			newLevel = oldLevel === 'basic' ? 'available' : 'basic'
			cost = (oldLevel === 'basic' ? skillTier : acedCost[skillTier]) * -1
		}

		const currentSubtree = get().trees[tree][subtree]
		const points = currentSubtree.points + cost

		let newTier = 0
		for (; newTier < 4; newTier++) {
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
							[skillName]: newLevel
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
		let skillsData = decompressData(skillsDataCompressed.replaceAll('%2C', ',').replaceAll('%40', '@'))

		get().resetSkills()

		skillTreeNames.forEach(treeName => {
			Object.entries(skillsMinimised[treeName]).forEach(([subtreeName, skillNames]) => {

				const subtreeBasicChar = decodeValues(skillsData.substring(0, 1))
				const subtreeAcedChar = decodeValues(skillsData.substring(1, 2))
				let mask = 1;

				[skillNames[1], skillNames[2]] = [skillNames[2], skillNames[1]];
				[skillNames[3], skillNames[4]] = [skillNames[4], skillNames[3]]

				skillNames.forEach((skillName, i) => {

					const skillTierIndex = [1, 2, 2, 3, 3, 4] as const

					const skillBasicBit = subtreeBasicChar & mask
					const skillAcedBit = subtreeAcedChar & mask

					if (skillBasicBit !== 0 || skillAcedBit !== 0) {
						get().changeSkillState({
							tree: treeName,
							subtree: subtreeName,
							skillTier: skillTierIndex[i],
							skillName,
							oldLevel: 'available',
							direction: 'upgrade'
						})

						if (skillAcedBit !== 0) {
							get().changeSkillState({
								tree: treeName,
								subtree: subtreeName,
								skillTier: skillTierIndex[i],
								skillName,
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

export type SkillsStore = SkillsStateSlice & SkillsActionSlice

export const useSkillsStore = create<SkillsStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Skills Store' }))