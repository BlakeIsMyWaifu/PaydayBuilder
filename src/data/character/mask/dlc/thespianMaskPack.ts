import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type ThespianMaskPackList =
	| 'Thespian'

const thespianMaskPack: Record<ThespianMaskPackList, MaskData<ThespianMaskPackList, DlcCollectionList>> = {
	'Thespian': {
		name: 'Thespian',
		image: 'Thespian',
		description: [
			'Thespian is a superhuman soldier of fortune. In the future, space marines like Thespian protect the world of mankind and its space colonies from the forces of evil.',
			'His helmet is popular gift in the criminal underworld and is given to thieves, thugs and career criminals who show loyalty and patience to their syndicate.',
			'We at OVERKILL salute you for your loyalty and patience!'
		],
		collection: 'Thespian Mask Pack',
		source: content['Thespian Mask Pack DLC'],
		rarity: 'Paid',
		unlock: 'THIS IS A THESPIAN MASK PACK ITEM!',
		cost: '$6,750'
	}
}

export default thespianMaskPack