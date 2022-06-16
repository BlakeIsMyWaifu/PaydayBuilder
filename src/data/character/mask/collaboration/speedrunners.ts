import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { CollaborationCollectionList } from '../collaboration'

type SpeedrunnersList =
	| 'Hothead'
	| 'SpeedRunner'
	| 'The Falcon'
	| 'Unic'

const speedrunners: Record<SpeedrunnersList, MaskData<SpeedrunnersList, CollaborationCollectionList>> = {
	'Hothead': {
		name: 'Hothead',
		image: 'hothead',
		description: [
			'With the rage of fearsome volcano, the hostile Hothead lights up the night with blazing speed! What ignites his frenzied flame? From what does the raging bull run? Very few have caught up close enough to ask, and even fewer have gotten a coherent response!'
		],
		collection: 'SpeedRunners',
		source: content.SpeedRunners,
		rarity: 'Collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	'SpeedRunner': {
		name: 'SpeedRunner',
		image: 'speedrunner',
		description: [
			'It\'s time for a speedy run! SpeedRunner is the people\'s champ in New Rush City. Running, sliding, swinging his way toward crime and those in need, he accepts no less than first place. SpeedRunner\'s got the need... for running!'
		],
		collection: 'SpeedRunners',
		source: content.SpeedRunners,
		rarity: 'Collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	'The Falcon': {
		name: 'The Falcon',
		image: 'falcon',
		description: [
			'Life\'s not all about speed and running! With his livelihood destroyed from a speedy accident, he became the hero that New Rush City truly deserves. Flacon vows to take down SpeedRunner and get the city back. Is Falcon the only one sane in a world gone mad- or is he a man in a chicken suit?'
		],
		collection: 'SpeedRunners',
		source: content.SpeedRunners,
		rarity: 'Collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	'Unic': {
		name: 'Unic',
		image: 'unic',
		description: [
			'Clop Clop- who\'s there? It\'s Unic! In the dark streets of New Rush City, what could shine brighter than an honest smile? Galloping in meadows, and sharing time with his friends, Unic is dedicated to showing the world\'s positive side, A pink leotard and purple boots make this speedy runner truly unique!'
		],
		collection: 'SpeedRunners',
		source: content.SpeedRunners,
		rarity: 'Collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	}
}

export default speedrunners