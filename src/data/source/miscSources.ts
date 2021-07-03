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
		rarity: 'Free',
		type: 'Heist'
	}
}

export default miscSources