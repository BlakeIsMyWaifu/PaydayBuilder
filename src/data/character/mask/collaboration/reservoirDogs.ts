import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { CollaborationCollectionList } from '../collaboration'

export type ReservoirDogsList =
	| 'Futuras'
	| 'Producers'
	| 'The Dons'

const reservoirDogs: Record<ReservoirDogsList, MaskData<ReservoirDogsList, CollaborationCollectionList>> = {
	'Futuras': {
		name: 'Futuras',
		image: 'rvd_02',
		description: [
			'Look no further for a bad ass cherry to put on top of your Ice Cream of Minigun mayhem.'
		],
		collection: 'Reservoir Dogs',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	'Producers': {
		name: 'Producers',
		image: 'rvd_01',
		description: [
			'These frames harken back to a time when moon-landings were envisioned, all dreams were possible and people all dressed a little nicer.'
		],
		collection: 'Reservoir Dogs',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	'The Dons': {
		name: 'The Dons',
		image: 'rvd_01',
		description: [
			'True class is eternal when accepted by scoundrels and heroes alike.'
		],
		collection: 'Reservoir Dogs',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	}
}

export default reservoirDogs