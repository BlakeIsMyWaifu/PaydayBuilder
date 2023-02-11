import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type ACriminalCarolList =
	| 'Green Elf'
	| 'Purple Elf'
	| 'Red Elf'
	| 'Yellow Elf'

const aCriminalCarol: Record<ACriminalCarolList, MaskData<ACriminalCarolList, EventCollectionList>> = {
	'Green Elf': {
		name: 'Green Elf',
		image: 'elfhat', // ! wrong size
		description: [
			'A sociopath with a degree in Chemistry, Green Elf is the North Pole\'s resident expert on poisons and neurotoxins'
		],
		collection: 'A Criminal Carol',
		source: content['A Criminal Carol'],
		rarity: 'Event',
		unlock: 'THIS IS A CRIMINAL CAROL 2022 ITEM!',
		cost: 'Unlocked through Side Job'
	},
	'Purple Elf': {
		name: 'Purple Elf',
		image: 'elfhat_violet', // ! wrong size
		description: [
			'Purple Elf is actually a really chill guy. Sure, he\'s a necromancer who may or may engage in human sacrifice, but beyond that he\'s super nice.'
		],
		collection: 'A Criminal Carol',
		source: content['A Criminal Carol'],
		rarity: 'Event',
		unlock: 'THIS IS A CRIMINAL CAROL 2022 ITEM!',
		cost: 'Unlocked through Side Job'
	},
	'Red Elf': {
		name: 'Red Elf',
		image: 'elfhat_red', // ! wrong size
		description: [
			'As a soldier in Santa\'s Yuletide Militia, Red Elf likes to bathe in the blood of his enemies. Wouldn\'t you?'
		],
		collection: 'A Criminal Carol',
		source: content['A Criminal Carol'],
		rarity: 'Event',
		unlock: 'THIS IS A CRIMINAL CAROL 2022 ITEM!',
		cost: 'Unlocked through Side Job'
	},
	'Yellow Elf': {
		name: 'Yellow Elf',
		image: 'elfhat_yellow', // ! wrong size
		description: [
			'Behind his sunny disposition, Yellow Elf is a raging pyromaniac who will not rest until he\'s burned the Naughty from this world.'
		],
		collection: 'A Criminal Carol',
		source: content['A Criminal Carol'],
		rarity: 'Event',
		unlock: 'THIS IS A CRIMINAL CAROL 2022 ITEM!',
		cost: 'Unlocked through Side Job'
	}
}

export default aCriminalCarol