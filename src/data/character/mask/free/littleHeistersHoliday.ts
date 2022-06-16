import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { FreeCollectionList } from '../free'

type LittleHeistersHolidayList =
	| 'Bird Brain'
	| 'Hyena Two-Face'
	| 'Mad Cat'
	| 'Mayan Mosaic Death'
	| 'Relic Mask of the Body'
	| 'Relic Mask of the Mind'
	| 'Relic Mask of the Soul'
	| 'Relic Mask of the Will'

const littleHeistersHoliday: Record<LittleHeistersHolidayList, MaskData<LittleHeistersHolidayList, FreeCollectionList>> = {
	'Bird Brain': {
		name: 'Bird Brain',
		image: 'xm20_owl',
		description: [
			'This mask has no signature inside, implying that it was not crafted by Eduardo Maquevera himself, but by one of his apprentices.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Hyena Two-Face': {
		name: 'Hyena Two-Face',
		image: 'xm20_dog',
		description: [
			'Accompanying this mask was a hand-written letter by the maker, Eduardo Maquevera. In it, he explain'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Mad Cat': {
		name: 'Mad Cat',
		image: 'xm20_jaguar',
		description: [
			'Buluc\'s henchmen demanded that real leopard skin be used to craft this mask, but master mask maker Eduardo Maquevera instead went out of his way to fake it. They never noticed the difference!'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Mayan Mosaic Death': {
		name: 'Mayan Mosaic Death',
		image: 'xm20_serpent',
		description: [
			'This mask was made by master mask maker Eduardo Maquevera, in his San Diego workshop. A craftsman of true renown, he supplies much of the film industry with masks and props.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Relic Mask of the Body': {
		name: 'Relic Mask of the Body',
		image: 'msq_02',
		description: [
			'This mask was found, in the possession of an elderly farmer, whose family had it for generations. When he refused to sell it, Buluc\'s henchmen, in an act of utter cruelty, burned down his farm and livelihood, thereby forcing his hand. Hopefully, future owners of this historical relic will fare better, and act less barbarically.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Relic Mask of the Mind': {
		name: 'Relic Mask of the Mind',
		image: 'msq_04',
		description: [
			'Buluc\'s people found this mask while diving in an underwater Mayan ruin off the coast of Mexico, in search of precious relics for his collection. Rumor has it that his henchman Raul, who was on the boat, pushed the divers so hard that a couple of them died.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Relic Mask of the Soul': {
		name: 'Relic Mask of the Soul',
		image: 'msq_03',
		description: [
			'This is the second of Buluc\'s collection of masks to be found in an underwater ruin of Mayan origin. It too was recovered at great cost, and the sole survivor of the expedition to retrieve it claims that it\'s cursed. Buluc gives no regard to such notions, nor to the loss of people in his employ. The wreck of the small wooden boat used to retrieve it sits and decays on a beach near Buluc\'s mansion.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	'Relic Mask of the Will': {
		name: 'Relic Mask of the Will',
		image: 'msq_01',
		description: [
			'Mucho Mike bought this mask on the black market for Buluc\'s 40th birthday. It was the last one he needed to complete his set. Buluc, in a rare moment of sincere gratitude, granted Mike a promotion, giving him the status of his fourth personal bodyguard and confidant.'
		],
		collection: 'Little Heisters\' Holiday!',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	}
}

export default littleHeistersHoliday