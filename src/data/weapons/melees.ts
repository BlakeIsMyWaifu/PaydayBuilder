export interface meleeData {
	name: string;
	weaponType: ['Weapon' | 'Fists' | 'Knife' | 'Axe' | 'Blunt' | 'Sword' | 'Flag' | null, 'Blunt' | 'Sharp' | null];
	reputation: number;
	sourceType: 'normal' | 'dlc' | 'community' | 'event' | 'infamous' | 'collaboration';
	source: string;
	image: string;
	stats: meleeStats;
	description?: string;
}

export interface meleeStats {
	damage: [number, number];
	knockdown: [number, number];
	chargeTime: number;
	range: number;
	concealment: number;
	attackDelay: number;
	cooldown: number;
	unequipDelay: number;
	specialType?: string;
	specialTime?: string;
}

const melees: meleeData[] = [
	{
		name: 'Weapon Butt',
		weaponType: ['Weapon', 'Blunt'],
		reputation: 0,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Fists',
		weaponType: ['Fists', 'Blunt'],
		reputation: 0,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: '350K Brass Knuckles',
		weaponType: ['Fists', 'Blunt'],
		reputation: 0,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'Ursa Tanto Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'Nova\'s Shank',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'URSA Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		sourceType: 'dlc',
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
	{
		name: '50 Blessing Briefcase',
		weaponType: ['Axe', 'Sharp'],
		reputation: 0,
		source: 'OWN THE HOTLINE MIAMI GAME ON STEAM TO UNLOCK!',
		sourceType: 'collaboration',
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
	{
		name: 'Swagger Stick',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Tactical Flashlight',
		weaponType: ['Knife', 'Blunt'],
		reputation: 0,
		source: 'THIS IS A SPRING BREAK 2018 ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Alabama Razor',
		weaponType: ['Knife', 'Sharp'],
		reputation: 0,
		source: 'THIS IS A RESERVOIR DOGS ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Comically Large Spoon of Gold',
		weaponType: ['Axe', 'Blunt'],
		reputation: 0,
		source: 'THIS IS A MELES WEAPON PACK ITEM!',
		sourceType: 'event',
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
	{
		name: 'Pounder', // Pounder Nail Gun
		weaponType: ['Knife', 'Sharp'],
		reputation: 1,
		source: 'THIS IS A WOLF PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Comically Large Spoon',
		weaponType: ['Axe', 'Blunt'],
		reputation: 2,
		source: 'THIS IS A MELES WEAPON PACK ITEM!',
		sourceType: 'event',
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
	{
		name: 'Motherforker', // The Motherforker
		weaponType: ['Axe', 'Sharp'],
		reputation: 3,
		source: 'THIS IS A BBQ WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Spatula',
		weaponType: ['Axe', 'Blunt'],
		reputation: 3,
		source: 'THIS IS A BBQ WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'K.L.A.S Shovel',
		weaponType: ['Axe', 'Blunt'],
		reputation: 4,
		source: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Money Bundle',
		weaponType: ['Axe', 'Blunt'],
		reputation: 7,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'Empty Palm Kata',
		weaponType: ['Fists', 'Blunt'],
		reputation: 8,
		source: 'THIS IS A GAGE NINJA PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Bolt Cutters',
		weaponType: ['Axe', 'Blunt'],
		reputation: 10,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Shawn\'s Shears',
		weaponType: ['Knife', 'Sharp'],
		reputation: 10,
		source: 'THIS IS A GOAT SUMULATOR ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Utility Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 12,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Microphone',
		weaponType: ['Axe', 'Sharp'],
		reputation: 13,
		source: 'THIS IS A THE ALESSO HIEST PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Selfie-Stick',
		weaponType: ['Axe', 'Blunt'],
		reputation: 13,
		source: 'THIS IS A POINT BREAK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Bayonet Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 14,
		source: 'THIS IS A GAGE ASSUALT PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Machete',
		weaponType: ['Axe', 'Sharp'],
		reputation: 14,
		source: 'THIS IS A POINT BREAK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Chain Whip',
		weaponType: ['Axe', 'Blunt'],
		reputation: 15,
		source: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Electrical Brass Knuckles',
		weaponType: ['Fists', 'Blunt'],
		reputation: 16,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Ice Pick',
		weaponType: ['Axe', 'Sharp'],
		reputation: 16,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Rezokye',
		weaponType: ['Axe', 'Sharp'],
		reputation: 16,
		source: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'The Pen',
		weaponType: ['Knife', 'Sharp'],
		reputation: 16,
		source: 'THIS IS A SEARCH FOR KENTO ITEM!',
		sourceType: 'event',
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
	{
		name: 'Telescopic Baton',
		weaponType: ['Axe', 'Blunt'],
		reputation: 17,
		source: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Jackpot',
		weaponType: ['Knife', 'Sharp'],
		reputation: 17,
		source: 'THIS IS A GOLDEN CASINO ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'El Ritmo',
		weaponType: [null, null],
		reputation: -1,
		source: 'THIS IS A SAN MARÍN BANK HEIST ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Stainless Steel Syringe',
		weaponType: ['Knife', 'Sharp'],
		reputation: 18,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Kento\'s Tanto',
		weaponType: ['Knife', 'Sharp'],
		reputation: 18,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Monkey Wrench',
		weaponType: ['Blunt', 'Blunt'],
		reputation: 18,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Baseball Bat',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Classic Baton',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: 'THIS IS A THE ALESSO HEIST PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Hockey Stick',
		weaponType: ['Axe', 'Sharp'],
		reputation: 18,
		source: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Two Handed Great Ruler',
		weaponType: ['Sword', 'Sharp'],
		reputation: 18,
		source: 'THIS IS A H3H3 CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Specialist Knives',
		weaponType: ['Knife', 'Sharp'],
		reputation: 19,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Diving Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 19,
		source: 'THIS IS A POINT BREAK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'El Verdugo',
		weaponType: ['Knife', 'Sharp'],
		reputation: 20,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Hackaton',
		weaponType: ['Blunt', 'Blunt'],
		reputation: 20,
		source: 'THIS IS A JOY CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Krieger Blade',
		weaponType: ['Knife', 'Sharp'],
		reputation: 21,
		source: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Buckler Shield',
		weaponType: ['Axe', 'Sharp'],
		reputation: 21,
		source: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Wing Butterfly Knife', // Wing
		weaponType: ['Knife', 'Sharp'],
		reputation: 21, // 21 & 35?
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'You\'re Mine',
		weaponType: ['Axe', 'Sharp'],
		reputation: 22,
		source: 'THIS IS A WESTERN WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Metal Detector',
		weaponType: ['Axe', 'Sharp'],
		reputation: 22,
		source: 'THIS IS A THE ALESSO HEIST DLC ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Croupier\'s Rake',
		weaponType: ['Knife', 'Sharp'],
		reputation: 22,
		source: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Kazaguruma',
		weaponType: ['Knife', 'Sharp'],
		reputation: 23,
		source: 'THIS IS A SHADOW WARRIOR ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Compact Hatchet',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Lumber Lite L2',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Hotline 8000x',
		weaponType: ['Axe', 'Sharp'],
		reputation: 23,
		source: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Potato Masher',
		weaponType: ['Knife', 'Sharp'],
		reputation: 24,
		source: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Scalper Tomahawk',
		weaponType: ['Axe', 'Sharp'],
		reputation: 24,
		source: 'THIS IS A WESTERN WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Switchblade',
		weaponType: ['Knife', 'Sharp'],
		reputation: 24,
		source: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Knuckle Dagger',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: 'THIS IS A RAID: WORLD WAR II COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'OVERKILL Boxing Gloves',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Push Daggers',
		weaponType: ['Fists', 'Blunt'],
		reputation: 25,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Leather Sap',
		weaponType: ['Knife', 'Sharp'],
		reputation: 50,  // 50?
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Dragan\'s Cleaver Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 25,
		source: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Shinsakuto Katana',
		weaponType: ['Axe', 'Sharp'],
		reputation: 26,
		source: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Okinawan Style Sai',
		weaponType: ['Knife', 'Sharp'],
		reputation: 27,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Pitchfork',
		weaponType: ['Flag', 'Sharp'],
		reputation: 27,
		source: 'THIS IS A GOAT SIMULATOR ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Arkansas Toothpick',
		weaponType: ['Knife', 'Sharp'],
		reputation: 28,
		source: 'THIS IS A WESTERN WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Microphone Stand',
		weaponType: ['Axe', 'Sharp'],
		reputation: 28,
		source: 'THIS IS A THE ALESSO HEIST ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Psycho Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 31,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'X-46 Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 32,
		source: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Talons',
		weaponType: ['Fists', 'Blunt'],
		reputation: 32,
		source: 'THIS IS A GAGE NINJA PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Bearded Axe',
		weaponType: ['Axe', 'Sharp'],
		reputation: 33,
		source: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Hook',
		weaponType: ['Knife', 'Sharp'],
		reputation: 33,
		source: 'THIS IS A JOHN WICK HEISTS ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Cleaver Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 34,
		source: 'THIS IS A HOTLINE MIAMI PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Buzzer',
		weaponType: ['Knife', 'Sharp'],
		reputation: 34,
		source: 'THIS IS A GOLDEN CASINO ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Gold Fever',
		weaponType: ['Axe', 'Sharp'],
		reputation: 34,
		source: 'THIS IS A WESTERN WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Carpenter\'s Delight',
		weaponType: ['Axe', 'Blunt'],
		reputation: 37,
		source: 'REQUIRES OWNERSHIP OF HOTLINE MIAMI 2 DIGITAL SPECIAL EDITION ON STEAM.',
		sourceType: 'collaboration',
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
	{
		name: 'Clover\'s Shillelagh',
		weaponType: ['Axe', 'Sharp'],
		reputation: 37,
		source: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Shepheard\'s Cane',
		weaponType: ['Knife', 'Sharp'],
		reputation: 37,
		source: 'THIS IS A GOAT SIMULATOR ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Scout Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 38,
		source: 'THIS IS A GOAT SIMULATOR ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Berger Combat Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 41,
		source: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Trench Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 41,
		source: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Survival Tomahawk',
		weaponType: ['Axe', 'Sharp'],
		reputation: 42,
		source: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Morning Star',
		weaponType: ['Axe', 'Sharp'],
		reputation: 43,
		source: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Poker',
		weaponType: ['Axe', 'Blunt'],
		reputation: 44,
		source: 'THIS IS A BBQ WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Lucille Baseball Bat',
		weaponType: ['Axe', 'Blunt'],
		reputation: 45,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'Great Sword',
		weaponType: ['Sword', 'Sharp'],
		reputation: 46,
		source: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Rivertown Glen Bottle',
		weaponType: ['Axe', 'Blunt'],
		reputation: 47,
		source: 'THIS IS A COMMUNITY ITEM!',
		sourceType: 'community',
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
	{
		name: 'The Spear of Freedom',
		weaponType: ['Flag', 'Sharp'],
		reputation: 47,
		source: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Ding Dong Breaching Tool',
		weaponType: ['Axe', 'Blunt'],
		reputation: 48,
		source: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Tenderizer',
		weaponType: ['Axe', 'Blunt'],
		reputation: 48,
		source: 'THIS IS A BBQ WEAPON PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Machete Knife',
		weaponType: ['Axe', 'Sharp'],
		reputation: 51,
		source: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Utility Machete',
		weaponType: ['Axe', 'Blunt'],
		reputation: 54,
		source: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Kunai Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 54,
		source: 'THIS IS A GAGE NINJA PACK ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Trautman Knife',
		weaponType: ['Knife', 'Sharp'],
		reputation: 61,
		source: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		sourceType: 'dlc',
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
	{
		name: 'Fire Axe',
		weaponType: ['Axe', 'Sharp'],
		reputation: 71,
		source: 'Base Game',
		sourceType: 'normal',
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
	{
		name: 'Alpha Mauler',
		weaponType: ['Axe', 'Blunt'],
		reputation: 0,
		source: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		sourceType: 'event',
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
]

export default melees