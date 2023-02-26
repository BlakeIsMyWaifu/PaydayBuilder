import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type BorderCrossingHeistList =
	| 'Hippika'

const borderCrossingHeist: Record<BorderCrossingHeistList, MaskData<BorderCrossingHeistList, DlcCollectionList>> = {
	'Hippika': {
		name: 'Hippika',
		image: 'roman',
		description: [
			'Stoic and noble, the steel face of a warrior from the greatest empire represents tradition and values at a time when one faces the greatest enemy. A centurion of Crime.net can embody the strength and power of ancient Rome with this piece of metal artistry.'
		],
		collection: 'Border Crossing Heist',
		source: content['Border Crossing Heist'],
		rarity: 'Paid',
		unlock: 'THIS ITEM IS A BORDER CROSSING HEIST ITEM',
		cost: ''
	}
}

export default borderCrossingHeist