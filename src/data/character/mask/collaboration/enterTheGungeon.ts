import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type CollaborationCollectionList } from '../collaboration'

export type EnterTheGungeonList =
	| 'The Bullet'
	| 'The Cultist'
	| 'The Marine'
	| 'The Robot'

const enterTheGungeon: Record<EnterTheGungeonList, MaskData<EnterTheGungeonList, CollaborationCollectionList>> = {
	'The Bullet': {
		name: 'The Bullet',
		image: 'eng_01',
		description: [
			'Equipped with his Blasphemy sword of infinite ammo the Bullet'
		],
		collection: 'Enter the Gungeon',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	'The Cultist': {
		name: 'The Cultist',
		image: 'eng_03',
		description: [
			'Always being referred to as \'Number 2\' the Cultist'
		],
		collection: 'Enter the Gungeon',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	'The Marine': {
		name: 'The Marine',
		image: 'eng_04',
		description: [
			'The Marine was a guard stationed at Primerdyne R&D when an experiment went awry and unleashing'
		],
		collection: 'Enter the Gungeon',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	'The Robot': {
		name: 'The Robot',
		image: 'eng_02',
		description: [
			'The Robot was an honored member of the killbot army. When commanded by his master, EMP-R0R to kill the leader of the human resistance, he broke protocol, failing to eliminate humanity.'
		],
		collection: 'Enter the Gungeon',
		source: source['Base Game'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	}
}

export default enterTheGungeon