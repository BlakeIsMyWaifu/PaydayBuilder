import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type TheBikerHeistList =
	| 'The Classic'
	| 'Speed Devil'
	| 'Flaming Skull'
	| 'Road Rage'

const theBikerHeist: Record<TheBikerHeistList, MaskData<TheBikerHeistList, DlcCollectionList>> = {
	'The Classic': {
		name: 'The Classic',
		image: 'born_biker_01',
		description: [
			'This old school motorcycle helmet is part of a legacy all bikers around the world cherish. And it\'s more about nostalgia rather than style. This helmet transports you back to the golden biker days of the 1940\'s.'
		],
		collection: 'The Biker Heist',
		source: content['The Biker Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Speed Devil': {
		name: 'Speed Devil',
		image: 'born_biker_02',
		description: [
			'What better way to symbolize the do-not-give-a-fuck attitude of the biker lifestyle, than by wearing the face of the Devil. The ultimate symbol for breaking the law.'
		],
		collection: 'The Biker Heist',
		source: content['The Biker Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Flaming Skull': {
		name: 'Flaming Skull',
		image: 'born_biker_03',
		description: [
			'The skull as a symbol can either mean death or mortality, and we humans have always had a fascination for it. Wearing this motorcycle helmet looks powerful and intimidating.'
		],
		collection: 'The Biker Heist',
		source: content['The Biker Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Road Rage': {
		name: 'Road Rage',
		image: 'brutal',
		description: [
			'This helmet is reserved for the top dog in a biker gang. It demands respect and authority from your brothers, and when it\'s time to do battle, you wear this helmet proudly and ride at the front.'
		],
		collection: 'The Biker Heist',
		source: content['The Biker Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theBikerHeist