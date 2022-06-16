import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type HotLineMiamiList =
	| 'Aubrey'
	| 'Dennis'
	| 'Graham'
	| 'Rasmus'

const hotlineMiami: Record<HotLineMiamiList, MaskData<HotLineMiamiList, DlcCollectionList>> = {
	'Aubrey': {
		name: 'Aubrey',
		image: 'pig',
		description: [
			'Aubrey is a real gun lover.',
			'Large headed and long snouted Aubrey is a master of arms and knows nothing better than to kill using some fine weaponry.',
			'Pigs have pretty small lungs though so Aubrey can\'t run that far.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami'],
		rarity: 'Paid',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Dennis': {
		name: 'Dennis',
		image: 'white_wolf',
		description: [
			'Dennis loves knives.',
			'The gray wolf is one of the best known and well researched animals on the entire planet. It was the first animal and only large carnivore to be domesticated by humans.',
			'Today, there\'s only one third of the population left because of human persecution.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami'],
		rarity: 'Paid',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Graham': {
		name: 'Graham',
		image: 'rabbit',
		description: [
			'Graham enjoys long walks in the sun.',
			'Rabbits are small mammals that practically can be found anywhere. If confronted by a potential threat, rabbits will instantly freeze and warn others in the warren with powerful thumps on the ground.',
			'When fleeing, they hop in a zig-zag pattern, much like many Counter-Strike players do.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami'],
		rarity: 'Paid',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Rasmus': {
		name: 'Rasmus',
		image: 'owl',
		description: [
			'Rasmus has an eye for secrets.',
			'Owls are nocturnal birds of prey. They are known for their large eyes in comparison to their skulls. They can\'t actually move their eyes, they swivel their heads instead and are able to swivel 270 degrees. Shit you didn\'t know, amirite.',
			'\'I don\'t know you!\' \'You\'re no guest of mine!\''
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami'],
		rarity: 'Paid',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default hotlineMiami