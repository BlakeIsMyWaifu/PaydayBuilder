import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type DlcCollectionList } from '../dlc'

export type Ps4PreorderMaskList =
	| 'The Griefer'

const ps4PreorderMask: Record<Ps4PreorderMaskList, MaskData<Ps4PreorderMaskList, DlcCollectionList>> = {
	'The Griefer': {
		name: 'The Griefer',
		image: 'The_Griefer',
		description: [
			'The Griefer is a mythical beast, known to have been a part of this world long ago. The beast deliberately chased and harassed common folk in villages and towns, hunting them down in unsuspecting ways. The Griefer derived pleasure from these acts and was a threat to the peace until the King\'s men finally found him and destroyed him.'
		],
		collection: 'PS4 Pre-Order Mask',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	}
}

export default ps4PreorderMask