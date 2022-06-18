import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type MegaCityTailorPackList =
	| 'Cyber Monkey'
	| 'Electro Tiger'
	| 'Robo Mantis'
	| 'Viper Cyberjack'

const megaCityTailorPack: Record<MegaCityTailorPackList, MaskData<MegaCityTailorPackList, DlcCollectionList>> = {
	'Cyber Monkey': {
		name: 'Cyber Monkey',
		image: 'mnk',
		description: [
			'When you feel the need to heist in the concrete jungle.'
		],
		collection: 'Mega City Tailor Pack',
		source: content['Mega City Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Electro Tiger': {
		name: 'Electro Tiger',
		image: 'tgr',
		description: [
			'Roar with 100,000 volts when the cops come for you..'
		],
		collection: 'Mega City Tailor Pack',
		source: content['Mega City Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Robo Mantis': {
		name: 'Robo Mantis',
		image: 'mnt',
		description: [
			'Blend in with all the other AI units.'
		],
		collection: 'Mega City Tailor Pack',
		source: content['Mega City Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Viper Cyberjack': {
		name: 'Viper Cyberjack',
		image: 'vpr',
		description: [
			'Slither away or bite to kill whenever you are threatened.'
		],
		collection: 'Mega City Tailor Pack',
		source: content['Mega City Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	}
}

export default megaCityTailorPack