import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

export type JohnWickList =
	| 'Collateral'

const johnWick: Record<JohnWickList, MaskData<JohnWickList, InfamousCollectionList>> = {
	'Collateral': {
		name: 'Collateral',
		image: 'jw_shades',
		description: [
			'These shades belonged to a colleague of John\'s that he was hired to kill.',
			'It started like any other night. Only this night, he got a contract to kill another contract killer who was making rounds that day. John knew he had five stops to make and was using the same taxi cab between all of them.',
			'In the end, he didn\'t even need to do the deed himself - he was already dead when he found him.'
		],
		collection: 'John Wick',
		source: content['John Wick Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default johnWick