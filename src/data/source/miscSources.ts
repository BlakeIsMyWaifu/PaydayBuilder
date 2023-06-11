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
	| 'Christmas 2020 Update'
	| 'Winter Wonderland 2021'
	| '8th Anniversary Event'
	| 'Prime Matter'
	| 'Chinese New Year 2022'

const source: Record<SourceList, SourceData> = {
	'Base Game': {
		name: 'Base Game',
		rarity: 'Free',
		type: 'Feature'
	},
	'Infamous': {
		name: 'Infamous',
		rarity: 'Free',
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
		rarity: 'Free',
		type: 'Weapon'
	},
	'The Search For Kento': {
		name: 'The Search For Kento',
		rarity: 'Free',
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
	'Christmas 2020 Update': {
		name: 'Christmas 2020 Update',
		rarity: 'Free',
		type: 'Weapon Mod'
	},
	'Winter Wonderland 2021': {
		name: 'Winter Wonderland 2021',
		rarity: 'Free',
		type: 'Weapon'
	},
	'8th Anniversary Event': {
		name: '8th Anniversary Event',
		rarity: 'Free',
		type: 'Weapon'
	},
	'Prime Matter': {
		name: 'Prime Matter',
		rarity: 'Community',
		type: 'Mask'
	},
	'Chinese New Year 2022': {
		name: 'Chinese New Year 2022',
		rarity: 'Paid',
		type: 'Weapon Mod'
	}
}

export default source