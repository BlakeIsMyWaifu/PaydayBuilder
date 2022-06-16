import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

type AchievementList =
	| 'Hoxton Reborn'
	| 'Mega Sangres'
	| 'Rad Mutant'
	| 'Somen Mempo'
	| 'The Hard Hat'
	| 'Mega Rust'

const achievement: Record<AchievementList, MaskData<AchievementList, InfamousCollectionList>> = {
	'Hoxton Reborn': {
		name: 'Hoxton Reborn',
		image: 'old_hoxton',
		description: [
			'The Hoxton Reborn mask is a mask that Hoxton made while in prison. For him, it\'s a symbol of everything he experienced in the past years while the PAYDAY gang kept on going without him. No one knows how his experiences in prison has changed him, and he won\'t talk about it when asked.',
			'All we can assume is that he has been changed forever, and that he is reborn into... Something different.'
		],
		collection: 'Achievement',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Why Don\'t We Just Use a Spoon?\''
	},
	'Mega Sangres': {
		name: 'Mega Sangres',
		image: 'mega_max',
		description: [
			'As the drunken tale goes, the gods themselves came together in Xibala to forge this mask, which has been tempered in the blood of 1000 warriors and cleansed tequila made from the tears of 1000 virgins. Well, that\'s what Sangres says. And really, who\'s gonna argue with him?',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Achievement',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Only For Us Naughty Heisters\''
	},
	'Rad Mutant': {
		name: 'Rad Mutant',
		image: 'grendel',
		description: [
			'Genetic mutation is the key to our evolution. Assuming that our evolution is of the green, scaly, homicidal and irradiated kind.',
			'This mask is an achievement reward.It can\'t drop during a PAYDAY and can\'t be sold. It can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put these together will be lost.'
		],
		collection: 'Achievement',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'They Don\'t Pay Us Enough\''
	},
	'Somen Mempo': {
		name: 'Somen Mempo',
		image: 'samurai',
		description: [
			'In ancient Japan, samurai warriors wore somen masks to protect themselves in war and to incite fear in their enemies. Somen masks were tied to the large kabuto helmets, making the samurai look like demons from jigoku.',
			'No one knows what fierce and ruthless warrior wore this intimidating mask in the past. Now however, it is ready for battle once more.',
			'\'Boku no ikari wo osoreru\''
		],
		collection: 'Achievement',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'I Will Walk Faceless Among Men\''
	},
	'The Hard Hat': {
		name: 'The Hard Hat',
		image: 'hectors_helmet',
		description: [
			'When you rat out the Payday gang, you need to expect some form of retribution. And the gang aren\'t big on wagging fingers and a stern telling off. You can expect bullets, and plenty of them. This hard hat is cold school riot cop tech - heavy iron, fronted with reinforced glass. Good luck getting through it.'
		],
		collection: 'Achievement',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'I\'m An Avenger!\''
	},
	'Mega Rust': {
		name: 'Mega Rust',
		image: 'mrm',
		description: [
			'The Mega Rust mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Achievement',
		source: content['Crime Spree, Armor Skins & Screen Filters'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'A Vast Amount of Unlawful Transgressions\''
	}
}

export default achievement