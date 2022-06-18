import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { EventCollectionList } from '../event'

export type LockeAndLoadDay9List =
	| 'Simon'

const lockeAndLoadDay9: Record<LockeAndLoadDay9List, MaskData<LockeAndLoadDay9List, EventCollectionList>> = {
	'Simon': {
		name: 'Simon',
		image: 'pbm',
		description: [
			'A wanna-be robber tried to knock over a liquor store, but neglected to properly conceal'
		],
		collection: 'Locke and Load Day 9',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A LOCKE AND LOAD ITEM(sic)',
		cost: 'Free'
	}
}

export default lockeAndLoadDay9