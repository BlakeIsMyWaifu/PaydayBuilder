import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type BulucsMansionHeistList =
	| 'Undead Peacock'

const bulucsMansionHeist: Record<BulucsMansionHeistList, MaskData<BulucsMansionHeistList, DlcCollectionList>> = {
	'Undead Peacock': {
		name: 'Undead Peacock',
		image: 'buluc',
		description: [
			'He who has the most outrageously hideous visage on his head, wins.'
		],
		collection: 'Buluc\'s Mansion Heist',
		source: content['Buluc\'s Mansion Heist'],
		rarity: 'Paid',
		unlock: 'THIS ITEM IS A BULUC\'S MANSION HEIST ITEM!',
		cost: ''
	}
}

export default bulucsMansionHeist