export interface sourceData {
	name: string;
	rarity: sourceRarity;
}

type sourceRarity = 'normal' | 'dlc' | 'community' | 'event' | 'infamous' | 'collaboration';

interface source {
	'Base Game': sourceData;
	'Infamous': sourceData;
	'Community': sourceData;
	'Reservoir Dogs': sourceData;
}

const miscSources: source = {
	'Base Game': {
		name: 'Base Game',
		rarity: 'normal'
	},
	'Infamous': {
		name: 'Infamous',
		rarity: 'infamous'
	},
	'Community': {
		name: 'Community',
		rarity: 'community'
	},
	'Reservoir Dogs': {
		name: 'Reservoir Dogs',
		rarity: 'dlc'
	}
}

export default miscSources