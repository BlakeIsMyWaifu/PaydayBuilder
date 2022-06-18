import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { InfamousCollectionList } from '../infamous'

export type JimmyCharacterPackList =
	| 'Jimmy'
	| 'The White Death'

const jimmyCharacterPack: Record<JimmyCharacterPackList, MaskData<JimmyCharacterPackList, InfamousCollectionList>> = {
	'Jimmy': {
		name: 'Jimmy',
		image: 'jimmy_duct',
		description: [
			'Jimmy hasn\'t really made many masks before he made his signature mask - and it shows. His mask design captures his free spirit and his disregard to things as appearance, planning and such. Good is good enough for Jimmy, he doesn\'t get stuck in ideas and wants to move forward at all times.'
		],
		collection: 'Jimmy Character Pack',
		source: content['Jimmy Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'The White Death': {
		name: 'The White Death',
		image: 'jimmy',
		description: [
			'Jimmys second attempt at making a mask went much better - that\'s because he got some help from Gage. It represents the Grim Reaper himself if he was coked up. The mask captures both the crazy and deadly sides of Jimmy, aimed to sending fear into his enemies.'
		],
		collection: 'Jimmy Character Pack',
		source: content['Jimmy Character Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default jimmyCharacterPack