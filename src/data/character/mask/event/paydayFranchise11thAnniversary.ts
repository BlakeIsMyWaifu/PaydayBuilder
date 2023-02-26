import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type EventCollectionList } from '../event'

export type PaydayFranchise11thAnniversaryList =
	| 'Family Man Dark'
	| 'Family Man Gray'

const paydayFranchise11thAnniversary: Record<PaydayFranchise11thAnniversaryList, MaskData<PaydayFranchise11thAnniversaryList, EventCollectionList>> = {
	'Family Man Dark': {
		name: 'Family Man Dark',
		image: 'homburg',
		description: [
			'Never take sides against the family.'
		],
		collection: 'Payday Franchise 11th Anniversary',
		source: content['Payday 11th Anniversary'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY FRANCHISE 11TH ANNIVERSARY ITEM!',
		cost: ''
	},
	'Family Man Gray': {
		name: 'Family Man Gray',
		image: 'homburg_grey',
		description: [
			'Remember: always make time for the ones you love, buy don\'t let them ask you about your business.'
		],
		collection: 'Payday Franchise 11th Anniversary',
		source: content['Payday 11th Anniversary'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY FRANCHISE 11TH ANNIVERSARY ITEM!',
		cost: ''
	}
}

export default paydayFranchise11thAnniversary