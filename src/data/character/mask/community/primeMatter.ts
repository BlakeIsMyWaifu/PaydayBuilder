import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type CommunityCollectionList } from '../community'

export type PrimeMatterList =
	| 'Prime Time'

const primeMatter: Record<PrimeMatterList, MaskData<PrimeMatterList, CommunityCollectionList>> = {
	'Prime Time': {
		name: 'Prime Time',
		image: 'primtime',
		description: [
			'TONIGHT! Our Finalists don their Quantum Masks and travel back to the 21st Century! Armed only with primitive weapons of the era, they must steal as many riches as they can before the clock runs out!',
			'Who will survive? Who will return with the most loot? Who will shake hands with the legendary Payday Gang? Find out tonight on...HEIST TO THE FUTURE!'
		],
		collection: 'Prime Matter',
		source: source['Prime Matter'],
		rarity: 'Community',
		unlock: 'THIS IS A PRIME MATTER ITEM!',
		cost: ''
	}
}

export default primeMatter