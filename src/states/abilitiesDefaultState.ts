import data, { perk } from 'data/abilities/perks'

export interface abilitiesState {
	perkdeck: perk;
	crewmangement: null;
	infamy: null;
}

const abilitiesDefaultState: abilitiesState = {
	perkdeck: data[0],
	crewmangement: null,
	infamy: null
}

export default abilitiesDefaultState