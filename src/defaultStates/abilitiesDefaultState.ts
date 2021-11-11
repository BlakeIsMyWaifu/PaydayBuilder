import abilities from 'data/abilities/crewAbilities'
import boosts from 'data/abilities/crewBoosts'
import data, { PerkData } from 'data/abilities/perks'
import characters from 'data/character/characters'
import masks from 'data/character/masks'
import assaultRifles from 'data/weapons/guns/primary/assaultRifles'
import { CrewData } from 'pages/CrewManagement/CrewManagement'

export interface AbilitiesState {
	perkdeck: PerkData;
	crewmanagement: [CrewData, CrewData, CrewData];
	infamy: null;
}

const defaultCrew = (i: number): CrewData => ({
	mask: masks[0],
	character: characters[i],
	outfit: null,
	weapon: assaultRifles['AMCAR Rifle'],
	ability: Object.values(abilities)[i],
	boost: Object.values(boosts)[i]
})

const abilitiesDefaultState: AbilitiesState = {
	perkdeck: Object.values(data)[0],
	crewmanagement: [defaultCrew(0), defaultCrew(1), defaultCrew(2)],
	infamy: null
}

export default abilitiesDefaultState