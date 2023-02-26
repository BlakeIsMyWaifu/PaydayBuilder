import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type InfamousCollectionList } from '../infamous'

export type InfamyRewardList =
	| 'Heat, The'
	| 'Plague Doctor, The'
	| 'Butcher, The'
	| 'Specialist, The'
	| 'Spectre, The'
	| 'Balaclava'
	| 'Lurker'
	| 'Android'
	| 'Being, The'
	| 'Venger'
	| 'Heister Sentry'
	| 'Kamul'
	| 'Demonshank'
	| 'Gangsta Pranksta'
	| 'Max, The'
	| 'Vanity Gold'
	| 'Masquerade, The'
	| 'Vile Carny'

const infamyReward: Record<InfamyRewardList, MaskData<InfamyRewardList, InfamousCollectionList>> = {
	'Heat, The': {
		name: 'Heat, The',
		image: 'aviator',
		description: [
			'Everyone loves a good pair of sunglasses.',
			'But only the cockiest, most wanted, cops be damned sons of bitches are crazy enough to rob a goddamn bank wearing \'em.',
			'That\'s you.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 1'
	},
	'Plague Doctor, The': {
		name: 'Plague Doctor, The',
		image: 'plague',
		description: [
			'A plague doctor mask for the Mastermind.',
			'In the word of the Bhagavad-Gita: \'Now I am become death, destroyer of worlds.\'',
			'Or at least, that was the art direction.'
		],
		collection: 'Infamy Reward',
		source: content['The Infamy Update'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 3'
	},
	'Butcher, The': {
		name: 'Butcher, The',
		image: 'welder',
		description: [
			'A truly legendary Enforcer mask.',
			'The story goes it was made for one of the premier hitters in the Pink Panther crew years back but he didn\'t have the guts to wear it. It\'d draw too much attention.',
			'Not your concern.'
		],
		collection: 'Infamy Reward',
		source: content['The Infamy Update'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 5'
	},
	'Specialist, The': {
		name: 'Specialist, The',
		image: 'smoker',
		description: [
			'Only a true Technician could come up with a mask like this.',
			'Featuring a state of the art air filtration system, the mask can double as a chemist\'s hood in those unlikely \'must cook meth\' scenarios.'
		],
		collection: 'Infamy Reward',
		source: content['The Infamy Update'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 7'
	},
	'Spectre, The': {
		name: 'Spectre, The',
		image: 'ghost',
		description: [
			'This Ghost mask look like it\'s from the future and it might as well be.',
			'Full head protection, made out of carbon fiber and genetically engineered spider-silk. People might even mistake you for a high-end Moto GP rider.',
			'Last mistake they\'ll make.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 9'
	},
	'Balaclava': {
		name: 'Balaclava',
		image: 'balaclava',
		description: [
			'The weapons may change, the ideologies may shift and the accents may swap, but the balaclava has been a mainstay for the armed robber and terrorist for decades. Covering all but your steely, flint-like eyes and your cruel, twisted mouth, it keeps you warm when it\'s chilly too.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 11'
	},
	'Lurker': {
		name: 'Lurker',
		image: 'infamy_lurker',
		description: [
			'Teeth are scary. Big teeth are scarier. And giant sharp fang-like teeth suddenly gnashing out where they lurk in the darkness are downright shit-yourself-terrifying. With all of that in mind, can you think of a better mask to keep the civilians in line?'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 13'
	},
	'Android': {
		name: 'Android',
		image: 'daft',
		description: [
			'For the truly detached and impassive, we provide the Android mask. Lightweight alloys, chromium finish and really cool LED lights means this mask is ready for the bank job or the dance floor. Alas, it does not make you fluent in six million languages.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 15'
	},
	'Being, The': {
		name: 'Being, The',
		image: 'punk',
		description: [
			'This mask is based on the experiments of the peculiar Dr Rudolf Mastaba. A modern Prometheus, he sought to return life to the dead with the application of Industrial Revolution technology. Rumour suggests that he was partly successful - the undead rose, but had an insatiable appetite for wheat, barley and maize.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 17'
	},
	'Venger': {
		name: 'Venger',
		image: 'pain',
		description: [
			'Based on the crazed leader of the League of Darkness. It\'s unclear if this was a breathing apparatus or a vocabulator. Some speculate that it was a delivery system, designed to provide Nemesis with the narcotics that gave him both his superhuman strength and psychotic rage.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 19'
	},
	'Heister Sentry': {
		name: 'Heister Sentry',
		image: 'ranger',
		description: [
			'This mask was originally designed to be part of a complete head-to-toe heisting outfit. However, field testing revealed that the gaudy spandex suit offered no protection against bullets, knives or grenades. The mask, however, was found to be lightweight, durable and stylish. It\'s heistin\' time!'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 21'
	},
	'Kamul': {
		name: 'Kamul',
		image: 'infamy_hood',
		description: [
			'There are things older and fouler than heisters in the dark places of the world. And one of them is Kamul. We do not know if he is the lingering spirit of a long dead man, or something that has crossed from the realm of shade. All we know is that few look into this face and live to tell of it.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 23'
	},
	'Demonshank': {
		name: 'Demonshank',
		image: 'destroyer',
		description: [
			'A warrior spirit doesn\'t appear naturally. It isn\'t something you are born with. Like steel, it is forged in fire. It is beaten in the furnace of battle - tempered, polished and sharpened. This mask celebrates the birth of this warrior spirit - the furnace-born steel given wings.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 25'
	},
	'Gangsta Pranksta': {
		name: 'Gangsta Pranksta',
		image: 'lastlaugh',
		description: [
			'Is there a madness behind the shell? Does it represent the wearer, or is it just the projection of the contempt heisters feel for the law?'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 72'
	},
	'Max, The': {
		name: 'Max, The',
		image: 'cyberpunk',
		description: [
			'Like impeccable clockwork, digital precision flows from the heister who dons this facial covering. No enemy can avoid being just a little bit freaked when you confront them.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 76'
	},
	'Vanity Gold': {
		name: 'Vanity Gold',
		image: 'goldenbrute',
		description: [
			'When you\'ve got the gold, there\'s always a question of what to do with it. Put it in a vault, change it into cash or use it to make yourself look rather bad-ass. There are, of course, lots of ways to do the latter. Someone decided that one of them was by forging this gleaming visage. Good choice? Your decision.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 88'
	},
	'Masquerade, The': {
		name: 'Masquerade, The',
		image: 'ingoldnito',
		description: [
			'Hokey religions and ancient weapons may not be a match for a good submachine gun, or a getaway van that never breaks down, but a mask like this, intricately crafted by an artisan using techniques handed down through generations, can certainly make you feel like a million bucks when you\'re putting down a Dozer. Also good for that strange masquerade ball that occasionally comes around.'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 2.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 94'
	},
	'Vile Carny': {
		name: 'Vile Carny',
		image: 'overkillpunk',
		description: [
			'All of us can go a little crazy from time to time. However, this mask is for when you go completely over the deep end. And to reach this level of heisting, you need to be out of your goddamn mind!'
		],
		collection: 'Infamy Reward',
		source: content['Infamy 3.0'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: ''
	}
}

export default infamyReward