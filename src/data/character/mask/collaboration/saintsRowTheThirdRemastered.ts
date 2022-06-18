import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { CollaborationCollectionList } from '../collaboration'

export type SaintsRowTheThirdRemasteredList =
	'Shady Business'

const saintsRowTheThirdRemastered: Record<SaintsRowTheThirdRemasteredList, MaskData<SaintsRowTheThirdRemasteredList, CollaborationCollectionList>> = {
	'Shady Business': {
		name: 'Shady Business',
		image: '???',
		description: [
			'If you\'ve got the suit, you need the matching eye protection to dangle from your nose-bridge, right? The Combined cool-factor of Clowns and Saints coming together might just be enough to cause a cosmic paradox and implode the entire universe. (Just don\'t ask Aldstone to clean up the mess, OK?)'
		],
		collection: 'Saints Row: The Third Remastered',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A SAINTS ROW: THE THIRD REMASTERED ITEM!',
		cost: ''
	}
}

export default saintsRowTheThirdRemastered