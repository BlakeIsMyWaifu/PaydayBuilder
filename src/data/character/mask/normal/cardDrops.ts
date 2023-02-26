import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type NormalCollectionList } from '../normal'

export type CardDropsList =
	| 'Alienware'
	| 'Baby Rhino'
	| 'The Big Lips'
	| 'Blackhearted'
	| 'The Brainiac'
	| 'The Bullet'
	| 'Calaca'
	| 'The Cannula'
	| 'The Crybaby'
	| 'The Dripper'
	| 'Doctor Crime'
	| 'The Gagball'
	| 'Greek Tragedy'
	| 'Hockey Mask'
	| 'The Hog'
	| 'The Horned Beast'
	| 'The Jaw'
	| 'Kawaii'
	| 'Kenneth'
	| 'Mrs. Mannequin'
	| 'Mr. Mannequin'
	| 'Mr. Sackcloth'
	| 'Mr. Smooth'
	| 'Monkey Business'
	| 'The Mummy'
	| 'Oni'
	| 'The Outlander'
	| 'The Perfect Stranger'
	| 'The Pout'
	| 'The Rage'
	| 'The Shogun'
	| 'The Shrunken Head'
	| 'The Starved'
	| 'The Troll'
	| 'The Undead'
	| 'The Vampire'
	| 'The Zipper'
	| 'The Zombie'

