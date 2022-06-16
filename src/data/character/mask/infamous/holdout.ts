import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

type HoldoutList =
	| 'Classy Monocle'
	| 'Fancy Top Hat'
	| 'Spirit Fox'
	| 'The Classically Fancy Super Villain'
	| 'The Super Villain Moustache'
	| 'Arcade Simian'
	| 'Black Bird'
	| 'Chibi Kitteh'
	| 'Jamaican Nightmare'
	| 'Poly Goat'
	| 'Mega Optimist Prime'
	| 'Mega Pirate'
	| 'Mega Vlad Armor'
	| 'Mega War'
	| 'Mega Anubis'
	| 'Mega Biker'
	| 'Mega Krampus'
	| 'Mega Robber Fly'
	| 'Mega Smiley'
	| 'Mega Tiara'

const holdout: Record<HoldoutList, MaskData<HoldoutList, InfamousCollectionList>> = {
	'Classy Monocle': {
		name: 'Classy Monocle',
		image: 'skm_03',
		description: [
			'If only this magnificent seeing glass contained a monolens, but alas it will only help you look classically stylish while typing the correct key combo on a vault.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Fancy Top Hat': {
		name: 'Fancy Top Hat',
		image: 'skm_01',
		description: [
			'There is something for the distinguished heister in everyone. This vintage hat, made by famous hatters in New York, is sure to distract the gaze of any law enforcement officer.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Spirit Fox': {
		name: 'Spirit Fox',
		image: 'smo_02',
		description: [
			'In the woods of Okinawa, legends say there lives a spirit of a fox with a head of flame. Being seen by this fox is said to be a blessing, but being seen by a heister wearing this mask, is probably not!'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'The Classically Fancy Super Villain': {
		name: 'The Classically Fancy Super Villain',
		image: 'skm_04',
		description: [
			'Ultimate old-school evil. Whether combined with a tail coat or body armor, this set will tell all that you mean business, in the most criminal sense.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'The Super Villain Moustache': {
		name: 'The Super Villain Moustache',
		image: 'skm_02',
		description: [
			'Wax on, wax off. Twirl it to your heart\'s content as you disappear into the foggy night with your bounty and laugh.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Arcade Simian': {
		name: 'Arcade Simian',
		image: 'smo_05',
		description: [
			'When wearing this mask, you can always pretend that the grenades you\'re lobbing at the cops are barrels. They won\'t appreciate it, but it might break up the monotony of blowing things up!'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Black Bird': {
		name: 'Black Bird',
		image: 'smo_06',
		description: [
			'Oh, how you can ponder, all rich and sweary, over a quaint and not-forgotten pile of cash. Quote, The Heister.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Chibi Kitteh': {
		name: 'Chibi Kitteh',
		image: 'smo_01',
		description: [
			'If a heister walks down the street wearing this mask, the world knows he\'s not afraid of anything, nine lives be damned!'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Jamaican Nightmare': {
		name: 'Jamaican Nightmare',
		image: 'smo_04',
		description: [
			'Some Voodoo priests claim to know the secret of eternal life. There\'s no guarantee that wearing this mask will grant it, but it\'ll likely scare the crap out of your enemies. And it might get you invited to a Jamaican barbecue.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Poly Goat': {
		name: 'Poly Goat',
		image: 'smo_03',
		description: [
			'Satanic worshippers from a video game in the 1990s called and want their low-poly goat back. Are you gonna give it, or just stick it to \'em?'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	'Mega Optimist Prime': {
		name: 'Mega Optimist Prime',
		image: 'skm_05',
		description: [
			'Robot Overlords from the Future rejoice! For thy leader has come, and is the bearer of many positively charged particles.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Pirate': {
		name: 'Mega Pirate',
		image: 'skm_07',
		description: [
			'Skulltooth the Terrible, ye most mystical of Pirate Kings, will shiver the timbers of any law enforcement officers present. Yarr!'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Vlad Armor': {
		name: 'Mega Vlad Armor',
		image: 'skm_08',
		description: [
			'Rumor has it that this helmet was found in an abandoned Russian nuclear facility and that its wearer will gain super powers over time. But it\'s just a rumor.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega War': {
		name: 'Mega War',
		image: 'skm_06',
		description: [
			'With this helmet, make the cops think they are being assaulted by the God of All 80s Metal Bands!'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Anubis': {
		name: 'Mega Anubis',
		image: 'smo_11',
		description: [
			'Bark like an Egyptian god and stand guard for eternity as you watch over and protect your piles of loot.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Biker': {
		name: 'Mega Biker',
		image: 'smo_07',
		description: [
			'Any child of the 1980s would kill for this mask. Show everyone who really rules the neon highways.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Krampus': {
		name: 'Mega Krampus',
		image: 'smo_08',
		description: [
			'Devils and demons alike will tremble in awe as they behold the glory of any heister that chooses to don this mask.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Robber Fly': {
		name: 'Mega Robber Fly',
		image: 'smo_12',
		description: [
			'Make both cops and civilians'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Smiley': {
		name: 'Mega Smiley',
		image: 'smo_09',
		description: [
			'See the torturously happy grin, the rotting golden teeth, and the deeply mesmerizing glare of this ultimate tribute to the Tragic Clown.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	'Mega Tiara': {
		name: 'Mega Tiara',
		image: 'smo_10',
		description: [
			'Prom queens ain\'t got nothin\' on the heister who wears this shiny piece of forehead decor. Rumor has it that the gemstones all came from a Perseid meteorite that fell to Earth in the 1800s.'
		],
		collection: 'Holdout',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	}
}

export default holdout