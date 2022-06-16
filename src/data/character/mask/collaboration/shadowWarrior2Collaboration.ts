import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { CollaborationCollectionList } from '../collaboration'

type ShadowWarrior2CollaborationList =
	| 'Ameonna'
	| 'Co-Cop Ninja'
	| 'Hata Mari'
	| 'Thorntail'

const shadowWarrior2Collaboration: Record<ShadowWarrior2CollaborationList, MaskData<ShadowWarrior2CollaborationList, CollaborationCollectionList>> = {
	'Ameonna': {
		name: 'Ameonna',
		image: 'sha_01',
		description: [
			'Mighty horned demon. Vengeful, weeping destroyer. Do not arouse her anger.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		source: content['Shadow Warrior Collaboration'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	'Co-Cop Ninja': {
		name: 'Co-Cop Ninja',
		image: 'sha_02',
		description: [
			'Strike fast, strike hard, strike silently. You will leave even the cloakers sulking in shame.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		source: content['Shadow Warrior Collaboration'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	'Hata Mari': {
		name: 'Hata Mari',
		image: 'sha_04',
		description: [
			'A fast and agile killer, sending blades flying through the air. Always ready to strike. A popular killer with many fans.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		source: content['Shadow Warrior Collaboration'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	'Thorntail': {
		name: 'Thorntail',
		image: 'sha_03',
		description: [
			'Be an aggressive, merciless, swarming menace. As you roll into town, death follows in the form of fire.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		source: content['Shadow Warrior Collaboration'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	}
}

export default shadowWarrior2Collaboration