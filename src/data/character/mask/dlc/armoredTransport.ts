import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type ArmoredTransportList =
	| 'The 37th'
	| 'The 42nd'
	| 'The 43rd'
	| 'The 44th'

const armoredTransport: Record<ArmoredTransportList, MaskData<ArmoredTransportList, DlcCollectionList>> = {
	'The 37th': {
		name: 'The 37th',
		image: 'nixon',
		description: [
			'Politician, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. He wasn\'t a crook, for sure.',
			'The 37th was the only president who resigned from office. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport',
		source: content['Armored Transport'],
		rarity: 'Paid',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	'The 42nd': {
		name: 'The 42nd',
		image: 'clinton',
		description: [
			'Politician, Commander-In-Chief, father. Served this great nation for 8 years. A ladies man, no doubt.',
			'The 42nd was one of the most peaceful presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport',
		source: content['Armored Transport'],
		rarity: 'Paid',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	'The 43rd': {
		name: 'The 43rd',
		image: 'bush',
		description: [
			'Politician, Commander-In-Chief, father. Served this great nation for 8 years. A wordsmith, no doubt.',
			'The 43rd was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport',
		source: content['Armored Transport'],
		rarity: 'Paid',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	'The 44th': {
		name: 'The 44th',
		image: 'obama',
		description: [
			'Politician, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. A hopeful man, and an award winner at that.',
			'The 44th is one of the most ambitious presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport',
		source: content['Armored Transport'],
		rarity: 'Paid',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	}
}

export default armoredTransport