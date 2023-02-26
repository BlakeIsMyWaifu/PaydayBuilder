import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type LootbagList =
	| 'The Skull'

const lootbag: Record<LootbagList, MaskData<LootbagList, DlcCollectionList>> = {
	'The Skull': {
		name: 'The Skull',
		image: 'skull',
		description: [
			'An exclusive mask representing death and mortality.',
			'Created in the heavens as a gift by the gods to men and women who believed in them early on, who built their shrines and spread their beliefs across the lands.',
			'Thank you for believing in us! We salute you!'
		],
		collection: 'Lootbag',
		source: content.Lootbag,
		rarity: 'Paid',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$6,750'
	}
}

export default lootbag