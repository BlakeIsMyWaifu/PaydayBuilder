import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

export type JoyCharacterPackList =
	| 'Joy'
	| 'Joy Begins'

const joyCharacterPack: Record<JoyCharacterPackList, MaskData<JoyCharacterPackList, InfamousCollectionList>> = {
	'Joy': {
		name: 'Joy',
		image: 'joy',
		description: [
			'Bring back disco in style and confuse the hell out of your enemies when they gaze into your fabulously flashy face.'
		],
		collection: 'Joy Character Pack',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Joy Begins': {
		name: 'Joy Begins',
		image: 'joy_begins',
		description: [
			'Flair and flash always have to start somewhere. Sometimes it\'s a thumping white baseline,'
		],
		collection: 'Joy Character Pack',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default joyCharacterPack