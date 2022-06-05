import { PerkDeckList } from 'data/abilities/perks'
import content, { ContentData } from 'data/source/downloadableContent'
import source, { SourceData } from 'data/source/miscSources'

export type ThrowableList = keyof typeof throwables

export interface ThrowableData {
	name: string;
	description: string[];
	image: string;
	reputation: number;
	source: ContentData | SourceData;
	type: ['Projectile' | 'Grenade' | 'Consumable', string];
	perkDeck?: PerkDeckList;
	stats: Projectile | Grenade | Consumable;
}

interface Projectile {
	damage: number;
	capacity: number;
	speed: number;
	throwDelay: number;
	throwingRate: number;
	unequipDelay: number;
}

interface Grenade {
	damage: number;
	capacity: number;
	throwDelay: number;
	throwingRate: number;
	unequipDelay: number;
	explosionRadius: number;
	playerDamage?: number;
	duration?: number;
	additionalDamage?: {
		type: string;
		animationChance: number;
		interval: number;
		damage: number;
		duration: number;
	};
}

interface Consumable {
	capacity: number;
	cooldown: number;
}

const throwables: Record<string, ThrowableData> = {
	'Matryoshka Grenade': {
		name: 'Matryoshka Grenade',
		description: [
			'The Matryoshka Grenade is a throwable explosive device. The doll\'s outer layers hides its inner workings. Creates substantial damage at the same time as it pays tribute to the motherland.'
		],
		image: 'dada_com',
		reputation: 1,
		source: source.Community,
		type: ['Grenade', 'Fragmentation Grenade'],
		stats: {
			damage: 1600,
			capacity: 3,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 1.3,
			explosionRadius: 10
		}
	},
	'Incendiary Grenade': {
		name: 'Incendiary Grenade',
		description: [
			'The Incendiary Grenade is a nasty self igniting phosphorus container. It ignites after a few seconds, making it perfect for bouncing off walls towards your enemies. Upon ignition it causes serious damage - setting enemies ablaze.'
		],
		image: 'fir_com',
		reputation: 1,
		source: source.Community,
		type: ['Grenade', 'Incendiary'],
		stats: {
			damage: 30,
			capacity: 6,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 1.3,
			explosionRadius: 5,
			playerDamage: 20,
			duration: 15,
			additionalDamage: {
				type: 'Fire',
				animationChance: 25,
				interval: 0.5,
				damage: 250,
				duration: 1.5
			}
		}
	},
	'HEF Grenade': {
		name: 'HEF Grenade',
		description: [
			'This is an updated version of the classic hand grenade. Even though the original frag grenade is still in use, this new sleek design will provide that OVERKILL touch to each blast. Still as cheap and still as effective.'
		],
		image: 'frag_com',
		reputation: 1,
		source: source['Base Game'],
		type: ['Grenade', 'Fragmentation Grenade'],
		stats: {
			damage: 1600,
			capacity: 3,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 1.1,
			explosionRadius: 5
		}
	},
	'Ace of Spades': {
		name: 'Ace of Spades',
		description: [
			'Throwing cards are generally associated with magicians splitting watermelons across a stage, but add weight and razor edges and you have a silent killer. Have one of these steel aces in your sleeves and you will always be ready to deal yourself into the game, regardless of the circumstances.',
			'The Ace of Spades is a free throwable given to the community to celebrate two years of PAYDAY 2!'
		],
		image: 'wpn_prj_ace',
		reputation: 31,
		source: source.Community,
		type: ['Projectile', 'Projectile'],
		stats: {
			damage: 40,
			capacity: 21,
			speed: 15,
			throwingRate: 0.3,
			throwDelay: 0.15,
			unequipDelay: 1.1
		}
	},
	'Concussion Grenade': {
		name: 'Concussion Grenade',
		description: [
			'This stunning little beauty will take everyone\'s breath away, giving you those couple of extra seconds you'
		],
		image: 'concussion',
		reputation: 1,
		source: source['Base Game'],
		type: ['Grenade', 'Stun Grenade'],
		stats: {
			damage: 0, // + stun
			capacity: 6,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 0.9,
			explosionRadius: 15
		}
	},
	'Frag Grenade': {
		name: 'Frag Grenade',
		description: [
			'The frag grenade is a concept that has changed little from its inception. It is a thrown casing that explodes, sending shards and splinters away with such force they can slice through flesh, bone and light armor. Cheap and effective.'
		],
		image: 'frag',
		reputation: 0,
		source: content['Gage Weapon Pack #01'],
		type: ['Grenade', 'Fragmentation Grenade'],
		stats: {
			damage: 1600,
			capacity: 3,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 1.1,
			explosionRadius: 5
		}
	},
	'Molotove Cocktail': {
		name: 'Molotove Cocktail',
		description: [
			'The Molotov cocktail is perhaps the simplest weapon that can call itself a grenade. Nothing more than a breakable bottle of flammable liquid with a \'fuse\' replaced by a burning rag. It is cheap, simple and highly effective.'
		],
		image: 'molotov',
		reputation: 0,
		source: content['The Butcher\'s BBQ Pack'],
		type: ['Grenade', 'Improvised Incendiary Bomb'],
		stats: {
			damage: 30,
			capacity: 3,
			throwingRate: 15,
			throwDelay: 0.1,
			unequipDelay: 1.3,
			explosionRadius: 2.5,
			playerDamage: 20,
			duration: 15,
			additionalDamage: {
				type: 'Fire',
				animationChance: 25,
				interval: 0.5,
				damage: 150,
				duration: 5
			}
		}
	},
	'Dynamite': {
		name: 'Dynamite',
		description: [
			'Swedish engineer, Alfred Nobel, discovered dynamite and its effectiveness in blasting rock. But it was drunk prospector, Ol\' Kenneth, who discovered its effectiveness in blasting people.'
		],
		image: 'dynamite',
		reputation: 0,
		source: content['The Butcher\'s Western Pack'],
		type: ['Grenade', 'Explosive Material'],
		stats: {
			damage: 1600,
			capacity: 3,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 1.3,
			explosionRadius: 5
		}
	},
	'Shuriken': {
		name: 'Shuriken',
		description: [
			'Like a sword hidden in the user\'s hand the shuriken is a deadly weapon and perfectly silent. First made of nails and needles, the throwing star has had a long history filled with blood and battle. These modern stars of stainless steel will pose a lethal threat to anyone in front of you, and as long as you can find them there will be no stopping you.',
			'The Shurikens have been coated in poison which deals damage over time and has a chance to interrupt enemies.'
		],
		image: 'wpn_prj_four',
		reputation: 25,
		source: content['Gage Ninja Pack'],
		type: ['Projectile', 'Projectile'],
		stats: {
			damage: 100,
			capacity: 10,
			speed: 15,
			throwingRate: 0.5,
			throwDelay: 0.15,
			unequipDelay: 1.1,
			additionalDamage: {
				type: 'Poison',
				animationChance: 100,
				interval: 0.5,
				damage: 250,
				duration: 5.5
			}
		}
	},
	'Javelin': {
		name: 'Javelin',
		description: [
			'With its origins lost in murky pre-history, the javelin is a simple weapon. After all, it\'s a thrown stick with a pointy end that ruins someone\'s day. Despite this simplicity, it still requires skill and strength to use.'
		],
		image: 'wpn_prj_jav',
		reputation: 41,
		source: content['Gage Chivalry Pack'],
		type: ['Projectile', 'Projectile'],
		stats: {
			damage: 3250,
			capacity: 3,
			speed: 15,
			throwingRate: 1,
			throwDelay: 0.4,
			unequipDelay: 1.1
		}
	},
	'Throwing Knife': {
		name: 'Throwing Knife',
		description: [
			'A solid backup plan and a reliable tactic for a precise and silent kill. The Throwing Knife has been present in martial history for as long as people grew tired of throwing objects in a general direction and wanted a reliable weapon instead.'
		],
		image: 'wpn_prj_target',
		reputation: 34,
		source: content['John Wick Weapon Pack'],
		type: ['Projectile', 'Projectile'],
		stats: {
			damage: 1100,
			capacity: 6,
			speed: 10,
			throwingRate: 0.5,
			throwDelay: 0.1,
			unequipDelay: 1.1
		}
	},
	'Throwing Axe': {
		name: 'Throwing Axe',
		description: [
			'A sharp axe is never wrong, and as this one is especially good when throwing, it got popular amongst bikers. Riding a bike, can sometimes be dangerous, and you need some "protection". So this sporting axe suddenly ran out of stock as bikers found it extra handy for highway battles.'
		],
		image: 'wpn_prj_hur',
		reputation: 41,
		source: content['Biker Character Pack'],
		type: ['Projectile', 'Projectile'],
		stats: {
			damage: 1100,
			capacity: 3,
			speed: 10,
			throwingRate: 0.5,
			throwDelay: 0.15,
			unequipDelay: 1.1
		}
	},
	'X1-ZAPer': {
		name: 'X1-ZAPer',
		description: [
			'Shrapnel is all well and good, but some things need to be fried, and this little beauty is a rather practical beast for dishing out some damage with high voltage.'
		],
		image: 'wpn_gre_electric',
		reputation: 0,
		source: content['Jiu Feng Smuggler Pack 2'],
		type: ['Grenade', 'Electric Grenade'],
		stats: {
			damage: 600, // + shock
			capacity: 4,
			throwingRate: 1.5,
			throwDelay: 0.1,
			unequipDelay: 0.9,
			explosionRadius: 10
		}
	},
	'Stoic\'s Hip Flask': {
		name: 'Stoic\'s Hip Flask',
		description: [
			'An antique flask from 1882 bearing the inscription "Stoic" and "JW Spirits", given to Duke in his youth when he trained with Buddhist monks. Duke keeps it filled with his favorite whiskey; taking a swig is a symbolic gesture of calming and gives the bearer a moment of zen-like focus, easing away damage.'
		],
		image: 'damage_control',
		reputation: 0,
		source: source['Base Game'],
		type: ['Consumable', 'Alcohol Flask'],
		perkDeck: 'Stoic',
		stats: {
			capacity: 1,
			cooldown: 10
		}
	},
	'Pocket ECM': {
		name: 'Pocket ECM',
		description: [
			'A small device for intercepting and overriding nearby encrypted signals. With sophisticated algorithms for sniffing out and disrupting wireless data, the Pocket ECM Device gives the user an edge both while hiding in the shadows and in the heat of combat.'
		],
		image: 'pocket_ecm_jammer',
		reputation: 0,
		source: source['Base Game'],
		type: ['Consumable', 'Electronic Countermeasure Device'],
		perkDeck: 'Hacker',
		stats: {
			capacity: 2,
			cooldown: 100
		}
	},
	'Smoke Bomb': {
		name: 'Smoke Bomb',
		description: [
			'Drop one of these and you\'ll vanish in a cloud of smoke, leaving your enemies struggling to take aim at you. Dodging bullets is a piece of cake when they can\'t see you properly.'
		],
		image: 'smoke_screen_grenade',
		reputation: 0,
		source: content['Sangres Character Pack'],
		type: ['Consumable', 'Smoke Bomb'],
		perkDeck: 'Sicario',
		stats: {
			capacity: 1,
			cooldown: 60
		}
	},
	'Gas Dispenser': {
		name: 'Gas Dispenser',
		description: [
			'When consumed the user cease to feel pain and become fearless. The lack of pain let the user rampage through the heart of battles longer than any other and the lack of fear make him a frightening and obvious threat for his enemies.'
		],
		image: 'tag_team',
		reputation: 0,
		source: content['h3h3 Character Pack'],
		type: ['Consumable', 'Electronic Cigarette'],
		perkDeck: 'Tag Team',
		stats: {
			capacity: 1,
			cooldown: 60
		}
	},
	'Injector': {
		name: 'Injector',
		description: [
			'A small gas dispenser that temporarily enhance the body\'s senses and provide a healing effect for two allies.'
		],
		image: 'chico_injector',
		reputation: 0,
		source: content['Scarface Character Pack'],
		type: ['Consumable', 'Hypodermic Stim'],
		perkDeck: 'Kingpin',
		stats: {
			capacity: 1,
			cooldown: 30
		}
	},
	'Leech Ampule': {
		name: 'Leech Ampule',
		description: [
			'Activating the Leech ability requires you to break a small glass ampule under your nose and take a deep breath. You\'re not quite sure what\'s in it, but it makes the world come into focus, and causes your adrenaline to spike. One thing is certain; it sure as shit isn\'t smelling salts.'
		],
		image: 'copr_ability',
		reputation: 0,
		source: source['Base Game'],
		type: ['Consumable', 'Ampule'],
		perkDeck: 'Leech',
		stats: {
			capacity: 1,
			cooldown: 30
		}
	}
}

export default throwables