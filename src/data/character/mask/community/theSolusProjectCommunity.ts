import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { CommunityCollectionList } from '../community'

export type TheSolusProjectCommunityList =
	| 'Planetary Tomb Guardian'

const theSolusProjectCommunity: Record<TheSolusProjectCommunityList, MaskData<TheSolusProjectCommunityList, CommunityCollectionList>> = {
	'Planetary Tomb Guardian': {
		name: 'Planetary Tomb Guardian',
		image: 'solus',
		description: [
			'Being a Planetary Tomb Guardian is a lonely job. But a job that must be done. Eons of time float by without a single living organism in sight. Stars and suns brighten the day and night. But solitude is a horrid thing. But then one day, a spacecraft breaks the silence and you are not alone anymore. Someone is visiting this planet you call home.'
		],
		collection: 'The Solus Project Community',
		source: content['The Solus Project Mask Pack'],
		rarity: 'Community',
		unlock: 'THIS IS A THE SOLUS PROJECT COMMUNITY ITEM!',
		cost: ''
	}
}

export default theSolusProjectCommunity