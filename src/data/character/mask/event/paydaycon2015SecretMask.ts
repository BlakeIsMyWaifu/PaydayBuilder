import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type Paydaycon2015SecretMaskList =
	| 'King of Jesters'

const paydaycon2015SecretMask: Record<Paydaycon2015SecretMaskList, MaskData<Paydaycon2015SecretMaskList, EventCollectionList>> = {
	'King of Jesters': {
		name: 'King of Jesters',
		image: 'king_of_jesters',
		description: [
			'Wearing brightly coloured clothes and eccentric hats in a motley pattern, jesters have always had a place in these parts.',
			'Whether walking on stilts, performing with fire or telling jokes; their sole purpose is to spread joy in our hearts.',
			'However, this is your time to shine so why not put on the mask and spread some joy.',
			'So, pull out your gun, rob your guests and tell them it was all a big ploy.'
		],
		collection: 'PAYDAYCON 2015 Secret Mask',
		source: content['The PAYDAYCON 2015 Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAYCON 2015 SECRET MASK ITEM!',
		cost: 'Free'
	}
}

export default paydaycon2015SecretMask