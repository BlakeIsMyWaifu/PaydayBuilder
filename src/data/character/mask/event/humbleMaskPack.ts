import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type EventCollectionList } from '../event'

export type HumbleMaskPackList =
	| 'The Crossbreed'
	| 'The Orc'

const humbleMaskPack: Record<HumbleMaskPackList, MaskData<HumbleMaskPackList, EventCollectionList>> = {
	'The Crossbreed': {
		name: 'The Crossbreed',
		image: 'ancient',
		description: [
			'A powerful alien race, described by some as the most advanced beings in the universe. Different races that have come in contact with them have different names for the Crossbreed.',
			'Strong, lean and intelligent, the Crossbreed takes the best from the DNA of each alien race that it meets, always making sure it evolves in the right direction.'
		],
		collection: 'Humble Mask Pack',
		source: content['Humble Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	},
	'The Orc': {
		name: 'The Orc',
		image: 'twitch_orc',
		description: [
			'Brutish, aggressive and generally repulsive, the orcs have always been a hated race. Orcs are larger stronger than their goblin cousins but smaller and less powerful than their ogre brethren.',
			'This particular purple-skinned orc came from the Stonetremble clan who were known for their fierce warriors and overpowered, hybrid shamans.'
		],
		collection: 'Humble Mask Pack',
		source: content['Humble Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	}
}

export default humbleMaskPack