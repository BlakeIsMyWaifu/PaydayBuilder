import { CrewData } from 'components/CrewManagement/CrewManagement'
import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import characters from 'data/character/characters'
import { MaskList, allMasks } from 'data/character/masks'
import create from 'zustand'

import { Slice } from './storeTypes'

type AbilityStore = AbilityStateSlice & AbilityActionSlice

interface AbilityStateSlice {
	perkdeck: PerkDeckList;
	crewmanagement: [CrewData, CrewData, CrewData];
	infamy: null;
}

const defaultCrew = (i: number): CrewData => ({
	mask: Object.keys(allMasks.normal.Default.masks)[i] as MaskList,
	character: Object.keys(characters)[i],
	outfit: null,
	weapon: 0,
	ability: Object.values(abilities)[i].name,
	boost: Object.values(boosts)[i].name
})

const initialState: AbilityStateSlice = {
	perkdeck: 'Crew Chief',
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

const createStateSlice: Slice<AbilityStore, AbilityStateSlice> = () => initialState

interface AbilityActionSlice {
	changePerkDeck: (perkdeck: PerkDeckList) => void;
}

const createActionSlice: Slice<AbilityStore, AbilityActionSlice> = set => ({
	changePerkDeck: perkdeck => {
		set({ perkdeck })
	}
})

export const useAbilityStore = create<AbilityStore>()((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}))