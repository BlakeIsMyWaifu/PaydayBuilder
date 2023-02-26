import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type WolfPackList =
	| 'Hans'
	| 'The Dragon Head'
	| 'The Viking'
	| 'Trickster Demon'

const wolfPack: Record<WolfPackList, MaskData<WolfPackList, DlcCollectionList>> = {
	'Hans': {
		name: 'Hans',
		image: 'nutcracker',
		description: [
			'Hans hates people and will crack the skull of anyone who opposes him. But under his frightening appearance, Hans is a good boy. You could almost say he\'s a prince in disguise. Treat him well and he might take you to the Land of Sweets.'
		],
		collection: 'Wolf Pack',
		source: content['Wolf Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The Dragon Head': {
		name: 'The Dragon Head',
		image: 'viking',
		description: [
			'Mounting the prow of Viking ships, the dragon head was used to scare off sea monsters and evil spirits. Dozers and Cloakers are evil, right? Why not give it a go and see if it can scare them away? But have your gun ready just in case. For safety.'
		],
		collection: 'Wolf Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		source: content['Wolf Pack'],
		cost: 'Unlocked through Achievement'
	},
	'The Viking': {
		name: 'The Viking',
		image: 'horned_king',
		description: [
			'The Germanic Norse seafarers known as Vikings were fierce warriors during the late 8th to late 11th centuries. Equipped with their mighty axes and horned helmets, they stood tall and proud in the heat of battle. If you want to capture the spirit of these old fighters, this mask will do the job.'
		],
		collection: 'Wolf Pack',
		source: content['Wolf Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Trickster Demon': {
		name: 'Trickster Demon',
		image: 'divided',
		description: [
			'The Trickster Demon is a mischievous being, who thrives on creating chaos and spreading mayhem. It might not look that scary, but don\'t let that smirk fool you; its idea of \'fun\' differ greatly from what you and me would enjoy. Trust me on this.'
		],
		collection: 'Wolf Pack',
		source: content['Wolf Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default wolfPack