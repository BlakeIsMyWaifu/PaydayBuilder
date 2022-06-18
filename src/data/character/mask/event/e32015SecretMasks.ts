import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type E32015SecretMasksList =
	| 'Jack of Cards'
	| 'Queen of Cards'
	| 'King of Cards'
	| 'Joker of Cards'

const e32015SecretMasks: Record<E32015SecretMasksList, MaskData<E32015SecretMasksList, EventCollectionList>> = {
	'Jack of Cards': {
		name: 'Jack of Cards',
		image: 'card_jack',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		source: content['The Jack Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	'Queen of Cards': {
		name: 'Queen of Cards',
		image: 'card_queen',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		source: content['The Queen Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	'King of Cards': {
		name: 'King of Cards',
		image: 'card_king',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		source: content['The King Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	'Joker of Cards': {
		name: 'Joker of Cards',
		image: 'card_joker',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		source: content['The Joker Mask Pack'],
		rarity: 'Event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	}
}

export default e32015SecretMasks