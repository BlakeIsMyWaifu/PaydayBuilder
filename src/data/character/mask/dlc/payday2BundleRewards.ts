import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type Payday2BundleRewardsList =
	| 'Arch Nemesis'
	| 'The Nun'
	| 'Robo-Arnold'

const payday2BundleRewards: Record<Payday2BundleRewardsList, MaskData<Payday2BundleRewardsList, DlcCollectionList>> = {
	'Arch Nemesis': {
		name: 'Arch Nemesis',
		image: 'arch_nemesis',
		description: [
			'Nemesis, as defined by the dictionary;',
			'1. Something that a person cannot conquer, achieve, etc.: “That Chinese buffet at lunch proved to be my arch-nemesis.”',
			'As defined by Hoxton: “That fuckin\' dozer. He\'s my arch-fucking-nemesis. \'Orrible cunt!”'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		source: content['GOTY Edition'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOTY EDITION ITEM!',
		cost: 'Free'
	},
	'The Nun': {
		name: 'The Nun',
		image: 'nun_town',
		description: [
			'A Catholic nun may not seem like the obvious choice for a terrifying mask, unless you know an actual Catholic nun. In which case, you\'ll know any notions of gentle, grandmotherly penguins are without merit. These bitter crones are the personification of evil, dishing out thrashings to any young buttocks within reach.'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		source: content['GOTY Edition'],
		rarity: 'Paid',
		unlock: 'THIS IS A HEIST BUNDLE ITEM!',
		cost: 'Free'
	},
	'Robo-Arnold': {
		name: 'Robo-Arnold',
		image: 'robo_arnold',
		description: [
			'Iconic, time-travelling cyborg star of the \'Exterminator\' movie series. In the first movie, he was sent to kill the mother of the leader of the future rebellion before she can steal the chip left by her son who was also her father… In the past. Noted for his deadpan delivery of the catchphrase “Await my return”.'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		source: content['GOTY Edition'],
		rarity: 'Paid',
		unlock: 'THIS IS A WEAPON BUNDLE ITEM!',
		cost: 'Free'
	}
}

export default payday2BundleRewards