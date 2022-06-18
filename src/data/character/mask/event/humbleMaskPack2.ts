import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type HumbleMaskPack2List =
	| 'Lycanwulf'
	| 'The One Below'

const humbleMaskPack2: Record<HumbleMaskPack2List, MaskData<HumbleMaskPack2List, EventCollectionList>> = {
	'Lycanwulf': {
		name: 'Lycanwulf',
		image: 'lycan',
		description: [
			'\'Lycanwulf, Lycanwulf!\' they yelled, the frightened villagers, as they laid eyes upon this abomination known as the Lycanwulf. The petty humans were now prisoners of the beast, in a prison without walls, ceilings or a key, where the only escape was death.'
		],
		collection: 'Humble Mask Pack 2',
		source: content['Humble Mask Pack 2'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	},
	'The One Below': {
		name: 'The One Below',
		image: 'the_one_below',
		description: [
			'The head is what remains of this aquatic horror from the old days, when dark lords ruled the lands and good men grew up only to die; when the summer was short and the winter felt like an eternity; when the One Below stepped out of the ocean and walked the earth.'
		],
		collection: 'Humble Mask Pack 2',
		source: content['Humble Mask Pack 2'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	}
}

export default humbleMaskPack2