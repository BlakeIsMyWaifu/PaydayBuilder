import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

type HumbleMaskPack4List =
	| 'Borsuk'
	| 'Mask of the Moon'

const humbleMaskPack4: Record<HumbleMaskPack4List, MaskData<HumbleMaskPack4List, EventCollectionList>> = {
	'Borsuk': {
		name: 'Borsuk',
		image: 'borsuk',
		description: [
			'There is more to being a world-class heister than picking up a gun. It requires training, conditioning and a singular focus on developing far beyond the norm. Such heisters are near mutants, who wade into furious battle and always emerge victorious.'
		],
		collection: 'Humble Mask Pack 4',
		source: content['Humble Mask Pack 4'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	},
	'Mask of the Moon': {
		name: 'Mask of the Moon',
		image: 'moon',
		description: [
			'Legend speaks of an entity so malevolent it tried to smash the Moon into the Earth. Though defeated by four masked warriors, the entity escaped and inhabited... something. We hope it will never return, but remember: sometimes the man wears the mask, and sometimes the mask wears the man.'
		],
		collection: 'Humble Mask Pack 4',
		source: content['Humble Mask Pack 4'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	}
}

export default humbleMaskPack4