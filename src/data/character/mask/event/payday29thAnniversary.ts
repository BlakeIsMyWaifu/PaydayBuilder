import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type EventCollectionList } from '../event'

export type Payday29thAnniversaryList =
	| 'Nine Hundred Degrees'
	| 'Nine Lives'

const payday29thAnniversary: Record<Payday29thAnniversaryList, MaskData<Payday29thAnniversaryList, EventCollectionList>> = {
	'Nine Hundred Degrees': {
		name: 'Nine Hundred Degrees',
		image: 'megaskulldia',
		description: [
			'Blerrie! Looks like the diamonds I used to make that mask were imbued with some king of mystical energy! Are you noticing any prophetic visions? Maybe some new god-like powers? No? Just the burning eyes? Well, it\'s a cool look anyway!'
		],
		collection: 'Payday 2 9th Anniversary',
		source: content['9th Anniversary Event'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY 2 9th ANNIVERSARY ITEM!',
		cost: 'Unlocked through Side Job'
	},
	'Nine Lives': {
		name: 'Nine Lives',
		image: 'skulldia',
		description: [
			'Gotta hand it to you chops. You\'ve accomplished quite a bit in nine short years. How many places have you robbed? How many locks have you picked? How many kêrels and dentists and slimy stuck up power-hungry kaks have you sent to meet their blerrie maker? And I know we started things bumpy, but look at us now! You welcomed me in your gang. That meant the world, friends.',
			'I got this mask made as a little token of my thanks. Those are real South African diamonds, by the way!'
		],
		collection: 'Payday 2 9th Anniversary',
		source: content['9th Anniversary Event'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY 2 9th ANNIVERSARY ITEM!',
		cost: 'Unlocked through Side Job'
	}
}

export default payday29thAnniversary