const cardDrops: Record<CardDropsList, MaskData<CardDropsList, NormalCollectionList>> = {
	'Alienware': {
		name: 'Alienware',
		image: 'alienware',
		description: [
			'Based on the visions of a madman who thought he saw an extraterrestrial being.',
			'It is strange though, as the powerful materials is not from anywhere on Earth.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Baby Rhino': {
		name: 'Baby Rhino',
		image: 'babyrhino',
		description: [
			'Who would not want to wear the head of a baby rhino. Is it not cute? Putting it on makes you feel a little stupid, maybe because how it looks.',
			'While wearing it, you are worried that it is a bit hard seeing through the mask. You will do fine as long as you do not wander off with your pig-headed friends.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Big Lips': {
		name: 'The Big Lips',
		image: 'biglips',
		description: [
			'Throw someone a lip by wearing this mask.',
			'The thing that gets people is the two fleshy folds that surround the mouth of this mask, the biggest lips you ever saw.',
			'Open your mouth and say \'aaah\', directed the bank robber.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Blackhearted': {
		name: 'Blackhearted',
		image: 'mr_sinister',
		description: [
			'Evil and treacherous in a haunting way, this mask is said to change the wearer in mysterious ways.',
			'Worn long enough, it is said it turns the wearers heart into a black one, filled with lust for black deeds.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$8,250'
	},
	'The Brainiac': {
		name: 'The Brainiac',
		image: 'brainiack',
		description: [
			'This is the mask of someone who has a lot on his mind.',
			'Putting on this mask sparks an excessive, almost explosive desire to learn more about crimes and how to commit them.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$9,000'
	},
	'The Bullet': {
		name: 'The Bullet',
		image: 'bullet',
		description: [
			'Worried about getting shot in the face with a high powered firearm?',
			'Scared that you will get stomped by a bulldozer, cloaker and a shield at the same time?',
			'Wearing this mask will not help you, but you will get downed in style. The Bullet - out in Black Markets near you, right now!'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Calaca': {
		name: 'Calaca',
		image: 'day_of_the_dead',
		description: [
			'A skeleton mask connected to the Mexican Day of the Dead festival.',
			'Origins have been traced back to Aztec imagery, but no one is really sure.',
			'Wearing the Calaca is all about finding the joy in death happening all around you. The death of others should be a joyous occasion!'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Cannula': {
		name: 'The Cannula',
		image: 'outlandish_a',
		description: [
			'This mask is made of strange materials, holding it feels awkward. Wearing it feels even stranger.',
			'Putting on the mask, you feel like an outsider, a foreigner, someone who constantly changes locations, staying away, not wanting to be recognized by anyone.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,000'
	},
	'The Crybaby': {
		name: 'The Crybaby',
		image: 'clowncry',
		description: [
			'Is there anything sadder than a crying clown?',
			'Probably crying civilians, being shouted to the ground by a criminal wearing a horrific mask.',
			'Or maybe a bank manager with an empty vault.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'The Dripper': {
		name: 'The Dripper',
		image: 'dripper',
		description: [
			'The Dripper was made by atomization of a larger mass of liquid, somehow made into a hard material while retaining a smooth surface.',
			'Everyone who looks at it sees different things.',
			'What do you see?'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$11,000'
	},
	'Doctor Crime': {
		name: 'Doctor Crime',
		image: 'irondoom',
		description: [
			'Doctor Mayhem is an American fictional character, a supervillain who appears in comic books by OVERKILL Comics.',
			'The character was created by writer-editor David Goldfarb and designed by artist Max Elmberg Sjöholm.',
			'He made his first appearance in \'The Amazing Career Criminals: The PAYDAY gang meets Doctor Mayhem!\''
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Gagball': {
		name: 'The Gagball',
		image: 'gagball',
		description: [
			'Take a walk on the submissive side with a gagball stuck to your face.',
			'People wear these for a variety of reasons, one being roleplays involving bondage. This isn\'t necessarily the case though, as gagballs apparently can be used in bank robberies too.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'Greek Tragedy': {
		name: 'Greek Tragedy',
		image: 'greek_tragedy',
		description: [
			'A mask that symbolizes all the parts in a greek tragedy.',
			'In old Greece, masks were used to worship the gods in ceremonial rites and celebrations.',
			'This particular mask summarizes every heist in existence; the anger of someone triggering the alarm, the joy of opening the vault and the tragedy of being caught.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$9,750'
	},
	'Hockey Mask': {
		name: 'Hockey Mask',
		image: 'hockey',
		description: [
			'A hockey mask is a mask worn by hockey goaltenders to protect their heads from injury.',
			'It is also the iconic robber mask, hand-crafted using only high-quality materials. Instead of protecting you from pucks, it protects you from being recognized while going about, doing your thing.',
			'You know, the thing you do so well. Stealing.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$8,250'
	},
	'The Hog': {
		name: 'The Hog',
		image: 'hog',
		description: [
			'You have a new message! *BEEP*',
			'Salutations, this is \'Almir\' at OVERKILL. The Mask that you ordered should be delivered by now...',
			'A list of instructions is included...',
			'Make sure that you read them carefully!',
			'Do you like hurting other people? Then this mask is for you.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Horned Beast': {
		name: 'The Horned Beast',
		image: 'demon',
		description: [
			'A beast that came from the abyss.',
			'It has a lion\'s body, bear feet and a leopard\'s mouth.',
			'Not much else is know of this beast, nor who designed the mask.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$13,500'
	},
	'The Jaw': {
		name: 'The Jaw',
		image: 'jaw',
		description: [
			'Protect your glass chin with a metal jaw.',
			'The only thing you will be chewing from now on with your jaw is law enforcers, right?'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'Kawaii': {
		name: 'Kawaii',
		image: 'kawaii',
		description: [
			'Lovable, cute, adorable, cool and hip, charming, non-threatening, innocent, happy-go-lucky.',
			'These are words not commonly used in criminology.',
			'Because of you, they now are.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Kenneth': {
		name: 'Kenneth',
		image: 'demonictender',
		description: [
			'A horrifying mask shaped like the head of a demon.',
			'Not much is known about it other than the name - Kenneth.',
			'Now, this vengeful spirit has returned to earth to haunt mankind once more.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Mrs. Mannequin': {
		name: 'Mrs. Mannequin',
		image: 'rubber_female',
		description: [
			'The Female Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, window dressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Mr. Mannequin': {
		name: 'Mr. Mannequin',
		image: 'rubber_male',
		description: [
			'The Male Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, window dressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Mr. Sackcloth': {
		name: 'Mr. Sackcloth',
		image: 'scarecrow',
		description: [
			'Discourage crows, sparrows and law enforcers from entering your field of terror.',
			'The legend goes that in distant lands, there lived a god who knew everything yet could not walk. The greed of man found the god and beheaded it, thinking they could gain its wisdom.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$9,750'
	},
	'Mr. Smooth': {
		name: 'Mr. Smooth',
		image: 'tounge',
		description: [
			'This mask somehow simultaneously conveys and expresses opposing or contradictory feelings, beliefs, and motivations.',
			'Legends says that four creatures merged together, forming a greater entity with the face of this mask.',
			'To summarize, it is a scary fucking mask.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,000'
	},
	'Monkey Business': {
		name: 'Monkey Business',
		image: 'monkeybiss',
		description: [
			'Worn by someone who does not take life that seriously.',
			'Because it is a mask of a monkey.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$8,250'
	},
	'The Mummy': {
		name: 'The Mummy',
		image: 'mummy',
		description: [
			'The face of a mummy that has had its skin and organs preserved. Either intentional or incidental exposure to extreme cold (ice mummies!), low humidity, lack of air or chemicals might have caused this.',
			'Who knows what part of the world it is from? Having been preserved for the longest time, its ready to be exposed to the world again.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'Oni': {
		name: 'Oni',
		image: 'oni',
		description: [
			'The Oni is a Japanese devil.',
			'They are hideous, gigantic ogre-like creatures that have sharp claws and two horns growing from their heads.',
			'Their skin may have any number of colors, though red and blue are the most common.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'The Outlander': {
		name: 'The Outlander',
		image: 'outlandish_b',
		description: [
			'Have you ever had that feeling when you have no mouth but feel the urge to scream?',
			'That is how you are going to feel if you are a civilian looking at a criminal wearing this mask, pointing a gun at you, shouting you to the floor.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Perfect Stranger': {
		name: 'The Perfect Stranger',
		image: 'outlandish_c',
		description: [
			'The mask of a stranger in a strange land.',
			'Masks like these were used in a lost civilization, in war, on soldiers; ceremonially, for burial rites and for shamanistic ceremonies to drive away evil spirits.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'The Pout': {
		name: 'The Pout',
		image: 'stonekisses',
		description: [
			'The pout is a facial expression that humans can make.',
			'It is a protrusion of the lips, especially as an expression of sullen discontent.',
			'Who would not be discontent, having had their horns sawed off like that.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,500'
	},
	'The Rage': {
		name: 'The Rage',
		image: 'buha',
		description: [
			'Probably one of the angriest looking clown masks you have ever seen.',
			'It almost puts Wolf\'s mask to shame.',
			'Almost.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$8,250'
	},
	'The Shogun': {
		name: 'The Shogun',
		image: 'shogun',
		description: [
			'Don the mask and feel like a Japanese general from a distant past.',
			'It is said that this mask was the mask of a mad and desperate warrior, who rose above the ranks and became a great general, winning many battles.',
			'Common sense will not accomplish great things. You must become mad and desperate to do so.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$9,000'
	},
	'The Shrunken Head': {
		name: 'The Shrunken Head',
		image: 'shrunken',
		description: [
			'Ritually prepared, the cranium is removed from the head, eyes and mouth sewn shut. Boiled in hot water, dried with hot rocks and sand and molded to keep the features of a human face.',
			'Taken by ship to the Americas by Westerns long ago, it now somehow has ended up in your possession.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Starved': {
		name: 'The Starved',
		image: 'clown_56',
		description: [
			'This mask has a hideous appearance, a bony facial structure and dehydrated skin.',
			'It is the kind of mask gives you nightmares.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Troll': {
		name: 'The Troll',
		image: 'troll',
		description: [
			'Now here is a troll that is tired of hiding under the bridge.',
			'Why not see the world, pillage a village, take the local inhabitants gold treasures and flee from the the angry mobs instead?'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	},
	'The Undead': {
		name: 'The Undead',
		image: 'dawn_of_the_dead',
		description: [
			'An undead is a being that is dead yet somehow behaves like it is still alive.',
			'Created in mysterious ways, this might as well be a zombie as it could be a Vampire.',
			'If you are going to rob a bank, why not scare the living hell out of people while doing so?'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,000'
	},
	'The Vampire': {
		name: 'The Vampire',
		image: 'vampire',
		description: [
			'The Vampire is a mythological undead creature, said to feed on the blood of the living.',
			'Vampires can appear as normal humans.',
			'When attacked they will reveal their vampire visage where their face changes and they grow fangs and pointed teeth.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,000'
	},
	'The Zipper': {
		name: 'The Zipper',
		image: 'zipper',
		description: [
			'The zipper mask consists of two parallel tracks of teeth that can be interlocked or separated by the pulling of a slide between them.',
			'Separate the zipper when you need to communicate.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$8,250'
	},
	'The Zombie': {
		name: 'The Zombie',
		image: 'zombie',
		description: [
			'A zombie is an animated corpse that somehow has been brought to life again.',
			'Brains?'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: '$7,250'
	}
}

export default cardDrops