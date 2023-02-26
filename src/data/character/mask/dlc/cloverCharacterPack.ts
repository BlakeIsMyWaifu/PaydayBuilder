import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type CloverCharacterPackList =
	| 'Clover'
	| 'Clover Begins'

const cloverCharacterPack: Record<CloverCharacterPackList, MaskData<CloverCharacterPackList, DlcCollectionList>> = {
	'Clover': {
		name: 'Clover',
		image: 'msk_grizel',
		description: [
			'Clover\'s mask represents what Clover both fears and hates most of all - wearing a mask as your normal face. The surgically-shrunken nose, the botox\'d lips and the expression of all-consuming vanity and self-obsession - all are symbols of fear and weakness, twisted into a horrifying parody.'
		],
		collection: 'Clover Character Pack',
		source: content['Clover Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Clover Begins': {
		name: 'Clover Begins',
		image: 'grizel_clean',
		description: [
			'This is a clean version of Clover\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Clover Character Pack',
		source: content['Clover Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default cloverCharacterPack