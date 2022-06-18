import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type TheOverkillPackList =
	| 'General Overkill'

const theOverkillPack: Record<TheOverkillPackList, MaskData<TheOverkillPackList, DlcCollectionList>> = {
	'General Overkill': {
		name: 'General Overkill',
		image: 'the_overkill_mask',
		description: [
			'Ten-shun! Right, listen up, you heisting bastards. You\'re heading into war. You\'re gonna feel the sting of battle. And in war you need a leader. Meet General Overkill. He\'ll be there to make sure you go through those cop bastards like crap through a goose. Dismissed!'
		],
		collection: 'The OVERKILL Pack',
		source: content['The OVERKILL Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A OVERKILL PACK ITEM!',
		cost: 'Free'
	}
}

export default theOverkillPack