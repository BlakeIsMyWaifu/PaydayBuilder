import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

type BodhiCharacterPackList =
	| 'Bodhi'
	| 'Bodhi Begins'

const bodhiCharacterPack: Record<BodhiCharacterPackList, MaskData<BodhiCharacterPackList, InfamousCollectionList>> = {
	'Bodhi': {
		name: 'Bodhi',
		image: 'bodhi',
		description: [
			'Masks have always been used in spiritual traditions that relate to deities, the divine and those chasing the apotheosis of the self. Bodhi\'s mask reflects the man behind it. Strong, cunning, single-minded and centered.'
		],
		collection: 'Bodhi Character Pack',
		source: content['Bodhi Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Bodhi Begins': {
		name: 'Bodhi Begins',
		image: 'bodhi_begins',
		description: [
			'This is a clean version of the iconic Bodhi mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Bodhi Character Pack',
		source: content['Bodhi Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default bodhiCharacterPack