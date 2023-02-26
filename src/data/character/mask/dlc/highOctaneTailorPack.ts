import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type HighOctaneTailorPackList =
	| 'Chrome Dome'
	| 'Daredevil'
	| 'Funny Guy'
	| 'Speed Freak'
	| 'The Reaper'
	| 'Way of the Texan'

const highOctaneTailorPack: Record<HighOctaneTailorPackList, MaskData<HighOctaneTailorPackList, DlcCollectionList>> = {
	'Chrome Dome': {
		name: 'Chrome Dome',
		image: 'chrodome',
		description: [
			'There\'s a reason you keep your helmet so shiny, so spotless. It reflects the car bombs you detonate so much better that way.'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	},
	'Daredevil': {
		name: 'Daredevil',
		image: 'daredev',
		description: [
			'It\'s a perfect moment. Suspended in mid-air, the motorcycle ramp behind you, the other side of you the Grand Canyon getting closer by the second. Will you stick the landing, or plummet to your death? The question doesn\'t even cross your mind. Right now, for maybe the first time in your life... You\'re truly alive.'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	},
	'Funny Guy': {
		name: 'Funny Guy',
		image: 'funguy',
		description: [
			'When he tells you a joke, laugh. Laugh hard, laugh long, laugh until there\'s no more air in your lungs, then keep on laughing. Because if you stop, he\'ll get mad. When he gets mad, he gets hungry. And when he gets hungry... Well, you can probably guess the punchline.'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	},
	'Speed Freak': {
		name: 'Speed Freak',
		image: 'speedfreak',
		description: [
			'If the voices in your head want to drive you insane, they\'ll have to catch you first'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	},
	'The Reaper': {
		name: 'The Reaper',
		image: 'threap',
		description: [
			'You\'ve seen him in pictures of ten car pile-ups, in news footage of truck collisions, always riding past the scene of a nasty accident. A motorcyclist shrouded head-to-toe in black, his pale face a blur of speed. They tell you he\'s just some biker. One in a million. But you know you\'ve seen him before. You think you can see him now, riding just ahead of you on this icy, snowblind freeway...',
			'That\'s when you realize your brakes aren\'t working.'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	},
	'Way of the Texan': {
		name: 'Way of the Texan',
		image: 'waytexas',
		description: [
			'Be resilient. Be prideful. Be stubborn. Be friendly. Be a damn good shot with a revolver.',
			'Mostly the last one'
		],
		collection: 'High Octane Tailor Pack',
		source: content['High Octane Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A HIGH OCTANE TAILOR PACK ITEM!',
		cost: ''
	}
}

export default highOctaneTailorPack