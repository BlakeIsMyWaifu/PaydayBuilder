import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type EventCollectionList } from '../event'

export type AlienwareAlphaMaskPackList =
	| 'Alpha Grey'
	| 'The Anomaly'

const alienwareAlphaMaskPack: Record<AlienwareAlphaMaskPackList, MaskData<AlienwareAlphaMaskPackList, EventCollectionList>> = {
	'Alpha Grey': {
		name: 'Alpha Grey',
		image: 'alien_helmet',
		description: [
			'Grey Aliens are alleged extraterrestrial beings whose existence is promoted in ufological, paranormal, and New Age communities, and who are named for their skin color.',
			'Or are they?'
		],
		collection: 'Alienware Alpha Mask Pack',
		source: content['Alienware Alpha Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	},
	'The Anomaly': {
		name: 'The Anomaly',
		image: 'area51',
		description: [
			'Forged from Penrose patterned rapidly quenched metallic alloys, this helmet was constructed from debris recovered from a top secret crash site. The government continues to deny any knowledge of its existence.'
		],
		collection: 'Alienware Alpha Mask Pack',
		source: content['Alienware Alpha Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	}
}

export default alienwareAlphaMaskPack