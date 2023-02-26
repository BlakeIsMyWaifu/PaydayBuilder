import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type SanMartinBankHeistList =
	| 'Sombrero'

const sanMartinBankHeist: Record<SanMartinBankHeistList, MaskData<SanMartinBankHeistList, DlcCollectionList>> = {
	'Sombrero': {
		name: 'Sombrero',
		image: 'sombrero',
		description: [
			'He who laughs at the heister wearing this may soon realize he has laughed his last, unless you can laugh with a big damm bullet hole in your face'
		],
		collection: 'San Martín Bank Heist',
		source: content['San Martín Bank Heist'],
		rarity: 'Paid',
		unlock: 'THIS ITEM IS A SAN MARTÍN BANK HEIST ITEM!',
		cost: ''
	}
}

export default sanMartinBankHeist