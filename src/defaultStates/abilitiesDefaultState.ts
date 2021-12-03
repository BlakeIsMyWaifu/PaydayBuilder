import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import perkDecks, { PerkDeckList } from 'data/abilities/perks'
import characters from 'data/character/characters'
import masks from 'data/character/masks'
import { CrewData } from 'pages/CrewManagement'

export interface AbilitiesState {
	perkdeck: PerkDeckList;
	crewmanagement: [CrewData, CrewData, CrewData];
	infamy: null;
}

const defaultCrew = (i: number): CrewData => ({
	mask: Object.keys(masks)[i],
	character: Object.keys(characters)[i],
	outfit: null,
	weapon: 0,
	ability: Object.values(abilities)[i].name,
	boost: Object.values(boosts)[i].name
})

const abilitiesDefaultState: AbilitiesState = {
	perkdeck: Object.values(perkDecks)[0].name,
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

export default abilitiesDefaultState