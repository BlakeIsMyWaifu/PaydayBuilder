import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type BikerCharacterPackList =
	| 'Rust'
	| 'Rust Begins'

const bikerCharacterPack: Record<BikerCharacterPackList, MaskData<BikerCharacterPackList, DlcCollectionList>> = {
	'Rust': {
		name: 'Rust',
		image: 'rust',
		description: [
			'The Devil is the moniker that has followed Rust for most of his life. Therefore, Rust\'s mask is a combination of a smiling clown with ominous horns protruding from his forehead, letting everyone know that the Devil is here.'
		],
		collection: 'Biker Character Pack',
		source: content['Biker Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Rust Begins': {
		name: 'Rust Begins',
		image: 'rust_begins',
		description: [
			'This is a clean version of Rust\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Biker Character Pack',
		source: content['Biker Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default bikerCharacterPack