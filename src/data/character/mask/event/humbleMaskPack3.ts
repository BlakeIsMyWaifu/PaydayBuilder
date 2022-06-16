import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

type HumbleMaskPack3List =
	| 'Electarodent'
	| 'Titan'

const humbleMaskPack3: Record<HumbleMaskPack3List, MaskData<HumbleMaskPack3List, EventCollectionList>> = {
	'Electarodent': {
		name: 'Electarodent',
		image: 'pokachu',
		description: [
			'Untrained, the Electarodent can be found nibbling sweet carrots or frolicking across Alpine meadows. However, fully trained, the Electarodent is most often found wielding Bernetti 9\'s and eating through the face-plates of Skulldozers'
		],
		collection: 'Humble Mask Pack 3',
		source: content['Humble Mask Pack 3'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	},
	'Titan': {
		name: 'Titan',
		image: 'titan',
		description: [
			'Once, they strode amongst us. Cyclopean beings, tall as towers. They were old, even when our primate ancestors howled at fire. Now, they are gone, and only their shades come to us in half-dreamt race memories.'
		],
		collection: 'Humble Mask Pack 3',
		source: content['Humble Mask Pack 3'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	}
}

export default humbleMaskPack3