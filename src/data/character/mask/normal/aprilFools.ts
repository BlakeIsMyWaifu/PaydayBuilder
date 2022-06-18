import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { NormalCollectionList } from '../normal'

export type AprilFoolsList =
	| 'Black Beanie'
	| 'Green Beanie'
	| 'Navy Beanie'
	| 'Red Beanie'
	| 'Chains, The Weapons Expert'
	| 'Dallas, The Chief'
	| 'Hoxton, The Infiltrator'
	| 'Wolf, The Maniac'

const aprilFools: Record<AprilFoolsList, MaskData<AprilFoolsList, NormalCollectionList>> = {
	'Black Beanie': {
		name: 'Black Beanie',
		image: 'bny_03',
		description: [
			'Most robbers choose this snug, concealing headwear to help them blend in with the night. Unfortunately it won\'t do you much good to conceal yourself carrying all that equipment.'
		],
		collection: 'April Fools',
		source: content['April Fool'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Green Beanie': {
		name: 'Green Beanie',
		image: 'bny_02',
		description: [
			'A murky green that adds a touch of subtle mystery to your profile. The FBI will appreciate your fondness for their own green uniformed team. Not that it won\'t stop them firing on you openly anyway!'
		],
		collection: 'April Fools',
		source: content['April Fool'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Navy Beanie': {
		name: 'Navy Beanie',
		image: 'bny_01',
		description: [
			'This fetching number will make you the talk of the town. You\'ll guaranteed'
		],
		collection: 'April Fools',
		source: content['April Fool'],
		rarity: 'Free',
		unlock: '(sic) to hear things like: \'SEND IN THE TAZERS!\', \'THIS IS THE POLICE, COME OUT WITH YOUR HANDS UP!\', or \'WHO ARE THESE GUYS, EX-MILITARY?!\'',
		cost: 'Free'
	},
	'Red Beanie': {
		name: 'Red Beanie',
		image: 'bny_04',
		description: [
			'This supposedly \'three million dollar hat\' is either soaked in the blood of your enemies, or was just made with some red woolen material. Just wash it after each heist!'
		],
		collection: 'April Fools',
		source: content['April Fool'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Chains, The Weapons Expert': {
		name: 'Chains, The Weapons Expert',
		image: 'toon_03',
		description: [
			'When there\'s only one copy of something left in the world, it becomes priceless. Know what you can do, and what others can do better. Get the job done. Don\'t get carried away by jealousy: that\'s fear talking. Fear brings you down. It doesn\'t come from love. When you really love someone, you trust them. Trust them enough to not get mean over priceless things.'
		],
		collection: 'April Fools',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Dallas, The Chief': {
		name: 'Dallas, The Chief',
		image: 'toon_01',
		description: [
			'Some people expect a free ride through life, cruising on good looks and luck. The world doesn\'t work that way, even if it sometimes looks like it. Talent is just the start; it takes education, dedication, determination. As a leader, you gotta make up your own mind. Respect your decisions, and others will too.'
		],
		collection: 'April Fools',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Hoxton, The Infiltrator': {
		name: 'Hoxton, The Infiltrator',
		image: 'toon_04',
		description: [
			'The friends you have right now, may not be all the friends you\'ll ever need. Don\'t miss out on a future gain by keeping friends away. It\'s easy to get lost in the desert. One wrong turn is all it takes. And when you do, those new friends just might be your ticket to an oasis.'
		],
		collection: 'April Fools',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Wolf, The Maniac': {
		name: 'Wolf, The Maniac',
		image: 'toon_02',
		description: [
			'Knowing when not to quit is harder than knowing when to throw in the towel. Don\'t get sidetracked by vanity or foolish pride. Sometimes, you get so wrapped up in a problem that you don\'t see what the problem really is. It gets everyone in a lot of trouble. Bad trouble. So do what\'s right, and you can\'t go wrong.'
		],
		collection: 'April Fools',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	}
}

export default aprilFools