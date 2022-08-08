import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CrewData } from 'components/CrewManagement'
import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import characters from 'data/character/characters'
import { MaskList, allMasks } from 'data/character/masks'

export interface AbilitiesState {
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

export const abilitiesDefaultState: AbilitiesState = {
	perkdeck: 'Crew Chief',
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

export const abilitiesSlice = createSlice({
	name: 'abilities',
	initialState: abilitiesDefaultState,
	reducers: {
		changePerkDeck: (state, action: PayloadAction<PerkDeckList>) => {
			state.perkdeck = action.payload
		}
	}
})

export const {
	changePerkDeck
} = abilitiesSlice.actions

// export const selectAbilities = (state: RootState) => state.abilities
// export const selectPerkDeck = createSelector(selectAbilities, (a) => a.perkdeck)

export default abilitiesSlice.reducer