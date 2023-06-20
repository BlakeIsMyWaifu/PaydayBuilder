import { type CrewAbility } from 'data/abilities/crewAbilities'
import { type CrewBoost } from 'data/abilities/crewBoosts'
import { type CrewWeapon } from 'data/abilities/crewWeapons'
import { type PerkDeckList } from 'data/abilities/perks'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createActionName, type Slice } from './storeTypes'

// State

export interface Crew {
	weapon: CrewWeapon;
	ability: CrewAbility;
	boost: CrewBoost;
}

export type CrewIndex = '0' | '1' | '2'

export const isValidCrewIndex = (slot: string): slot is CrewIndex => ['0', '1', '2'].includes(slot)

export type CopycatValues = [number, number, number, number, number];

export interface AbilityStateSlice {
	perkDeck: PerkDeckList;
	copycat: CopycatValues;
	crewManagement: [Crew, Crew, Crew];
	infamy: boolean;
}

const initialState: AbilityStateSlice = {
	perkDeck: 'Crew Chief',
	copycat: [0, 0, 0, 0, 0],
	crewManagement: [
		{
			weapon: 'AMCAR',
			ability: 'Quick',
			boost: 'Accelerator'
		},
		{
			weapon: 'AMCAR',
			ability: 'Piercing',
			boost: 'Invigorator'
		},
		{
			weapon: 'AMCAR',
			ability: 'Sharpeyed',
			boost: 'Stockpiler'
		}
	],
	infamy: true
}

const createStateSlice: Slice<AbilityStore, AbilityStateSlice> = () => initialState

// Action

interface AbilityActionSlice {
	changePerkDeck: (perkdeck: PerkDeckList) => void;
	changeCopycatValues: (index: number, direction: 'increment' | 'decrement') => void;
	setCopycatValues: (values: CopycatValues) => void;
	changeCrewWeapon: (crewIndex: CrewIndex, weapon: CrewWeapon) => void;
	changeCrewAbility: (crewIndex: CrewIndex, ability: CrewAbility) => void;
	changeCrewBoost: (crewIndex: CrewIndex, boost: CrewBoost) => void;
	toggleInfamy: () => void;
	setInfamy: (enabled: boolean) => void;
}

const actionName = createActionName<keyof AbilityActionSlice>('abilities')

const createActionSlice: Slice<AbilityStore, AbilityActionSlice> = (set, get) => ({
	changePerkDeck: perkdeck => {
		if (perkdeck === get().perkDeck) return
		set({ perkDeck: perkdeck }, ...actionName('changePerkDeck'))
	},
	changeCopycatValues: (index, direction) => {
		const maxValue = index === 4 ? 21 : 3
		const currentValue = get().copycat[index]
		let nextValue = currentValue + (direction === 'increment' ? 1 : -1)
		if (nextValue === -1) nextValue = maxValue
		if (nextValue === maxValue + 1) nextValue = 0
		const { copycat } = get()
		copycat[index] = nextValue
		set({ copycat }, ...actionName('changeCopycatValues'))
	},
	setCopycatValues: values => {
		set({ copycat: values }, ...actionName('setCopycatValues'))
	},
	changeCrewWeapon: (crewIndex, weapon) => {
		const { crewManagement } = get()
		crewManagement[+crewIndex].weapon = weapon
		set({ crewManagement }, ...actionName('changeCrewWeapon'))
	},
	changeCrewAbility: (crewIndex, ability) => {
		const { crewManagement } = get()
		crewManagement[+crewIndex].ability = ability
		set({ crewManagement }, ...actionName('changeCrewAbility'))
	},
	changeCrewBoost: (crewIndex, boost) => {
		const { crewManagement } = get()
		crewManagement[+crewIndex].boost = boost
		set({ crewManagement }, ...actionName('changeCrewBoost'))
	},
	toggleInfamy: () => {
		set(state => ({ infamy: !state.infamy }), ...actionName('toggleInfamy'))
	},
	setInfamy: enabled => {
		set({ infamy: enabled }, ...actionName('setInfamy'))
	}
})

// Store

type AbilityStore = AbilityStateSlice & AbilityActionSlice

export const useAbilityStore = create<AbilityStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Abilities Store' }))