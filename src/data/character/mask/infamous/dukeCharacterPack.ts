import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type InfamousCollectionList } from '../infamous'

export type DukeCharacterPackList =
	| 'Duke'
	| 'Duke Begins'

const dukeCharacterPack: Record<DukeCharacterPackList, MaskData<DukeCharacterPackList, InfamousCollectionList>> = {
	'Duke': {
		name: 'Duke',
		image: 'myh',
		description: [
			'Duke is a man of culture, virtue and stone-hard composure. Thus his mask has been modeled of of the',
			'A big draw for Duke is his love for mystery- you never really know what\'s inside the safe until you open it, or behind the painting until you take it out of the frame. And with the Payday gang, the biggest mystery may be just around the corner...'
		],
		collection: 'Duke Character Pack',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Duke Begins': {
		name: 'Duke Begins',
		image: 'myh_begins',
		description: [
			'This is a clean version of the iconic Duke mask, before it was painted.'
		],
		collection: 'Duke Character Pack',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default dukeCharacterPack