import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type WinterGhostsTailorPackList =
	| 'Deer of Winters Past'
	| 'Kitsune Kari'
	| 'Leshy'
	| 'PermaFrost'

const winterGhostsTailorPack: Record<WinterGhostsTailorPackList, MaskData<WinterGhostsTailorPackList, DlcCollectionList>> = {
	'Deer of Winters Past': {
		name: 'Deer of Winters Past',
		image: 'icedeer',
		description: [
			'Do you remember that animated movie about that deer? The one where they killed his mom? Yeah, no; nobody is gonna mess with you or your crew while you wear this. If anything, you\'ll be hunting them.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		source: content['Winter Ghosts Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'Kitsune Kari': {
		name: 'Kitsune Kari',
		image: 'foxfurhat',
		description: [
			'It\'s important to keep in touch with nature, so why the hell not bring a piece of it with you? Though not truly on a fox hunt, you are out there hunting down that loot.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		source: content['Winter Ghosts Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'Leshy': {
		name: 'Leshy',
		image: 'leshy',
		description: [
			'The deity of the hunt, the spirit of the wild. Tear through a heist adorned in this primal mask of yore.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		source: content['Winter Ghosts Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'PermaFrost': {
		name: 'PermaFrost',
		image: 'iceskull',
		description: [
			'Keeping a cool head while the bullets are flying has never looked more terrifying. This one will scare the hell out of anyone facing you. Maybe even more so than your gun does.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		source: content['Winter Ghosts Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	}
}

export default winterGhostsTailorPack