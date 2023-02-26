import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type CollaborationCollectionList } from '../collaboration'

export type DeadByDaylightDeluxeList =
	| 'Feeder'
	| 'Dendron'

const deadByDaylightDeluxe: Record<DeadByDaylightDeluxeList, MaskData<DeadByDaylightDeluxeList, CollaborationCollectionList>> = {
	'Feeder': {
		name: 'Feeder',
		image: 'dbd_02',
		description: [
			'Feeder has dislodged his jaw with one sole purpose: to be able to swallow a whole, human heart. When he roams the night he seeks out teens with strong hearts that can sustain him. So if you spot a corpse with a ripped chest - run.'
		],
		collection: 'Dead by Daylight Deluxe',
		source: content['Dead by Daylight Mask Pack 5'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	},
	'Dendron': {
		name: 'Dendron',
		image: 'dbd_03',
		description: [
			'A dark forest is scary to anyone, no matter how old you are. You fear whatever is in it, and the things lurking in the shadows. But you seldom think of the actual trees. You never think of Dendron. And when you do, it\'s already too late. Dendron strikes without mercy. So fear not what\'s behind the trees, but instead the trees.'
		],
		collection: 'Dead by Daylight Deluxe',
		source: content['Dead by Daylight Mask Pack 5'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	}
}

export default deadByDaylightDeluxe