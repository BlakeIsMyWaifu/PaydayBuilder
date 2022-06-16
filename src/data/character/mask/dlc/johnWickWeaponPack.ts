import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type JohnWickWeaponPackList =
	| 'Daisy'
	| 'Hotelier'
	| 'Zaschita'
	| 'Mustang'

const johnWickWeaponPack: Record<JohnWickWeaponPackList, MaskData<JohnWickWeaponPackList, DlcCollectionList>> = {
	'Daisy': {
		name: 'Daisy',
		image: 'pim_dog',
		description: [
			'They might have not known what they did and to who, but that doesn\'t matter. They got what they deserved and then some. John is back.'
		],
		collection: 'John Wick Weapon Pack',
		source: content['John Wick Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Hotelier': {
		name: 'Hotelier',
		image: 'pim_hotelier',
		description: [
			'The Continental only serves the people who can respect the rules of the assassins\' sanctuary. It\'s not a cult or a secret society, it\'s a necessity in a business where everybody is willing to kill for money and everybody in there is on someone\'s list of targets.'
		],
		collection: 'John Wick Weapon Pack',
		source: content['John Wick Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Zaschita': {
		name: 'Zaschita',
		image: 'pim_russian_ballistic',
		description: [
			'A good way to not get shot in the head is to wear a helmet, but when you want to protect just your face from bullets and identification this will do. Does it really look bulletproof? What are you? A coward? Grab your fear by the balls and headbutt it in the face with this mask on.'
		],
		collection: 'John Wick Weapon Pack',
		source: content['John Wick Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Mustang': {
		name: 'Mustang',
		image: 'pim_mustang',
		description: [
			'Do you think you\'re a car? Oh? But do you think you\'re a MUSCLE car? No? Heisting isn\'t about looking fast and sleek, it\'s about looking furious and dangerous. Vroom, vroom motherfuckers!'
		],
		collection: 'John Wick Weapon Pack',
		source: content['John Wick Weapon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default johnWickWeaponPack