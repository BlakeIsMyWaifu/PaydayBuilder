import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type GoldenDaggerTailorPackList =
	| 'Crimson Striker Helmet'
	| 'Golden Draped Visor'
	| 'Hornet Striker Helmet'
	| 'Sterling Draped Visor'

const goldenDaggerTailorPack: Record<GoldenDaggerTailorPackList, MaskData<GoldenDaggerTailorPackList, DlcCollectionList>> = {
	'Crimson Striker Helmet': {
		name: 'Crimson Striker Helmet',
		image: 'biker_helmet_red_led',
		description: [
			'This stunning helmet will give you that slick aerodynamic look, and the designer was undoubtedly blasting vaporwave while making it.'
		],
		collection: 'Golden Dagger Tailor Pack',
		source: content['Golden Dagger Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Golden Draped Visor': {
		name: 'Golden Draped Visor',
		image: 'boss_gold',
		description: [
			'What do you call wearing a mask of solid gold? A bold statement, that\'s what.'
		],
		collection: 'Golden Dagger Tailor Pack',
		source: content['Golden Dagger Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Hornet Striker Helmet': {
		name: 'Hornet Striker Helmet',
		image: 'biker_helmet_yellow_led',
		description: [
			'This neon-style bad boy will inspire you to swoop in, make every sting count, and get out with the goods.'
		],
		collection: 'Golden Dagger Tailor Pack',
		source: content['Golden Dagger Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Sterling Draped Visor': {
		name: 'Sterling Draped Visor',
		image: 'boss_silver',
		description: [
			'Shiny like mirror and heavy, well, like silver, this mask will make you the center of attention.'
		],
		collection: 'Golden Dagger Tailor Pack',
		source: content['Golden Dagger Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	}
}

export default goldenDaggerTailorPack