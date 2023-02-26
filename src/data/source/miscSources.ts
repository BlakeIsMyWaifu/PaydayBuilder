import { type ContentRarity, type ContentType } from './downloadableContent'

export interface SourceData {
	name: SourceList;
	rarity: ContentRarity;
	type: ContentType;
}

type SourceList =
	| 'Base Game'
	| 'Infamous'
	| 'Community'
	| 'Reservoir Dogs'
	| 'Spring Break 2018'
	| 'Meles Weapon Pack'
	| 'The Search For Kento'
	| 'RAID: World War II Community'
	| 'Ownership of Hotline Miami 2 Digital Special'
	| 'Winter Wonderland 2021'
	| '8th Anniversary Event'
	| 'Prime Matter'

const source: Record<SourceList, SourceData> = {
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
	},
	'Winter Wonderland 2021': {
		name: 'Winter Wonderland 2021',
		rarity: 'Event',
		type: 'Weapon'
	},
	'8th Anniversary Event': {
		name: '8th Anniversary Event',
		rarity: 'Event',
		type: 'Weapon'
	},
	'Prime Matter': {
		name: 'Prime Matter',
		rarity: 'Community',
		type: 'Mask'
	}
}

export default source