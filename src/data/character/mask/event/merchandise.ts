import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type EventCollectionList } from '../event'

export type MerchandiseList =
	| 'Dozer Mask'

const merchandise: Record<MerchandiseList, MaskData<MerchandiseList, EventCollectionList>> = {
	'Dozer Mask': {
		name: 'Dozer Mask',
		image: 'bobblehead_dozer',
		description: [
			'\'Senpai Noticed Me!!! :3\'',
			'A big thank you to community member Far2close for making a hilarious version of an otherwise intimidating dozer face plate.',
			'This mask can only be obtained from a code accompanying the PAYDAY 2 DOZER BOBBLEHEAD bought from the online OVERKILL merchandise store.'
		],
		collection: 'Merchandise',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A MERCHANDISE ITEM!',
		cost: 'Free'
	}
}

export default merchandise