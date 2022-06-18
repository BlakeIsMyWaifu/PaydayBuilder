import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageRussianWeaponPackList =
	| 'Red Machine'
	| 'Matryoshka'
	| 'War Balaclava'
	| 'Kokoshnik'

const gageRussianWeaponPack: Record<GageRussianWeaponPackList, MaskData<GageRussianWeaponPackList, DlcCollectionList>> = {
	'Red Machine': {
		name: 'Red Machine',
		image: 'grv_04',
		description: [
			'No one can stop the Red Machine! It\'s fast, ice-cold and merciless. With swift moves, lightning strikes and flawless tactics it humiliates the opposition, leaving them crying in desperation. Just like The Payday Gang.'
		],
		collection: 'Gage Russian Weapon Pack',
		source: content['Gage Russian Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	'Matryoshka': {
		name: 'Matryoshka',
		image: 'grv_02',
		description: [
			'Things are not always what they seem. Behind the mask there is a face, true. But what\'s behind the face? Another face, perhaps. How do you know where the real person is, and how many layers must be removed before you reach the core - the inner self?'
		],
		collection: 'Gage Russian Weapon Pack',
		source: content['Gage Russian Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	'War Balaclava': {
		name: 'War Balaclava',
		image: 'grv_01',
		description: [
			'Half a block, half a block'
		],
		collection: 'Gage Russian Weapon Pack',
		source: content['Gage Russian Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	'Kokoshnik': {
		name: 'Kokoshnik',
		image: 'grv_03',
		description: [
			'Finely crested for glory, this elaborate headpiece will impress. Wear it proudly, displaying the fine embroidery for all to envy. But watch out for low doorways.'
		],
		collection: 'Gage Russian Weapon Pack',
		source: content['Gage Russian Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	}
}

export default gageRussianWeaponPack