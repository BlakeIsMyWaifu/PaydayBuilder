import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type CollaborationCollectionList } from '../collaboration'

export type HotlineMiami2DeluxeList =
	| 'Richard Begins'
	| 'Richard Returns'

const hotlineMiami2Deluxe: Record<HotlineMiami2DeluxeList, MaskData<HotlineMiami2DeluxeList, CollaborationCollectionList>> = {
	'Richard Begins': {
		name: 'Richard Begins',
		image: 'richard_begins',
		description: [
			'This is a clean version of the iconic Richard Returns mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Hotline Miami 2 Deluxe',
		source: content['Jacket Character Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	},
	'Richard Returns': {
		name: 'Richard Returns',
		image: 'richard_returns',
		description: [
			'Is this mask a reflection of a deep-seated psychological problem? Possibly a dissociative identity disorder? Schizophrenia? Trauma of a disturbed psyche? Or is it not a reflection at all, but instead something to cause them?'
		],
		collection: 'Hotline Miami 2 Deluxe',
		source: content['Jacket Character Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	}
}

export default hotlineMiami2Deluxe