import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageWeaponPack1List =
	| 'Arnold'
	| 'Chuck'
	| 'Dolph'
	| 'Jean-Claude'

const gageWeaponPack1: Record<GageWeaponPack1List, MaskData<GageWeaponPack1List, DlcCollectionList>> = {
	'Arnold': {
		name: 'Arnold',
		image: 'pitbull',
		description: [
			'Arnold the Bulldog has always been a doge of great ambition.',
			'He wanted to build much body - and he did. He became the biggest doge in his little mountain town and received such prize.',
			'He then moved States, got into office, starred in a couple of weird doge movies called \'The Dogenator\' and \'The Dogenator II - such judgement\'.'
		],
		collection: 'Gage Weapon Pack #01',
		source: content['Gage Weapon Pack #01'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	'Chuck': {
		name: 'Chuck',
		image: 'eagle',
		description: [
			'Chuck the Eagle represents everything that is righteous, good and true.',
			'A famous Martial Artist found this huge eagle while he was doing karate in the mountains of Alaska.',
			'They had a fight for several hours but eventually the Martial Artist won. He took the head, made it into a mask and named it after himself.'
		],
		collection: 'Gage Weapon Pack #01',
		source: content['Gage Weapon Pack #01'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	'Dolph': {
		name: 'Dolph',
		image: 'goat',
		description: [
			'Dolph the Goat represents natural strength and stone.',
			'It was found by a group of adventurers in a mountain cave in the most northern parts of Sweden.',
			'Legend has it that the god of thunder, Thor, had a chariot that was pulled by two goats. This mask probably has nothing to do with that legend though. That would be crazy.'
		],
		collection: 'Gage Weapon Pack #01',
		source: content['Gage Weapon Pack #01'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	'Jean-Claude': {
		name: 'Jean-Claude',
		image: 'panda',
		description: [
			'Jean-Claude the Panda used to be really cool and star in all sorts of crazy stuff.',
			'Sadly, he later became a drug addict and stopped being cool. Because of training however, he managed to get back on track.',
			'Most recently, you could see him do this weird things with two trucks. That shit was fucked up. You should check it out if you haven\'t.'
		],
		collection: 'Gage Weapon Pack #01',
		source: content['Gage Weapon Pack #01'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	}
}

export default gageWeaponPack1