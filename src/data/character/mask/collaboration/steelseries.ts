import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { CollaborationCollectionList } from '../collaboration'

type SteelseriesList =
	| 'Lars the Troll'

const steelseries: Record<SteelseriesList, MaskData<SteelseriesList, CollaborationCollectionList>> = {
	'Lars the Troll': {
		name: 'Lars the Troll',
		image: 'trol',
		description: [
			'Some might already fear you like a troll or ogre from days of old. So why not look the part when you empty the coffers of their castle?'
		],
		collection: 'Steelseries',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A STEELSERIES ITEM!',
		cost: ''
	}
}

export default steelseries