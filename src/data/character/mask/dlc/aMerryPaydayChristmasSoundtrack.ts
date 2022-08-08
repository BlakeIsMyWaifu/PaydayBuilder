import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type AMerryPaydayChristmasSoundtrackList =
	| 'Furious Santa'
	| 'Surprised Santa'
	| 'Tipsy Santa'

const aMerryPaydayChristmasSoundtrack: Record<AMerryPaydayChristmasSoundtrackList, MaskData<AMerryPaydayChristmasSoundtrackList, DlcCollectionList>> = {
	'Furious Santa': {
		name: 'Furious Santa',
		image: 'santa_mad',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Furious Santa mask. It\'s worn by angry internet users and bad children who didn\'t get the presents they wanted.'
		],
		collection: 'A Merry Payday Christmas Soundtrack',
		source: content['A Merry Payday Christmas Soundtrack'],
		rarity: 'Paid',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	'Surprised Santa': {
		name: 'Surprised Santa',
		image: 'santa_surprise',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Surprised Santa mask. Who knows why he\'s surprised? Maybe someone stole his sled? Maybe someone stole his reindeers? Maybe he just saw someone rob a bank?'
		],
		collection: 'A Merry Payday Christmas Soundtrack',
		source: content['A Merry Payday Christmas Soundtrack'],
		rarity: 'Paid',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	'Tipsy Santa': {
		name: 'Tipsy Santa',
		image: 'santa_drunk',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Tipsy Santa mask. You know that type of feeling when you\'re tipsy and are feeling something\'s going on but you aren\'t hammered yet. That\'s tipsy for ya.'
		],
		collection: 'A Merry Payday Christmas Soundtrack',
		source: content['A Merry Payday Christmas Soundtrack'],
		rarity: 'Paid',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	}
}

export default aMerryPaydayChristmasSoundtrack