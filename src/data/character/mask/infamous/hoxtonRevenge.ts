import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

type HoxtonRevengeList =
	| 'Hoxton Reborn Begins'

const hoxtonRevenge: Record<HoxtonRevengeList, MaskData<HoxtonRevengeList, InfamousCollectionList>> = {
	'Hoxton Reborn Begins': {
		name: 'Hoxton Reborn Begins',
		image: 'old_hoxton_begins',
		description: [
			'This is a clean version of the iconic Hoxton Reborn mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Hoxton Revenge',
		source: content['Hoxton Revenge Heist'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default hoxtonRevenge