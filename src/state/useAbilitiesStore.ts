import { type PerkDeckList } from 'data/abilities/perks'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createActionName, type Slice } from './storeTypes'

// State

export type CopycatValues = [number, number, number, number, number];

export interface AbilityStateSlice {
	perkDeck: PerkDeckList;
	copycat: CopycatValues;
	crewmanagement: null;
	infamy: null;
}

const initialState: AbilityStateSlice = {
	perkDeck: 'Crew Chief',
	copycat: [0, 0, 0, 0, 0],
	crewmanagement: null,
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

export const useAbilityStore = create<AbilityStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Abilities Store' }))