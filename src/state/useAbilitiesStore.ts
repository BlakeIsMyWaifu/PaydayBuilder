import { CrewData } from 'components/CrewManagement/CrewManagement'
import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import characters from 'data/character/characters'
import { MaskList, allMasks } from 'data/character/masks'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { Slice, createActionName } from './storeTypes'

// State

const defaultCrew = (i: number): CrewData => ({
	mask: Object.keys(allMasks.normal.Default.masks)[i] as MaskList,
	character: Object.keys(characters)[i],
	outfit: null,
	weapon: 0,
	ability: Object.values(abilities)[i].name,
	boost: Object.values(boosts)[i].name
})

interface AbilityStateSlice {
	perkdeck: PerkDeckList;
	crewmanagement: [CrewData, CrewData, CrewData];
	infamy: null;
}

const initialState: AbilityStateSlice = {
	perkdeck: 'Crew Chief',
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

const createStateSlice: Slice<AbilityStore, AbilityStateSlice> = () => initialState

// Action

interface AbilityActionSlice {
	changePerkDeck: (perkdeck: PerkDeckList) => void;
}

const actionName = createActionName('abilities')

const createActionSlice: Slice<AbilityStore, AbilityActionSlice> = set => ({
	changePerkDeck: perkdeck => {
		set({ perkdeck }, ...actionName('changePerkDeck'))
	}
})

// Store

type AbilityStore = AbilityStateSlice & AbilityActionSlice

export const useAbilityStore = create<AbilityStore>()(devtools((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Abilities Store' }))