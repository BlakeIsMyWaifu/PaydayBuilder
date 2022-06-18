import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

export type BonnieCharacterPackList =
	| 'Bonnie'
	| 'Bonnie Begins'

const bonnieCharacterPack: Record<BonnieCharacterPackList, MaskData<BonnieCharacterPackList, InfamousCollectionList>> = {
	'Bonnie': {
		name: 'Bonnie',
		image: 'bonnie',
		description: [
			'Few nations have contributed to humanity as Scotland has. In every field of endeavor - science, arts, cuisine - it is the people of this blessed land that give freely and generously. With this mask, Bonnie is determined to reverse this trend.'
		],
		collection: 'Bonnie Character Pack',
		source: content['Bonnie Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Bonnie Begins': {
		name: 'Bonnie Begins',
		image: 'bonnie_begins',
		description: [
			'This is a clean version of the iconic Bonnie mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Bonnie Character Pack',
		source: content['Bonnie Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default bonnieCharacterPack