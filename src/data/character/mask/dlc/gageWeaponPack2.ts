import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageWeaponPack2List =
	| 'Alpha Force'
	| 'Commander Crime'
	| 'The Gage Blade'
	| 'The Troubled War Veteran'

const gageWeaponPack2: Record<GageWeaponPack2List, MaskData<GageWeaponPack2List, DlcCollectionList>> = {
	'Alpha Force': {
		name: 'Alpha Force',
		image: 'gage_deltaforce',
		description: [
			'4th Domestic Operation Group-force Enforcers-Alpha (4th DOGE-A), popularly ridiculed as Alpha Force, is a U.S. Army component of the Joint Common Operations Command. They\'re reputation is pretty poor and have become a less and less respected force to deal with.',
			'One of the members probably dropped this helmet when he fled from you.'
		],
		collection: 'Gage Weapon Pack #02',
		source: content['Gage Weapon Pack #02'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	'Commander Crime': {
		name: 'Commander Crime',
		image: 'cloth_commander',
		description: [
			'Commander Crime is an American fictional character, a supervillain and the supreme leader of the criminal network C.R.I.M.E. who appears in comic books by OVERKILL Comics.',
			'The character was created by now world renowned writer-editor-artist and professional badminton player Max Elmberg Sjöholm.',
			'Commander Crime made his first appearance in The Amazing Career Criminals: The PAYDAY gang gets a C.R.I.M.E. offer they can\'t refuse!'
		],
		collection: 'Gage Weapon Pack #02',
		source: content['Gage Weapon Pack #02'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	'The Gage Blade': {
		name: 'The Gage Blade',
		image: 'gage_blade',
		description: [
			'The Gage Blade is one of Gage\'s own personal favorite ballistic face masks. It will protect your face from one or two 9mm bullets before your head explodes.',
			'Without this mask, Gage wouldn\'t be the wonderful human being he is today.'
		],
		collection: 'Gage Weapon Pack #02',
		source: content['Gage Weapon Pack #02'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	'The Troubled War Veteran': {
		name: 'The Troubled War Veteran',
		image: 'gage_rambo',
		description: [
			'The Troubled War Veteran is a mask that Gage has worked on for some time. Back in the Vietnam war Gage met this big-muscled guy who went nuts and started to use a bow instead of modern weapons.',
			'He died pretty early in the war, but for some strange reason Gage couldn\'t forget his face.'
		],
		collection: 'Gage Weapon Pack #02',
		source: content['Gage Weapon Pack #02'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	}
}

export default gageWeaponPack2