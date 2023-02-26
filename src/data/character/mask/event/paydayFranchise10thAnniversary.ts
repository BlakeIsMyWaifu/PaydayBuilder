import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type EventCollectionList } from '../event'

export type PaydayFranchise10thAnniversaryList =
	| 'Decennial Jester'

const paydayFranchise10thAnniversary: Record<PaydayFranchise10thAnniversaryList, MaskData<PaydayFranchise10thAnniversaryList, EventCollectionList>> = {
	'Decennial Jester': {
		name: 'Decennial Jester',
		image: 'jesterskulls',
		description: [
			'Put this on and jangle those little gold skulls in the face of every law enforcement officer who thinks they can bring down the Payday gang, then let rip a guffaw loud enough to wake the dead as you get away with those bags of loot right from under their noses. Go ahead, you know you want to.'
		],
		collection: 'Payday Franchise 10th Anniversary',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY FRANCHISE 10TH ANNIVERSARY ITEM!',
		cost: ''
	}
}

export default paydayFranchise10thAnniversary