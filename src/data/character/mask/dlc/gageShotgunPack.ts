import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageShotgunPackList =
	| 'Clint'
	| 'John'
	| 'Rutger'
	| 'Steven'

const gageShotgunPack: Record<GageShotgunPackList, MaskData<GageShotgunPackList, DlcCollectionList>> = {
	'Clint': {
		name: 'Clint',
		image: 'skullmonkey',
		description: [
			'Clint the black-capped squirrel monkey. Not really a monkey without a name. Just like the real Clint, this monkey doesn\'t fuck around. It minds its own business. Doesn\'t talk unless talked to, knowing that the less it says the stronger it becomes. When it actually tries to say something it ends up screeching because it\'s a FUCKING MONKEY.'
		],
		collection: 'Gage Shotgun Pack',
		source: content['Gage Shotgun Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'John': {
		name: 'John',
		image: 'mandril',
		description: [
			'John the mandrill monkey. Mandrill\'s are closely related to baboons and even more to the drill. Not the kind of drill you use in a bank robbery, but the monkey drill, silly you! John is a monkey known for his sardonic one-liners, include the catch phrase \'unidentified monkey screech\'.'
		],
		collection: 'Gage Shotgun Pack',
		source: content['Gage Shotgun Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Rutger': {
		name: 'Rutger',
		image: 'orangutang',
		description: [
			'Rutger the motherfucking orangutan. If you\'re strolling down the jungle and suddenly face an orangutan, you\'re in trouble. Statistics show that one orangutan is as dangerous as ten hobos with shotguns. You remember that movie about dinosaurs with the big dinosaur in the end saving the kids? Know who killed the dinosaur after the credits? The kids did, but you know who killed the kids? Rutger the motherfucking orangutan did.'
		],
		collection: 'Gage Shotgun Pack',
		source: content['Gage Shotgun Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Steven': {
		name: 'Steven',
		image: 'silverback',
		description: [
			'Steven the silverback gorilla. Not only is he fucking huge, he\'s strong as hell too. He can break your back by just looking at you. You\'ll be hospitalized for weeks. Not only that, but there\'ll be months of therapy as well. Do you know how hard it is learning to walk again? Want to know what else that is hard? Steven\'s muscles. 22 years ago he worked as a chef on a military ship. Killed everyone in 103 minutes.'
		],
		collection: 'Gage Shotgun Pack',
		source: content['Gage Shotgun Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default gageShotgunPack