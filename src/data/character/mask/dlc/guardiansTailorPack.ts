import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GuardiansTailorPackList =
	| 'Azure Dragon'
	| 'Black Tortoise'
	| 'Vermilion Bird'
	| 'White Tiger'

const guardiansTailorPack: Record<GuardiansTailorPackList, MaskData<GuardiansTailorPackList, DlcCollectionList>> = {
	'Azure Dragon': {
		name: 'Azure Dragon',
		image: '', // ???
		description: [
			'Don this symbol of the four auspicious beats and wield the great power of the east to bring on the coming of spring!'
		],
		collection: 'Guardians Tailor Pack',
		source: content['Guardians Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'Black Tortoise': {
		name: 'Black Tortoise',
		image: '', // ???
		description: [
			'The darkest of the four auspicious beasts calls forth winter from the northlands!'
		],
		collection: 'Guardians Tailor Pack',
		source: content['Guardians Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'Vermilion Bird': {
		name: 'Vermilion Bird',
		image: '', // ???
		description: [
			'From the south comes this symbol of the four auspicious beasts, carrying with it the bright blistering heat of summer flame.'
		],
		collection: 'Guardians Tailor Pack',
		source: content['Guardians Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'White Tiger': {
		name: 'White Tiger',
		image: '', // ???
		description: [
			'The leaves falling onto the streets bear witness to this auspicious beast of the west, and coming of autumn.'
		],
		collection: 'Guardians Tailor Pack',
		source: content['Guardians Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	}
}

export default guardiansTailorPack