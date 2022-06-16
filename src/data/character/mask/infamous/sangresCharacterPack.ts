import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

type SangresCharacterPackList =
	| 'Sangres'
	| 'Sangres Begins'

const sangresCharacterPack: Record<SangresCharacterPackList, MaskData<SangresCharacterPackList, InfamousCollectionList>> = {
	'Sangres': {
		name: 'Sangres',
		image: 'max',
		description: [
			'The skull is Death, Sangres\' faithful companion throughout his career. The gold tooth is the coin that has been paid. The kill counter represents his past as a hitman, the blood-red ruby the new wealth he\'s seeking in the US. Sangres\' name speaks of the many bloody episodes in his life, and that red blood is also present on his mask.'
		],
		collection: 'Sangres Character Pack',
		source: content['Sangres Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Sangres Begins': {
		name: 'Sangres Begins',
		image: 'max_begins',
		description: [
			'This is a clean version of the iconic Sangres mask, before it was painted.'
		],
		collection: 'Sangres Character Pack',
		source: content['Sangres Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default sangresCharacterPack