import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { NormalCollectionList } from '../normal'

export type HoxtonsHouseWarmingPartyList =
	| 'Al Capone'
	| 'Charles \'Lucky\' Luciano'
	| 'George \'Bugs\' Moran'
	| 'Stephanie \'Madame\' St. Clair'
	| 'Commando'
	| 'Dawn Patrol'
	| 'Martial Law'
	| 'Pickle Face'
	| 'The Awkward Seal'

const hoxtonsHouseWarmingParty: Record<HoxtonsHouseWarmingPartyList, MaskData<HoxtonsHouseWarmingPartyList, NormalCollectionList>> = {
	'Al Capone': {
		name: 'Al Capone',
		image: 'gti_al_capone',
		description: [
			'The original mobster that really made the criminal way of life something to strive for. A given member of the PAYDAY crew if he were alive today. But now you can at least cosplay him, making the police scared as they think they\'ve seen a ghost.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Mafia Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Charles \'Lucky\' Luciano': {
		name: 'Charles \'Lucky\' Luciano',
		image: 'gti_bugsy',
		description: [
			'Considered the \'father of modern organized crime\'. Not clear why he\'s nicknamed \'Lucky\', but he did managed to get arrested 25 times, but never spent one day in jail. And he survived a throat slashing as he refused to join another mob. Either way, he\'s a true inspiration.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Mafia Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'George \'Bugs\' Moran': {
		name: 'George \'Bugs\' Moran',
		image: 'gti_lucky_luciano',
		description: [
			'The rival of Al Capone. Two men battling it out as the prohibition era turned booze into gold for anyone who could get their hands on some bottles of whiskey. Capone even tried gunning him down in the infamous Saint Valentine\'s Day Massacre. But he failed.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Mafia Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Stephanie \'Madame\' St. Clair': {
		name: 'Stephanie \'Madame\' St. Clair',
		image: 'gti_madame_st_claire',
		description: [
			'This is one tough cookie. The criminal part of St. Clair was born as she went through hell one dark night. After that, she dove deep into the shady world of illegality. But she was also an advocate for civil rights and police corruption. Like a modern day, twisted version of Robin Hood one might say.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Mafia Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Commando': {
		name: 'Commando',
		image: 'nyck_beret',
		description: [
			'Chains had this beret custom made in preparation for a mercenary operation in West Africa. What he did while wearing it is something he won\'t talk about, though.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Chains Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Dawn Patrol': {
		name: 'Dawn Patrol',
		image: 'nyck_ace',
		description: [
			'Way back in the day, on a secret and highly dangerous mercenary mission in Southeast Asia, Chains acquired this old US Army helmet. No one knows who the previous owner was.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Chains Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Martial Law': {
		name: 'Martial Law',
		image: 'nyck_cap',
		description: [
			'This is an old souvenir that Chains keeps as a memory of two long, boring months spent in Central America doing VIP security after an armed coup. Effectively, it reminds him of the kind of military monotony that made him leave mercenary life behind.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Chains Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Pickle Face': {
		name: 'Pickle Face',
		image: 'nyck_pickle',
		description: [
			'Lean, mean, green killing machine. The perfect mask to wear when you\'re in a pickle and need to make like a banana and split. Be water, my friend.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content['Chains Mask Pack'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'The Awkward Seal': {
		name: 'The Awkward Seal',
		image: 'urf_seal',
		description: [
			'That moment when you\'re going to finish off a Dozer but when you pull the trigger you\'re out of ammo. Or that moment when you\'re throwing the last bag straight into the sea. Or that moment when other robbers compliment your mask but you didn\'t put any effort into it. Or that moment when someone is repairing the drill at the same time as you.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: content.Mutators,
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	}
}

export default hoxtonsHouseWarmingParty