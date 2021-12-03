import content, { ContentData } from 'data/source/downloadableContent'
import source, { SourceData } from 'data/source/miscSources'

export type MeleeList = keyof typeof melees

export interface MeleeData {
	name: string;
	weaponType: ['Weapon' | 'Fists' | 'Knife' | 'Axe' | 'Blunt' | 'Sword' | 'Flag' | null, 'Blunt' | 'Sharp' | null];
	reputation: number;
	source: ContentData | SourceData;
	image: string;
	stats: MeleeStats;
	description?: string;
}

export interface MeleeStats {
	damage: [number, number];
	knockdown: [number, number];
	chargeTime: number;
	range: number;
	concealment: number;
	attackDelay: number;
	cooldown: number;
	unequipDelay: number;
	specialType?: string | null;
	specialTime?: string | null;
}

const melees: Record<string, MeleeData> = {
	'Weapon Butt': {
		name: 'Weapon Butt',
		weaponType: ['Weapon', 'Blunt'],
		reputation: 0,
		source: source['Base Game'],
		image: 'weapon',
		stats: {
			damage: [30, 30],
			knockdown: [30, 30],
			chargeTime: 0,
			range: 150,
			concealment: 30,
			attackDelay: 0.0,
			cooldown: 0.6,
			unequipDelay: 0.6
		}
	},
	'Fists': {
		name: 'Fists',
		weaponType: ['Fists', 'Blunt'],
		reputation: 0,
		source: source['Base Game'],
		image: 'fists',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 1,
			range: 150,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 0.55,
			unequipDelay: 1.0
		}
	},
	'350K Brass Knuckles': {
		name: '350K Brass Knuckles',
		weaponType: ['Fists', 'Blunt'],
		reputation: 0,
		source: source.Community,
		image: 'brass_knuckles',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 0.55,
			unequipDelay: 1.0
		}
	},
	'Ursa Tanto Knife': {
		name: 'Ursa Tanto Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: source.Community,
		image: 'kabartanto',
		stats: {
			damage: [20, 80],
			knockdown: [20, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Nova\'s Shank': {
		name: 'Nova\'s Shank',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: source.Community,
		image: 'toothbrush',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.2
		}
	},
	'URSA Knife': {
		name: 'URSA Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: content['Gage Weapon Pack #02'],
		image: 'kabar',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'50 Blessing Briefcase': {
		name: '50 Blessing Briefcase',
		weaponType: ['Axe', 'Sharp'],
		reputation: 0,
		source: content['Hotline Miami'],
		image: 'briefcase',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2
		}
	},
	'Swagger Stick': {
		name: 'Swagger Stick',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: content['Gage Historical Pack'],
		image: 'swagger',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 225,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Tactical Flashlight': {
		name: 'Tactical Flashlight',
		weaponType: ['Knife', 'Blunt'],
		reputation: 0,
		source: source['Spring Break 2018'],
		image: 'aziz',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.36,
			unequipDelay: 1.2
		}
	},
	'Alabama Razor': {
		name: 'Alabama Razor',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: source['Reservoir Dogs'],
		image: 'clean',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 29,
			attackDelay: 0.0,
			cooldown: 0.36,
			unequipDelay: 0.6
		}
	},
	'Comically Large Spoon of Gold': {
		name: 'Comically Large Spoon of Gold',
		weaponType: ['Axe', 'Blunt'],
		reputation: 0,
		source: source['Meles Weapon Pack'],
		image: 'spoon_gold',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 2,
			range: 275,
			concealment: 27,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2,
			specialType: 'fire',
			specialTime: '3.1'
		}
	},
	'Pounder': {
		name: 'Pounder', // Pounder Nail Gun
		weaponType: ['Knife', 'Sharp'],
		reputation: 1,
		source: content['Wolf Pack'],
		image: 'nin',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 185,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.65,
			unequipDelay: 1.2
		}
	},
	'Comically Large Spoon': {
		name: 'Comically Large Spoon',
		weaponType: ['Axe', 'Blunt'],
		reputation: 2,
		source: source['Meles Weapon Pack'],
		image: 'spoon',
		stats: {
			damage: [40, 250],
			knockdown: [40, 250],
			chargeTime: 2,
			range: 275,
			concealment: 26,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2
		}
	},
	'Motherforker': {
		name: 'Motherforker', // The Motherforker
		weaponType: ['Axe', 'Sharp'],
		reputation: 3,
		source: content['The Butcher\'s BBQ Pack'],
		image: 'fork',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.2
		}
	},
	'Spatula': {
		name: 'Spatula',
		weaponType: ['Axe', 'Blunt'],
		reputation: 3,
		source: content['The Butcher\'s BBQ Pack'],
		image: 'spatula',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 185,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'K.L.A.S Shovel': {
		name: 'K.L.A.S Shovel',
		weaponType: ['Axe', 'Blunt'],
		reputation: 4,
		source: content['Gage Shotgun Pack'],
		image: 'shovel',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 250,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Money Bundle': {
		name: 'Money Bundle',
		weaponType: ['Axe', 'Blunt'],
		reputation: 7,
		source: source.Community,
		image: 'moneybundle',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.2
		}
	},
	'Empty Palm Kata': {
		name: 'Empty Palm Kata',
		weaponType: ['Fists', 'Blunt'],
		reputation: 8,
		source: content['Gage Ninja Pack'],
		image: 'fight',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.55,
			unequipDelay: 1.1
		}
	},
	'Bolt Cutters': {
		name: 'Bolt Cutters',
		weaponType: ['Axe', 'Blunt'],
		reputation: 10,
		source: source['Base Game'],
		image: 'cutters',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 275,
			concealment: 27,
			attackDelay: 0.3,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Shawn\'s Shears': {
		name: 'Shawn\'s Shears',
		weaponType: ['Knife', 'Sharp'],
		reputation: 10,
		source: content['The Goat Simulator Heist'],
		image: 'shawn',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 29,
			attackDelay: 0.0,
			cooldown: 0.36,
			unequipDelay: 1.8
		}
	},
	'Utility Knife': {
		name: 'Utility Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 12,
		source: source['Base Game'],
		image: 'boxcutter',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.16,
			cooldown: 0.8,
			unequipDelay: 0.5
		}
	},
	'Microphone': {
		name: 'Microphone',
		weaponType: ['Axe', 'Sharp'],
		reputation: 13,
		source: content['The Alesso Heist'],
		image: 'microphone',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Selfie-Stick': {
		name: 'Selfie-Stick',
		weaponType: ['Axe', 'Blunt'],
		reputation: 13,
		source: content['The Point Break Heists'],
		image: 'selfie',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Bayonet Knife': {
		name: 'Bayonet Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 14,
		source: content['Gage Assault Pack'],
		image: 'bayonet',
		stats: {
			damage: [20, 80],
			knockdown: [20, 36],
			chargeTime: 1.5,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.0
		}
	},
	'Machete': {
		name: 'Machete',
		weaponType: ['Axe', 'Sharp'],
		reputation: 14,
		source: content['The Point Break Heists'],
		image: 'gator',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 225,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Chain Whip': {
		name: 'Chain Whip',
		weaponType: ['Axe', 'Blunt'],
		reputation: 15,
		source: content['Biker Character Pack'],
		image: 'road',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 185,
			concealment: 29,
			attackDelay: 0.4,
			cooldown: 2.0,
			unequipDelay: 1.2
		}
	},
	'Electrical Brass Knuckles': {
		name: 'Electrical Brass Knuckles',
		weaponType: ['Fists', 'Blunt'],
		reputation: 16,
		source: source['Base Game'],
		image: 'zeus',
		stats: {
			damage: [20, 20],
			knockdown: [20, 20],
			chargeTime: 2,
			range: 200,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 0.55,
			unequipDelay: 1.0,
			specialType: 'tase',
			specialTime: 'light'
		},
		description: 'Device that electrocutes and interrupts targets on touch'
	},
	'Ice Pick': {
		name: 'Ice Pick',
		weaponType: ['Axe', 'Sharp'],
		reputation: 16,
		source: source['Base Game'],
		image: 'iceaxe',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 250,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Rezokye': {
		name: 'Rezokye',
		weaponType: ['Axe', 'Sharp'],
		reputation: 16,
		source: content['Gage Russian Weapon Pack'],
		image: 'oxide',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 225,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'The Pen': {
		name: 'The Pen',
		weaponType: ['Knife', 'Sharp'],
		reputation: 16,
		source: source['The Search For Kento'],
		image: 'sword',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.2
		}
	},
	'Telescopic Baton': {
		name: 'Telescopic Baton',
		weaponType: ['Axe', 'Blunt'],
		reputation: 17,
		source: content['Gage Shotgun Pack'],
		image: 'baton',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Jackpot': {
		name: 'Jackpot',
		weaponType: ['Knife', 'Sharp'],
		reputation: 17,
		source: content['The Golden Grin Casino Heist'],
		image: 'slot_lever',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 2,
			range: 225,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.7,
			unequipDelay: 0.6
		}
	},
	'El Ritmo': {
		name: 'El Ritmo',
		weaponType: [null, null],
		reputation: 0,
		source: content['San Martín Bank Heist'],
		image: 'chac',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.2
		}
	},
	'Stainless Steel Syringe': {
		name: 'Stainless Steel Syringe',
		weaponType: ['Knife', 'Sharp'],
		reputation: 18,
		source: source['Base Game'],
		image: 'fear',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 1.5,
			range: 150,
			concealment: 30,
			attackDelay: 0.29,
			cooldown: 0.65,
			unequipDelay: 1.2,
			specialType: 'poison',
			specialTime: '1.0'
		},
		description: 'Syringe filled with poison that deals damage over time and has a chance to interrupt enemies.'
	},
	'Kento\'s Tanto': {
		name: 'Kento\'s Tanto',
		weaponType: ['Knife', 'Sharp'],
		reputation: 18,
		source: source['Base Game'],
		image: 'hauteur',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 3.5,
			range: 150,
			concealment: 30,
			attackDelay: 0.13,
			cooldown: 0.6,
			unequipDelay: 1.1
		}
	},
	'Monkey Wrench': {
		name: 'Monkey Wrench',
		weaponType: ['Blunt', 'Blunt'],
		reputation: 18,
		source: source['Base Game'],
		image: 'shock',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Baseball Bat': {
		name: 'Baseball Bat',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: content['Hotline Miami'],
		image: 'baseballbat',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 27,
			attackDelay: 0.2,
			cooldown: 0.9,
			unequipDelay: 1.2
		}
	},
	'Classic Baton': {
		name: 'Classic Baton',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: content['The Alesso Heist'],
		image: 'oldbaton',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Hockey Stick': {
		name: 'Hockey Stick',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: content['Sokol Character Pack'],
		image: 'hockey',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.8
		}
	},
	'Two Handed Great Ruler': {
		name: 'Two Handed Great Ruler',
		weaponType: ['Sword', 'Sharp'],
		reputation: 18,
		source: content['h3h3 Character Pack'],
		image: 'meter',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 275,
			concealment: 27,
			attackDelay: 0.6,
			cooldown: 1.1,
			unequipDelay: 1.5
		}
	},
	'Specialist Knives': {
		name: 'Specialist Knives',
		weaponType: ['Knife', 'Sharp'],
		reputation: 19,
		source: source['Base Game'],
		image: 'ballistic',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Diving Knife': {
		name: 'Diving Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 19,
		source: content['The Point Break Heists'],
		image: 'pugio',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 175,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.0
		}
	},
	'El Verdugo': {
		name: 'El Verdugo',
		weaponType: ['Knife', 'Sharp'],
		reputation: 20,
		source: source['Base Game'],
		image: 'agave',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 225,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Hackaton': {
		name: 'Hackaton',
		weaponType: ['Blunt', 'Blunt'],
		reputation: 20,
		source: source['Base Game'],
		image: 'happy',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 0.7
		}
	},
	'Krieger Blade': {
		name: 'Krieger Blade',
		weaponType: ['Knife', 'Sharp'],
		reputation: 21,
		source: content['Gage Weapon Pack #02'],
		image: 'kampfmesser',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Buckler Shield': {
		name: 'Buckler Shield',
		weaponType: ['Axe', 'Sharp'],
		reputation: 21,
		source: content['Gage Chivalry Pack'],
		image: 'buck',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 175,
			concealment: 28,
			attackDelay: 0.4,
			cooldown: 0.9,
			unequipDelay: 1.4
		}
	},
	'Wing Butterfly Knife': {
		name: 'Wing Butterfly Knife', // Wing
		weaponType: ['Knife', 'Sharp'],
		reputation: 21, // 21 & 35?
		source: source['Base Game'],
		image: 'wing',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.85,
			unequipDelay: 1.2
		}
	},
	'You\'re Mine': {
		name: 'You\'re Mine',
		weaponType: ['Axe', 'Sharp'],
		reputation: 22,
		source: content['The Butcher\'s Western Pack'],
		image: 'branding_iron',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 225,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Metal Detector': {
		name: 'Metal Detector',
		weaponType: ['Axe', 'Sharp'],
		reputation: 22,
		source: content['The Alesso Heist'],
		image: 'detector',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 225,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Croupier\'s Rake': {
		name: 'Croupier\'s Rake',
		weaponType: ['Knife', 'Sharp'],
		reputation: 22,
		source: content['The Golden Grin Casino Heist'],
		image: 'croupier_rake',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.7,
			unequipDelay: 0.6
		}
	},
	'Kazaguruma': {
		name: 'Kazaguruma',
		weaponType: ['Knife', 'Sharp'],
		reputation: 23,
		source: content['Shadow Warrior Collaboration'],
		image: 'ostry',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 28,
			attackDelay: 0.11,
			cooldown: 0.4,
			unequipDelay: 0.6
		}
	},
	'Compact Hatchet': {
		name: 'Compact Hatchet',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: content['Gage Assault Pack'],
		image: 'bullseye',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Lumber Lite L2': {
		name: 'Lumber Lite L2',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: content['Scarface Character Pack'],
		image: 'cs',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 185,
			concealment: 25,
			attackDelay: 0.35,
			cooldown: 2.0,
			unequipDelay: 1.2
		}
	},
	'Hotline 8000x': {
		name: 'Hotline 8000x',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: content['Scarface Heist'],
		image: 'brick',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.06,
			cooldown: 2.0,
			unequipDelay: 1.2
		}
	},
	'Potato Masher': {
		name: 'Potato Masher',
		weaponType: ['Knife', 'Sharp'],
		reputation: 24,
		source: content['Gage Historical Pack'],
		image: 'model24',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Scalper Tomahawk': {
		name: 'Scalper Tomahawk',
		weaponType: ['Axe', 'Sharp'],
		reputation: 24,
		source: content['The Butcher\'s Western Pack'],
		image: 'scalper',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Switchblade': {
		name: 'Switchblade',
		weaponType: ['Knife', 'Sharp'],
		reputation: 24,
		source: content['The Golden Grin Casino Heist'],
		image: 'switchblade',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 175,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.0
		}
	},
	'Knuckle Dagger': {
		name: 'Knuckle Dagger',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: source['RAID: World War II Community'],
		image: 'grip',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 0.7
		}
	},
	'OVERKILL Boxing Gloves': {
		name: 'OVERKILL Boxing Gloves',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: source['Base Game'],
		image: 'boxing_gloves',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 0.55,
			unequipDelay: 1.0
		}
	},
	'Push Daggers': {
		name: 'Push Daggers',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: source['Base Game'],
		image: 'push',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.2,
			cooldown: 0.55,
			unequipDelay: 1.0
		}
	},
	'Leather Sap': {
		name: 'Leather Sap',
		weaponType: ['Knife', 'Sharp'],
		reputation: 50,  // 50?
		source: source['Base Game'],
		image: 'sap',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 200,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Dragan\'s Cleaver Knife': {
		name: 'Dragan\'s Cleaver Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 25,
		source: content['Dragan Character Pack'],
		image: 'meat_cleaver',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 195,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Shinsakuto Katana': {
		name: 'Shinsakuto Katana',
		weaponType: ['Axe', 'Sharp'],
		reputation: 26,
		source: content['Yakuza Character Pack'],
		image: 'sandsteel',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 275,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.0
		}
	},
	'Okinawan Style Sai': {
		name: 'Okinawan Style Sai',
		weaponType: ['Knife', 'Sharp'],
		reputation: 27,
		source: source['Base Game'],
		image: 'twins',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Pitchfork': {
		name: 'Pitchfork',
		weaponType: ['Flag', 'Sharp'],
		reputation: 27,
		source: content['The Goat Simulator Heist'],
		image: 'pitchfork',
		stats: {
			damage: [70, 450],
			knockdown: [70, 4505],
			chargeTime: 4,
			range: 225,
			concealment: 27,
			attackDelay: 0.3,
			cooldown: 0.8,
			unequipDelay: 1.8
		}
	},
	'Arkansas Toothpick': {
		name: 'Arkansas Toothpick',
		weaponType: ['Knife', 'Sharp'],
		reputation: 28,
		source: content['The Butcher\'s Western Pack'],
		image: 'bowie',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 225,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Microphone Stand': {
		name: 'Microphone Stand',
		weaponType: ['Axe', 'Sharp'],
		reputation: 28,
		source: content['The Alesso Heist'],
		image: 'micstand',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 250,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.8
		}
	},
	'Psycho Knife': {
		name: 'Psycho Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 31,
		source: source.Community,
		image: 'chef',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.36,
			unequipDelay: 1.2
		}
	},
	'X-46 Knife': {
		name: 'X-46 Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 32,
		source: content['Gage Assault Pack'],
		image: 'x46',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 1.2
		}
	},
	'Talons': {
		name: 'Talons',
		weaponType: ['Fists', 'Blunt'],
		reputation: 32,
		source: content['Gage Ninja Pack'],
		image: 'tiger',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.55,
			unequipDelay: 1.0
		}
	},
	'Bearded Axe': {
		name: 'Bearded Axe',
		weaponType: ['Axe', 'Sharp'],
		reputation: 33,
		source: content['Gage Chivalry Pack'],
		image: 'beardy',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 250,
			concealment: 26,
			attackDelay: 0.6,
			cooldown: 1.1,
			unequipDelay: 1.5
		}
	},
	'Hook': {
		name: 'Hook',
		weaponType: ['Knife', 'Sharp'],
		reputation: 33,
		source: content['John Wick Heists'],
		image: 'catch',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 28,
			attackDelay: 0.11,
			cooldown: 0.4,
			unequipDelay: 0.6
		}
	},
	'Cleaver Knife': {
		name: 'Cleaver Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 34,
		source: content['Hotline Miami'],
		image: 'cleaver',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 185,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.,
			unequipDelay: 1.2
		}
	},
	'Buzzer': {
		name: 'Buzzer',
		weaponType: ['Knife', 'Sharp'],
		reputation: 34,
		source: content['The Golden Grin Casino Heist'],
		image: 'taser',
		stats: {
			damage: [20, 20],
			knockdown: [20, 20],
			chargeTime: 3.5,
			range: 200,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.7,
			unequipDelay: 1.0,
			specialType: 'tase',
			specialTime: 'light'
		},
		description: 'Device that electrocutes and interrupts targets on touch'
	},
	'Gold Fever': {
		name: 'Gold Fever',
		weaponType: ['Axe', 'Sharp'],
		reputation: 34,
		source: content['The Butcher\'s Western Pack'],
		image: 'mining_pick',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 225,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.1
		}
	},
	'Carpenter\'s Delight': {
		name: 'Carpenter\'s Delight',
		weaponType: ['Axe', 'Blunt'],
		reputation: 37,
		source: source['Ownership of Hotline Miami 2 Digital Special'],
		image: 'hammer',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Clover\'s Shillelagh': {
		name: 'Clover\'s Shillelagh',
		weaponType: ['Axe', 'Sharp'],
		reputation: 37,
		source: content['Clover Character Pack'],
		image: 'shillelagh',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 185,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Shepheard\'s Cane': {
		name: 'Shepheard\'s Cane',
		weaponType: ['Knife', 'Sharp'],
		reputation: 37,
		source: content['The Goat Simulator Heist'],
		image: 'stick',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 225,
			concealment: 27,
			attackDelay: 0.2,
			cooldown: 0.8,
			unequipDelay: 1.8
		}
	},
	'Scout Knife': {
		name: 'Scout Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 38,
		source: content['The Goat Simulator Heist'],
		image: 'scoutknife',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 29,
			attackDelay: 0.0,
			cooldown: 0.36,
			unequipDelay: 1.2
		}
	},
	'Berger Combat Knife': {
		name: 'Berger Combat Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 41,
		source: content['Gage Weapon Pack #02'],
		image: 'gerber',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 160,
			concealment: 2,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.0
		}
	},
	'Trench Knife': {
		name: 'Trench Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 41,
		source: content['Gage Historical Pack'],
		image: 'fairbair',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 175,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.2
		}
	},
	'Survival Tomahawk': {
		name: 'Survival Tomahawk',
		weaponType: ['Axe', 'Sharp'],
		reputation: 42,
		source: content['Gage Shotgun Pack'],
		image: 'tomahawk',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 225,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Morning Star': {
		name: 'Morning Star',
		weaponType: ['Axe', 'Sharp'],
		reputation: 43,
		source: content['Gage Chivalry Pack'],
		image: 'morning',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 225,
			concealment: 26,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.1
		}
	},
	'Poker': {
		name: 'Poker',
		weaponType: ['Axe', 'Blunt'],
		reputation: 44,
		source: content['The Butcher\'s BBQ Pack'],
		image: 'poker',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Lucille Baseball Bat': {
		name: 'Lucille Baseball Bat',
		weaponType: ['Axe', 'Blunt'],
		reputation: 45,
		source: source.Community,
		image: 'barbedwire',
		stats: {
			damage: [30, 90],
			knockdown: [150, 270],
			chargeTime: 3,
			range: 275,
			concealment: 27,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2
		}
	},
	'Great Sword': {
		name: 'Great Sword',
		weaponType: ['Sword', 'Sharp'],
		reputation: 46,
		source: content['Gage Chivalry Pack'],
		image: 'great',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 275,
			concealment: 27,
			attackDelay: 0.6,
			cooldown: 1.1,
			unequipDelay: 1.5
		}
	},
	'Rivertown Glen Bottle': {
		name: 'Rivertown Glen Bottle',
		weaponType: ['Axe', 'Blunt'],
		reputation: 47,
		source: source.Community,
		image: 'whiskey',
		stats: {
			damage: [30, 55],
			knockdown: [90, 110],
			chargeTime: 2,
			range: 185,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'The Spear of Freedom': {
		name: 'The Spear of Freedom',
		weaponType: ['Flag', 'Sharp'],
		reputation: 47,
		source: content['Gage Historical Pack'],
		image: 'freedom',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 3,
			range: 275,
			concealment: 27,
			attackDelay: 0.35,
			cooldown: 0.9,
			unequipDelay: 1.3
		}
	},
	'Ding Dong Breaching Tool': {
		name: 'Ding Dong Breaching Tool',
		weaponType: ['Axe', 'Blunt'],
		reputation: 48,
		source: content['Gage Assault Pack'],
		image: 'dingdong',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 275,
			concealment: 26,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2
		}
	},
	'Tenderizer': {
		name: 'Tenderizer',
		weaponType: ['Axe', 'Blunt'],
		reputation: 48,
		source: content['The Butcher\'s BBQ Pack'],
		image: 'tenderizer',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 185,
			concealment: 28,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 1.2
		}
	},
	'Machete Knife': {
		name: 'Machete Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 51,
		source: content['Hotline Miami'],
		image: 'machete',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 225,
			concealment: 29,
			attackDelay: 0.1,
			cooldown: 0.8,
			unequipDelay: 0.6
		}
	},
	'Utility Machete': {
		name: 'Utility Machete',
		weaponType: ['Axe', 'Blunt'],
		reputation: 54,
		source: content['Gage Shotgun Pack'],
		image: 'becker',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 27,
			attackDelay: 0.1,
			cooldown: 0.6,
			unequipDelay: 0.6
		}
	},
	'Kunai Knife': {
		name: 'Kunai Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 54,
		source: content['Gage Ninja Pack'],
		image: 'cqc',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 150,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.3,
			unequipDelay: 1.2,
			specialType: 'poison',
			specialTime: '1.0'
		},
		description: 'Knife with a poisoned tip that deals damage over time and has a chance to interrupt enemies.'
	},
	'Trautman Knife': {
		name: 'Trautman Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 61,
		source: content['Gage Weapon Pack #02'],
		image: 'rambo',
		stats: {
			damage: [30, 80],
			knockdown: [30, 80],
			chargeTime: 2,
			range: 200,
			concealment: 30,
			attackDelay: 0.1,
			cooldown: 0.5,
			unequipDelay: 1.0
		}
	},
	'Fire Axe': {
		name: 'Fire Axe',
		weaponType: ['Axe', 'Sharp'],
		reputation: 71,
		source: source['Base Game'],
		image: 'fireaxe',
		stats: {
			damage: [70, 450],
			knockdown: [70, 450],
			chargeTime: 4,
			range: 275,
			concealment: 27,
			attackDelay: 0.6,
			cooldown: 1.6,
			unequipDelay: 1.8
		}
	},
	'Alpha Mauler': {
		name: 'Alpha Mauler',
		weaponType: ['Axe', 'Blunt'],
		reputation: 0,
		source: content['Alienware Alpha Mauler'],
		image: 'alien_maul',
		stats: {
			damage: [20, 40],
			knockdown: [200, 400],
			chargeTime: 3,
			range: 275,
			concealment: 26,
			attackDelay: 0.2,
			cooldown: 1.0,
			unequipDelay: 1.2
		}
	}
}

export default melees