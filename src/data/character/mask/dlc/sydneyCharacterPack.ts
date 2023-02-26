import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type SydneyCharacterPackList =
	| 'Sydney'
	| 'Sydney Begins'

const sydneyCharacterPack: Record<SydneyCharacterPackList, MaskData<SydneyCharacterPackList, DlcCollectionList>> = {
	'Sydney': {
		name: 'Sydney',
		image: 'sydney',
		description: [
			'Smirk, Grin, Sneer - call it what you want. As you see this smiling punker mask approaching it\'s not synonyms that\'ll run through your head - it\'s bullets. Sydney will make sure of it.'
		],
		collection: 'Sydney Character Pack',
		source: content['Sydney Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Sydney Begins': {
		name: 'Sydney Begins',
		image: 'sydney_begins',
		description: [
			'This is a clean version of Sydney\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Sydney Character Pack',
		source: content['Sydney Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default sydneyCharacterPack