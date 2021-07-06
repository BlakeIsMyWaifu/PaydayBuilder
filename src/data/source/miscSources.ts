import { contentRarity, contentType } from "./downloadableContent"

export interface sourceData {
	name: string;
	rarity: contentRarity;
	type: contentType;
}

interface source {
	'Base Game': sourceData;
	'Infamous': sourceData;
	'Community': sourceData;
	'Reservoir Dogs': sourceData;
	'Spring Break 2018': sourceData;
	'Meles Weapon Pack': sourceData;
	'The Search For Kento': sourceData;
	'RAID: World War II Community': sourceData;
	'Ownership of Hotline Miami 2 Digital Special': sourceData;
}

const miscSources: source = {
	'Base Game': {
		name: 'Base Game',
		rarity: 'Free',
		type: 'Feature'
	},
	'Infamous': {
		name: 'Infamous',
		rarity: 'Event',
		type: 'Feature'
	},
	'Community': {
		name: 'Community',
		rarity: 'Community',
		type: 'Feature'
	},
	'Reservoir Dogs': {
		name: 'Reservoir Dogs',
		rarity: 'Paid',
		type: 'Heist'
	},
	'Spring Break 2018': {
		name: 'Spring Break 2018',
		rarity: 'Paid',
		type: 'Weapon'
	},
	'Meles Weapon Pack': {
		name: 'Meles Weapon Pack',
		rarity: 'Event',
		type: 'Weapon'
	},
	'The Search For Kento': {
		name: 'The Search For Kento',
		rarity: 'Event',
		type: 'Weapon'
	},
	'RAID: World War II Community': {
		name: 'RAID: World War II Community',
		rarity: 'Community',
		type: 'Weapon'
	},
	'Ownership of Hotline Miami 2 Digital Special': {
		name: 'Ownership of Hotline Miami 2 Digital Special',
		rarity: 'Collaboration',
		type: 'Weapon'
	}
}

export default miscSources