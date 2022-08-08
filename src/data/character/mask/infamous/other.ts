import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

export type OtherList =
	| 'StarVR'
	| 'Mega Death'
	| 'Omen'
	| 'Mega Duke'

const other: Record<OtherList, MaskData<OtherList, InfamousCollectionList>> = {
	'StarVR': {
		name: 'StarVR',
		image: 'starvr',
		description: [
			'Real life is dirty, uncomfortable, sticky, sweaty, stinky, it tastes bad and leaves you old and broken. Screw that. The StarVR Headset lets you immerse yourself in a virtual world of incredible realism.'
		],
		collection: 'Other',
		source: content['StarVR Mask Pack'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Mega Death': {
		name: 'Mega Death',
		image: 'mdm',
		description: [
			'Death can be the end but it can also be a beginning, a transcendence and catharsis. And Mega Death has a million times the power of Death.'
		],
		collection: 'Other',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Omen': {
		name: 'Omen',
		image: 'maw_01',
		description: [
			'The mask is made from ancient stone, with carvings from each previous owner, and a symbol that radiates immense power. As the writing on the edge suggests, it is the beginning of the end for anyone who opposes the wearer.'
		],
		collection: 'Other',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Mega Duke': {
		name: 'Mega Duke',
		image: 'mmh',
		description: [
			'Aristole, Plato, Confucius, Michelangelo, DaVinci, Newton, Galileo... artists and thinkers forever engraved in history. And somewhere in that history, the place of a heister is assured. Contained herein is their essence, so magnificent in combination that the very surface of the mask can barely contain it.'
		],
		collection: 'Other',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default other