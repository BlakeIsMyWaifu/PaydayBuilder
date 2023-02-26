import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type DlcCollectionList } from '../dlc'

export type XboxOnePreorderMaskList =
	| 'The Intuition'

const xboxOnePreorderMask: Record<XboxOnePreorderMaskList, MaskData<XboxOnePreorderMaskList, DlcCollectionList>> = {
	'The Intuition': {
		name: 'The Intuition',
		image: 'The_Intuition',
		description: [
			'This mask belonged to a mysterious warrior from far away place. He walked the lands, guided by his intuition, hunting evil forces across the world. He ventured to dungeons and slew thousands of evil beings he came across. In the end, he found peace, knowing that the next generation would continue as he did.'
		],
		collection: 'Xbox One Pre-Order Mask',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	}
}

export default xboxOnePreorderMask