import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { CollaborationCollectionList } from '../collaboration'

export type HotlineMiamiList =
	| 'Brandon'
	| 'Don Juan'
	| 'Richard'
	| 'Tony'

const hotlineMiami: Record<HotlineMiamiList, MaskData<HotlineMiamiList, CollaborationCollectionList>> = {
	'Brandon': {
		name: 'Brandon',
		image: 'panther',
		description: [
			'Brandon has a thing for walking really, really fast.',
			'Brandon is a panther, and panthers are large cats. One funny thing is that only the tiger, lion, leopard and jaguar has the anatomical structure which enables them to roar. Poor panther.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami Exclusive Content'],
		rarity: 'Collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	'Don Juan': {
		name: 'Don Juan',
		image: 'horse',
		description: [
			'Don Juan loves slamming doors in.',
			'Knock, knock. Who\'s there? It\'s Don Juan. Prepare yourself.',
			'Pro tip: In Hotline Miami, you get 2200 points while performing ground kills against the wall when using this mask.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami Exclusive Content'],
		rarity: 'Collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	'Richard': {
		name: 'Richard',
		image: 'rooster',
		description: [
			'Richard enjoys spending time with different personas and asking questions.',
			'Do you like hurting other people?',
			'Who is leaving messages on your answering machine?',
			'Where are you right now?',
			'Why are we having this conversation?'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami Exclusive Content'],
		rarity: 'Collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	'Tony': {
		name: 'Tony',
		image: 'tiger',
		description: [
			'Tony uses his fists of fury to beat the crap of anyone who messes with him.',
			'Tony was born in the 1970s and was of Italian-American nationality. Many people easily recognize Tony. Probably in part because of his Tiger mask, and in part because of his physical brutality when dealing with people he don\'t like.'
		],
		collection: 'Hotline Miami',
		source: content['Hotline Miami Exclusive Content'],
		rarity: 'Collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	}
}

export default hotlineMiami