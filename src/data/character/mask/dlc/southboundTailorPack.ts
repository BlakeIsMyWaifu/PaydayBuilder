import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type SouthboundTailorPackList =
	| 'Blood Money'
	| 'Don\'t Mess With Texas'
	| 'Speedway'
	| 'El Capitan'
	| 'Lone Star'
	| 'Open Plain'
	| 'Triggerman'

const southboundTailorPack: Record<SouthboundTailorPackList, MaskData<SouthboundTailorPackList, DlcCollectionList>> = {
	'Blood Money': {
		name: 'Blood Money',
		image: 'ranchcap_plain',
		description: [
			'There\'s more to this hat than meets the eye. Unassuming at a glance, but it leaves a violent impression in the back of the mind. All that red... it\'s a bloody omen. Heaven help whoever gets in your way.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Don\'t Mess With Texas': {
		name: 'Don\'t Mess With Texas',
		image: 'ranchcap_texas',
		description: [
			'Home is where your head is, so let the world know why you\'re so much bigger, better and badder than everyone else. You\'re the reason nobody messes with Texas.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Speedway': {
		name: 'Speedway',
		image: 'ranchcap_emblem',
		description: [
			'You can learn a lot in the pit crew on a racing team. Do you have what it takes to move lightning-fast in the eye of a storm? Can you do your job while motors pop like gunshots all around you? Yes? Then you have what it takes to rob a bank.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'El Capitan': {
		name: 'El Capitan',
		image: 'saloondarklea',
		description: [
			'Dark leather puts a rocky edge on the cowboy look. Like the mountain for which it\'s named, this hat cuts an imposing figure, and your stony gaze only adds to the effect.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Lone Star': {
		name: 'Lone Star',
		image: 'saloonshade',
		description: [
			'Dallas, Houston... Texas has deep roots in the Payday Gang. Honor that family history with a hat that\'s got all the right kind of flair. Wear those state colors loud, and wear \'em proud.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Open Plain': {
		name: 'Open Plain',
		image: 'saloonlightlea',
		description: [
			'Sometimes, you just can\'t beat a classic. You want a hat that says "Giddyup, cowboy"? Look no further.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Triggerman': {
		name: 'Triggerman',
		image: 'saloonstar',
		description: [
			'You\'re a deadeye with an itchy trigger finger. Never been caught in a hail of bullets. When enemies see that dark star burning on your hat, they know to get the hell out of Dodge. The Old West is full of legendary gunmen, and you\'re a legend among legends.'
		],
		collection: 'Southbound Tailor Pack',
		source: content['Southbound Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	}
}

export default southboundTailorPack