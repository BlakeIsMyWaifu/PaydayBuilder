import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { DlcCollectionList } from '../dlc'

export type PoetryJamList =
	| 'Criminal Ambitions'
	| 'Metalhead'
	| 'The Optimist'
	| 'War Face'

const poetryJam: Record<PoetryJamList, MaskData<PoetryJamList, DlcCollectionList>> = {
	'Criminal Ambitions': {
		name: 'Criminal Ambitions',
		image: 'tcn',
		description: [
			'A mask only for the most ambitious heister.',
			'Take all the loot, leave nothing behind.'
		],
		collection: 'Poetry Jam',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	'Metalhead': {
		name: 'Metalhead',
		image: 'metalhead',
		description: [
			'The origin of the Metalhead is unclear.',
			'It looks more of a helmet than a mask. It has spikes pointing out of it and looks very much like a pimped out gas mask made of iron. It\'s unclear if it protects the wearer from any gas or melee weapons however.',
			'It looks pretty rad though.'
		],
		collection: 'Poetry Jam',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	'The Optimist': {
		name: 'The Optimist',
		image: 'optimist_prime',
		description: [
			'\'Be the change you want to see in the world.\'',
			'That\'s what the Optimist believes.',
			'As the leader of a peaceful group of robots, he feels it is his responsibility to combat rival bands of robots obsessed with negativity and extermination. His prime weapon: rolling out positivity ',
			'through constructive reasoning and unbiased logic.',
			'Or through forced upgrades. Which are compulsory.'
		],
		collection: 'Poetry Jam',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	'War Face': {
		name: 'War Face',
		image: 'surprise',
		description: [
			'You got a war face! AAAAAAAAHH! That\'s a war face, let me see your war face!',
			'...',
			'Bullshit. You didn\'t convince me, let me see your REAL war face!',
			'...Actually, that one\'s pretty good...'
		],
		collection: 'Poetry Jam',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	}
}

export default poetryJam