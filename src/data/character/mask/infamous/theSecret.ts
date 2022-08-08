import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

export type TheSecretList =
	| 'Secret Chains Mask'
	| 'Secret Dallas Mask'
	| 'Secret Hoxton Mask'
	| 'Secret Wolf Mask'
	| 'Guardian of Kings'
	| 'Guardian of Watchers'
	| 'Egyptian Wolf Mask'
	| 'Mesoamerican Dallas Mask'
	| 'Watchers Hoxton Mask'
	| 'Summerian Chains Mask'

const theSecret: Record<TheSecretList, MaskData<TheSecretList, InfamousCollectionList>> = {
	'Secret Chains Mask': {
		name: 'Secret Chains Mask',
		image: 'sms_02',
		description: [
			'Chains never took the search for the Secret too seriously, often calling it a bunch of \'weird mumbo jumbo\'. As a practical man, with real-world sensibilities, he has however remained steadfast and loyal, trusting in his relationship with Bain.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Secret Dallas Mask': {
		name: 'Secret Dallas Mask',
		image: 'sms_01',
		description: [
			'Dallas sometimes felt Bain held out on him regarding certain details of the Secret. After the job in the First World Bank, Bain never did explain why the Mayan gold was so important. The Payday gang is a family, and trust isn\'t always bullet-proof, but Dallas has come to understand Bain\'s need for secrecy now, at the end. And his wisdom let them both get what they each wanted.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Secret Hoxton Mask': {
		name: 'Secret Hoxton Mask',
		image: 'sms_03',
		description: [
			'Hoxton left the Old Country to get his Payday in the new. When Bain first told him about the Secret, he fancied the idea of going after ancient items for their potential value, never really caring whether or not the legendary power Bain talked about was real or not.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Secret Wolf Mask': {
		name: 'Secret Wolf Mask',
		image: 'sms_04',
		description: [
			'Wolf has always been a violent and unpredictable ally, so initially Bain was unsure about how much about the hunt for the Secret he should tell him. Eventually, his worth became clear, but when Bain eventually revealed his quest, Wolf went crazy over it. Not only would he reap the golden benefits, he also loves a good conspiracy.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Guardian of Kings': {
		name: 'Guardian of Kings',
		image: 'scm_01',
		description: [
			'Bast, consort of Anubis, worshipped by the ancient Egyptians as a feline warrior, but in fact a much older force in the world. Blessed by her power, the Guardians of The Ark of the Watcher don her mask in tribute as they carry out their unending task. It is said that mortals who wear her visage are blessed with uncanny luck, and have the ability to trick death when it comes calling.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Guardian of Watchers': {
		name: 'Guardian of Watchers',
		image: 'scm_02',
		description: [
			'Anubis, Warrior Guardian of the underworld and consort of Bast, an ancient power born at the dawn of time itself. The Guardians of the Ark of the Watcher are strengthened by his wisdom and ferocity, as they hold closed the gates through which no unworthy soul may enter. Mortals strong enough to defeat this ancient warrior may don his mask, and perhaps catch a glimpse of the power it holds.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Egyptian Wolf Mask': {
		name: 'Egyptian Wolf Mask',
		image: 'sms_06',
		description: [
			'Viciousness, denial of death, and gold- all aspects of how the ancient Egyptians prospered and conquered, in defiance of all. So it is somehow fitting that Wolf should don a mask honoring that ancient culture.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Mesoamerican Dallas Mask': {
		name: 'Mesoamerican Dallas Mask',
		image: 'sms_05',
		description: [
			'As a leader, he has had to sacrifice much throughout his career. Jobs, team members, personal goals- whatever it takes to get the job done. As Mesoamerican cultures sacrificed to the gods to appease them, so has Dallas sacrificed to the gods of heisting- the contractors. '
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Watchers Hoxton Mask': {
		name: 'Watchers Hoxton Mask',
		image: 'sms_08',
		description: [
			'Where did they come from, the ones who gifted mankind with the greatest gift, the ones whose civilization may lie beneath the surface of earth and water? Whoever they were, most traces of their existence has been wiped away by the passage of time. Hoxton, the traveler in search of a new future, may not know the truth, but he bears their mask nonetheless in honor of the origin of the Secret.'
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	'Summerian Chains Mask': {
		name: 'Summerian Chains Mask',
		image: 'sms_07',
		description: [
			'The Sumerians began an age of wisdom, music, spiritual strength and had the imagination to dream up ideas of how the world began. On the surface, Chains may be a professional weapons-master, but inside, he is larger than life itself, and thus honors the culture which this mask represents. '
		],
		collection: 'The Secret',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	}
}

export default theSecret