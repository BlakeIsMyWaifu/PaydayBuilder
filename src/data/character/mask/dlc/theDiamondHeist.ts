import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type TheDiamondHeistList =
	| 'Anubis'
	| 'Medusa'
	| 'Pazuzu'
	| 'The Cursed One'

const theDiamondHeist: Record<TheDiamondHeistList, MaskData<TheDiamondHeistList, DlcCollectionList>> = {
	'Anubis': {
		name: 'Anubis',
		image: 'anubis',
		description: [
			'The Egyptian jackal-headed god of the afterlife, Anubis sought to protect graves rather than fill them.'
		],
		collection: 'The Diamond Heist',
		source: content['The Diamond Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Medusa': {
		name: 'Medusa',
		image: 'medusa',
		description: [
			'A hideous visage, snakes for hair, a petrifying gaze and a hate for men. Her gazing eyes still sends chills down spines… But this is just a mask, right?'
		],
		collection: 'The Diamond Heist',
		source: content['The Diamond Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Pazuzu': {
		name: 'Pazuzu',
		image: 'pazuzu',
		description: [
			'Pazuzu was the king of the wind demons according to ancient Babylonian mythology. Legends also tell of him as a beastial behemoth fighting groups of adventurers in far away lands, and some even say he walked the earth as an immortal warrior in human form.'
		],
		collection: 'The Diamond Heist',
		source: content['The Diamond Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The Cursed One': {
		name: 'The Cursed One',
		image: 'cursed_crown',
		description: [
			'His name is lost to legend. He might have been a King, or a mighty Sorcerer. But even the great are undone by the Diamond.'
		],
		collection: 'The Diamond Heist',
		source: content['The Diamond Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theDiamondHeist