import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type ScarfaceCharacterPackList =
	| 'Scarface'
	| 'Scarface Begins'

const scarfaceCharacterPack: Record<ScarfaceCharacterPackList, MaskData<ScarfaceCharacterPackList, DlcCollectionList>> = {
	'Scarface': {
		name: 'Scarface',
		image: 'chc_terry',
		description: [
			'Scarface came to the US with nothing more than two empty hands and a bad attitude, the darkness in his heart matched only by the brilliance of his criminal mind. His mask tells the story, complete with the trail of blood he left in his wake as he began to make his mark.'
		],
		collection: 'Scarface Character Pack',
		source: content['Scarface Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Scarface Begins': {
		name: 'Scarface Begins',
		image: 'chc_terry_begins',
		description: [
			'This is a clean version of the iconic Scarface mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Scarface Character Pack',
		source: content['Scarface Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default scarfaceCharacterPack