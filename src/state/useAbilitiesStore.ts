import { CrewData } from 'components/CrewManagement/CrewManagement'
import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import characters from 'data/character/characters'
import { MaskList, allMasks } from 'data/character/masks'
import { encodeCopycat, encodePerkDeck } from 'utils/encodeBuild'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'
import { updateData } from './useBuildsStore'

// State

const defaultCrew = (i: number): CrewData => ({
	mask: Object.keys(allMasks.normal.Default.masks)[i] as MaskList,
	character: Object.keys(characters)[i],
	outfit: null,
	weapon: 0,
	ability: Object.values(abilities)[i].name,
	boost: Object.values(boosts)[i].name
})

export type CopycatValues = [number, number, number, number, number];

export interface AbilityStateSlice {
	perkDeck: PerkDeckList;
	copycat: CopycatValues;
	crewmanagement: [CrewData, CrewData, CrewData];
	infamy: null;
}

const initialState: AbilityStateSlice = {
	perkDeck: 'Crew Chief',
	copycat: [0, 0, 0, 0, 0],
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

const createStateSlice: Slice<AbilityStore, AbilityStateSlice> = () => initialState

// Action

interface AbilityActionSlice {
	changePerkDeck: (perkdeck: PerkDeckList) => void;
	changeCopycatValues: (index: number, direction: 'increment' | 'decrement') => void;
	setCopycatValues: (values: CopycatValues) => void;
}

const actionName = createActionName('abilities')

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
		set({ copycat }, ...actionName('changeCopycatCard'))
	},
	setCopycatValues: values => {
		set({ copycat: values }, ...actionName('setCopycatValues'))
	}
})

// Store

type AbilityStore = AbilityStateSlice & AbilityActionSlice

export const useAbilityStore = create<AbilityStore>()(devtools(subscribeWithSelector((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
})), { name: 'Abilities Store' }))

// Subscriptions

useAbilityStore.subscribe<[PerkDeckList, number[]]>(state => [state.perkDeck, state.copycat], ([state]) => {
	updateData('p', encodePerkDeck(state))
})

useAbilityStore.subscribe(state => [state.copycat], ([state]) => {
	updateData('c', encodeCopycat(state))
})