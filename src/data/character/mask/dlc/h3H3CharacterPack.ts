import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type H3H3CharacterPackList =
	| 'Ethan'
	| 'Hila'
	| 'Ethan Begins'
	| 'Hila Begins'

const h3H3CharacterPack: Record<H3H3CharacterPackList, MaskData<H3H3CharacterPackList, DlcCollectionList>> = {
	'Ethan': {
		name: 'Ethan',
		image: 'ecp_male',
		description: [
			'This mask exudes power and brute force, in stark contrast to the man who wears it. Equal parts clown-like sadness and begrudging anger, it perfectly captures the mood of someone who has somewhat reluctantly chosen to be a heister.'
		],
		collection: 'H3H3 Character Pack',
		source: content['h3h3 Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A H3H3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Hila': {
		name: 'Hila',
		image: 'ecp_female',
		description: [
			'Something about this mask radiates a playful malice and most who gaze upon it immediately feel a sense of unease, which is just the kind of thing you need when you\'re robbing a bank.'
		],
		collection: 'H3H3 Character Pack',
		source: content['h3h3 Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A H3H3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Ethan Begins': {
		name: 'Ethan Begins',
		image: 'ecp_male_begins',
		description: [
			'This is a clean version of Ethan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'H3H3 Character Pack',
		source: content['h3h3 Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A H3H3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Hila Begins': {
		name: 'Hila Begins',
		image: 'ecp_female_begins',
		description: [
			'This is a clean version of Hila\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'H3H3 Character Pack',
		source: content['h3h3 Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A H3H3 CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default h3H3CharacterPack