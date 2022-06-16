import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { CommunityCollectionList } from '../community'

type StarbreezeAccountList =
	| 'Frayed Harvest'

const starbreezeAccount: Record<StarbreezeAccountList, MaskData<StarbreezeAccountList, CommunityCollectionList>> = {
	'Frayed Harvest': {
		name: 'Frayed Harvest',
		image: 'elegantteeth',
		description: [
			'You reap what others sow and take only what you want. Regal, yet simple and savage, this mask will suit your needs.'
		],
		collection: 'Starbreeze Account',
		source: source['Base Game'],
		rarity: 'Community',
		unlock: 'THIS IS A STARBREEZE ACCOUNT ITEM!',
		cost: ''
	}
}

export default starbreezeAccount