import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type TheCompletelyOverkillPackList =
	| 'Mega Chains'
	| 'Mega Cthulhu'
	| 'Mega Dallas'
	| 'Mega Death Wish'
	| 'Mega Doctor Crime'
	| 'Mega Gage Blade'
	| 'Mega Grin'
	| 'Mega Hoxton'
	| 'Mega Kawaii'
	| 'Mega Kevin'
	| 'Mega Mark'
	| 'Mega Plague Doctor'
	| 'Mega Watcher'
	| 'Mega Wolf'

const theCompletelyOverkillPack: Record<TheCompletelyOverkillPackList, MaskData<TheCompletelyOverkillPackList, DlcCollectionList>> = {
	'Mega Chains': {
		name: 'Mega Chains',
		image: 'chains_glow',
		description: [
			'The Mega Chains mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Cthulhu': {
		name: 'Mega Cthulhu',
		image: 'megacthulhu',
		description: [
			'Somewhere, deep in the oceanic darkness dwells our lord and savior, Cthulhu. Praise be to Him who spares us His giant wrath and blesses us with His mind controlling tenderness. Don\'t eat squids or eternal damnation is yours.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack II'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Dallas': {
		name: 'Mega Dallas',
		image: 'dallas_glow',
		description: [
			'The Mega Dallas mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Death Wish': {
		name: 'Mega Death Wish',
		image: 'cop_skull',
		description: [
			'We never get why hardcore heisters don\'t just call themselves Death Wishers. Maybe it\'s just too damn cool.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack II'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Doctor Crime': {
		name: 'Mega Doctor Crime',
		image: 'fab_mega_doctor',
		description: [
			'In issue #34 of The Mazing Career Criminals, we saw the assumed death of Doctor Crime, but fear not - the Doctor is back! With a new power armor and a fancy new mask, he\'s set to take out his vengeance against our unknowing heroes.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack III'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Gage Blade': {
		name: 'Mega Gage Blade',
		image: 'cop_mega_gage_blade',
		description: [
			'The original Gage Blade is one of Gage\'s own personal favorite ballistic face masks. With the Mega Gage Blade, he\'s decided to give his favorite ballistic mask an upgrade. Before it was only practical, now it\'s also stylish.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack III'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Grin': {
		name: 'Mega Grin',
		image: 'fab_mega_grin',
		description: [
			'The Grin was once the face representing a man\'s breakdown as he had to accept defeat. But now the times have changed, and the same man is back again, stronger than ever before. Rejuvenated and ready to take on the world with a determined fierceness and cunning, the mask still represents the face of a mad man, but a mad man that is winning.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack III'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Hoxton': {
		name: 'Mega Hoxton',
		image: 'hoxton_glow',
		description: [
			'The Mega Hoxton mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Kawaii': {
		name: 'Mega Kawaii',
		image: 'cop_kawaii',
		description: [
			'In the name of the kawaii, I will punish you! For love, for justice, FOR MERCURY BUBBLE BLAST!',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack II'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Kevin': {
		name: 'Mega Kevin',
		image: 'hunter',
		description: [
			'For Kevin it was never enough to rip out the spine and scream defiantly at the sky. He always proceeded to also fuck the skull.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack II'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Mark': {
		name: 'Mega Mark',
		image: 'fab_mega_mark',
		description: [
			'The mask is modeled after a legendary bear that was known to terrorize humans and other animals in an Eastern land far, far away. The story is wildly popular with the criminal underworld, and getting compared to to the fierce beast is considered a great honor, reserved only to the greatest and most ruthless criminals.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack III'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Plague Doctor': {
		name: 'Mega Plague Doctor',
		image: 'cop_plague_doctor',
		description: [
			'Three years of healing took its toll. He witnessed man\'s cruel ways, born out of desperation. He stopped seeing the plague as a disease and started spreading it as the cure.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack II'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Watcher': {
		name: 'Mega Watcher',
		image: 'fab_mega_alien',
		description: [
			'The Watchers are a species of extraterrestrials that act as spies on planet Earth. They communicate using their minds and use their large eyes to witness, gather and share information about humankind, preparing themselves for the coming invasion.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack III'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	'Mega Wolf': {
		name: 'Mega Wolf',
		image: 'wolf_glow',
		description: [
			'The Mega Wolf mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		source: content['The COMPLETELY OVERKILL Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	}
}

export default theCompletelyOverkillPack