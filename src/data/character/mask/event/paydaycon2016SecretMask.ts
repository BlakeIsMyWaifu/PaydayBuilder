import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

type Paydaycon2016SecretMaskList =
	| 'Mega Clover'

const paydaycon2016SecretMask: Record<Paydaycon2016SecretMaskList, MaskData<Paydaycon2016SecretMaskList, EventCollectionList>> = {
	'Mega Clover': {
		name: 'Mega Clover',
		image: 'pdc16_clover',
		description: [
			'The Mega Clover mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'PAYDAYCON 2016 Secret Mask',
		source: content['PAYDAYCON 2016'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAYCON 2016 SECRET ITEM!',
		cost: 'Free'
	}
}

export default paydaycon2016SecretMask