import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { EventCollectionList } from '../event'

type HalloweenEventList =
	| 'Frank'
	| 'Pumpkin King'
	| 'Venomorph'
	| 'Witch'
	| 'Angry Baby'
	| 'Cry Baby'
	| 'Happy Baby'
	| 'Brazil Baby'
	| 'Invader'
	| 'Satan'
	| 'Risen Chains'
	| 'Risen Dallas'
	| 'Risen Houston'
	| 'Risen Wolf'
	| 'Envy'
	| 'Gluttony'
	| 'Greed'
	| 'Lust'
	| 'Pride'
	| 'Sloth'
	| 'Wrath'

const halloweenEvent: Record<HalloweenEventList, MaskData<HalloweenEventList, EventCollectionList>> = {
	'Frank': {
		name: 'Frank',
		image: 'frank',
		description: [
			'Frank is a monster, but he is - contrary to popular belief - a sensitive, emotional creature whose only aim is to share his life with another monster.',
			'However, he realized from the moment of his \'birth\' that even his own creator cannot stand being around him. Knowing this, Frank decided to become a bank robber instead. The end.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	'Pumpkin King': {
		name: 'Pumpkin King',
		image: 'pumpkin_king',
		description: [
			'Legend has it that a boy named Jack was getting chased by some villagers from whom he had stolen, when he suddenly bumped into the Devil.',
			'Jack was a clever little heister and managed to convince the devil that the loot he was carrying was worth to be shared. The Devil agreed and the two ran to the escape horses and got away.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	'Venomorph': {
		name: 'Venomorph',
		image: 'venomorph',
		description: [
			'When you see the Venomorph, you know it\'s game over, man. GAME OVER!',
			'In reality, you better go back and hide, because it will be dark soon, and these babies mostly only come at night... Mostly.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	'Witch': {
		name: 'Witch',
		image: 'witch',
		description: [
			'A witch is someone practicing black witchcraft, often with the aid of a devil or familiar.',
			'It can be anything from an ugly old hag to a charming, alluring woman.',
			'And then you have the broom, the hat and all that. Boo.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	'Angry Baby': {
		name: 'Angry Baby',
		image: 'baby_angry',
		description: [
			'GRRRRRRRR GRRR grrr grr grr GRRRR Wah, wah, WAAAAAAAAAAH! GRRR! Grr.',
			'GRRRR grr GRRRR rawr GRRRRRRRRRRRRR, wahh, WAH, WAH, WAH, GRRR.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	'Cry Baby': {
		name: 'Cry Baby',
		image: 'baby_cry',
		description: [
			'Waaaah, waah, wah, WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH!',
			'WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH, Waaaah, waah, wah. Wah. WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	'Happy Baby': {
		name: 'Happy Baby',
		image: 'baby_happy',
		description: [
			'Ffff, gaga, bo, gaga bo GAGA GAGA? GAGAGAGA? GAGA? Gagag GOGOGO GAGA? GAGA! GOGO! Bah. Gaga bah gogo go.',
			'GAGA? GAGA! GOGO! Bah. GAGAGA? GAGA GOGO GAGAGA? GAGA! Gagaga gogoga. Fff.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	'Brazil Baby': {
		name: 'Brazil Baby',
		image: 'brazil_baby',
		description: [
			'GAGA? GAGA! GOGO! Boo! GAGAGA? GAGA GOGO GAGAGA? GAGA? GAGA!  GAGAGA? GAGA GAGAGA?',
			'GAGAGA? GAGAGAGOGO? Boo! BOOO! Gagagaga boo gaga.'
		],
		collection: 'Halloween Event',
		source: content['The First Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	'Invader': {
		name: 'Invader',
		image: 'invader',
		description: [
			'I want to belie... ZAP! May the for... ZAP! Live long a.. ZAP! Why can\'t we all just get along? Because ZAP! That\'s why.'
		],
		collection: 'Halloween Event',
		source: content['The Third Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Satan': {
		name: 'Satan',
		image: 'satan',
		description: [
			'The second greatest trick the devil ever pulled was to be depicted as a big horned, red skinned demon. Now nobody knows who the person listening to music through their phone\'s speakers on the subway truly is.'
		],
		collection: 'Halloween Event',
		source: content['The Third Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Risen Chains': {
		name: 'Risen Chains',
		image: 'howl_chains_zombie',
		description: [
			'Go darker, hear the calling and become the daredevil of nightmares with an itchy trigger finger. This is a tribute to all the moments you have cheated death out on the field. You are a soldier from an army of darkness. Your veins are pumping of adrenaline and you have enough ammo packed to take on hell itself. Invincible in the darkness and ready to challenge death. All chains will break this time around and anyone in your path will meet their maker.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		source: content['The Fourth Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Risen Dallas': {
		name: 'Risen Dallas',
		image: 'hwl_dallas_zombie',
		description: [
			'There needs to be a harsh statement made about the rotting corruption penetrating every sinew of today\'s society. The self-deception, the scrambling for a false sense of a security. But you\'re not safe, not now and not ever. The American Dream is a brutally scarred nightmare disguised to lead poor souls astray. Take what you need; grab your future by the throat and force down your ambitions until it chokes on it. Mark where you tread with the bodies you leave in your wake.'
		],
		collection: 'Halloween Event',
		source: content['The Fourth Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Free'
	},
	'Risen Houston': {
		name: 'Risen Houston',
		image: 'hwl_hoxton_zombie',
		description: [
			'This distorted face is what ghost stories are truly made of. You linger in the shadows, torn and grim. Before you step out and scare the living daylights out of anyone that crosses your path. The knowledge of true fear is gained from looking upon this horror. That fear, that delicious, pure, crispy fear is what drives this monster. It triggers an unquenchable thirst for more. Don\'t look, but don\'t close your eyes.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		source: content['The Fourth Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Risen Wolf': {
		name: 'Risen Wolf',
		image: 'hwl_wolf_zombie',
		description: [
			'The sheer sight is enough to drive an opponent into madness. As if made of blood and old bones, it\'s like a second skin on your face. Always listen to the choir of voices in the back of your head. The ones that keep telling you about the destructive things you should be doing. Succumb to the temptation, relish in your own insanity. This time, do not hold back. Not for anything. This time, drive any foes into your own roaming and frothing madness. Become the demon you truly are, cause you\'ve been to hell and you liked it. It\'s pointless to hold back, the only soothing is to feel an enemy\'s blood gently trickle down your lips',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		source: content['The Fourth Annual Payday Halloween Special!'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Envy': {
		name: 'Envy',
		image: 'sds_03',
		description: [
			'It isn\'t fair, is it? There you stand, deserving of everything in life and the cosmos refuse to give unto you. The Others smile and dance, while you twist inward, wondering why no one has gifted you with whatever success everyone else has been given for free. Oh, you want it so, but how could you ever dare to take it?'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Gluttony': {
		name: 'Gluttony',
		image: 'sds_06',
		description: [
			'There it is, your unquenchable need to stuff your face and fill your belly with the ravaging furor of someone in a constant state of starvation. And when you stop, it\'s like a gaping hole opens up in the pit of your stomach,'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Greed': {
		name: 'Greed',
		image: 'sds_07',
		description: [
			'More is never enough. No amount of gold or treasure can satisfy you. It\'s all about obtaining the next pile of needless wealth to add to your bloated coffers, be they spiritual or physical. The plights of your fellows matter are inconsequential if you can gain from their suffering.'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Lust': {
		name: 'Lust',
		image: 'sds_01',
		description: [
			'You lock your eyes on your prize until they water. Unattended, your slacking jaw lets slip a drop of saliva onto the floor as the need for possession takes over. The person you pine for is an object, the object is a person. It matters not, to your blinded senses.'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Pride': {
		name: 'Pride',
		image: 'sds_05',
		description: [
			'You are unbreakable. The ship is filling with water, but you refuse to move. Such are your principles that you would rather go into the deep with a failing institution than admit your folly and admit yourself as fallible as your peers. Justice is what you deem it to be, and damned be those who would oppose your righteous wisdom.'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Sloth': {
		name: 'Sloth',
		image: 'sds_02',
		description: [
			'Why bother? Let the universe expand, die and grow dark. You have endless time to lift your fingers in protest at whatever mindless chore that demands you exert yourself in the slightest. Your life energy oozes from your soul, wasted and dissolved in the emptiness as you remain perpetually drained of ambition.'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	'Wrath': {
		name: 'Wrath',
		image: 'sds_04',
		description: [
			'There is a cold fire in your heart. All those who have wronged you will pay. If you so have to burn with them in the conflagration, you will extract payment for any perceived or actual slight against your person. There is no rationality to your rage- it must simply be indulged.'
		],
		collection: 'Halloween Event',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	}
}

export default halloweenEvent