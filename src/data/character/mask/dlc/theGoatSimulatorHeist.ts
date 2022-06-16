import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type TheGoatSimulatorHeistList =
	| 'Goat Goat'
	| 'Mastermind Goat'
	| 'Scout Goat'
	| 'Slick Goat'

const theGoatSimulatorHeist: Record<TheGoatSimulatorHeistList, MaskData<TheGoatSimulatorHeistList, DlcCollectionList>> = {
	'Goat Goat': {
		name: 'Goat Goat',
		image: 'goat_goat',
		description: [
			'The goat doesn\'t get much respect in the animal kingdom, and often find themselves mocked by other animals - but that works perfectly in their favor. Putting on this foolish mask might give you the same advantage and make the cops underestimate you.'
		],
		collection: 'The Goat Simulator Heist',
		source: content['The Goat Simulator Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Mastermind Goat': {
		name: 'Mastermind Goat',
		image: 'wet_goat',
		description: [
			'The dolphin is the most sinister and vicious heister in the animal kingdom, tricking everyone with its friendly and cute appearance. But it\'s all a facade! The dolphin only cares about itself and the loot, and won\'t hesitate a second to leave anyone behind. Caution is advised if you meet a fellow heister with this mask.'
		],
		collection: 'The Goat Simulator Heist',
		source: content['The Goat Simulator Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Scout Goat': {
		name: 'Scout Goat',
		image: 'tall_goat',
		description: [
			'The giraffe doesn\'t miss a thing, always in control of its surroundings, acting as the perfect \'look-out\' companion for heisting in the animal kingdom. Whatever it is, you\'ll see it coming from miles away and the cops can forget to take you by surprise.'
		],
		collection: 'The Goat Simulator Heist',
		source: content['The Goat Simulator Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Slick Goat': {
		name: 'Slick Goat',
		image: 'fancy_goat',
		description: [
			'The penguin is the slickest heister in the animal kingdom, walking around with a \'know-it-all\' attitude, taking their time and taking what they want - when they want, not giving a damn. Put on this mask and show everyone you\'re the boss of things.'
		],
		collection: 'The Goat Simulator Heist',
		source: content['The Goat Simulator Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theGoatSimulatorHeist