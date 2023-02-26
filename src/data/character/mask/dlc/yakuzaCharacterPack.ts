import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type YakuzaCharacterPackList =
	| 'Jiro'
	| 'Jiro Begins'

const yakuzaCharacterPack: Record<YakuzaCharacterPackList, MaskData<YakuzaCharacterPackList, DlcCollectionList>> = {
	'Jiro': {
		name: 'Jiro',
		image: 'jiro',
		description: [
			'Japan is a land of tradition. A land of warriors. Jiro\'s mask reflects this. The mask expresses Jiro\'s love for a traditional Japan, while the bared snarl represents his unshakable determination.'
		],
		collection: 'Yakuza Character Pack',
		source: content['Yakuza Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Jiro Begins': {
		name: 'Jiro Begins',
		image: 'jiro_begins',
		description: [
			'This is a clean version of Jiro\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Yakuza Character Pack',
		source: content['Yakuza Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default yakuzaCharacterPack