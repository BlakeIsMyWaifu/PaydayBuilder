import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

type PrimarySpecialList =
	'OVE9000 Saw' |
	'Plainsrider Bow' |
	'Light Crossbow' |
	'Airbow' |
	'English Longbow' |
	'XL 5.56 Microgun' |
	'DECA Technologies Compound Bow' |
	'Vulcan Minigun' |
	'Heavy Crossbow' |
	'Piglet Grenade Launcher' |
	'Flamethrower Mk.1' |
	'GL40 Grenade Launcher';

const specials: Record<PrimarySpecialList, WeaponData> = {
	'OVE9000 Saw': {
		name: 'OVE9000 Saw',
		image: 'saw',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Special',
		firingMode: 'Fully automatic',
		cost: 42e3,
		stats: {
			magazine: 150,
			totalAmmo: 300,
			rateOfFire: 400,
			damage: 23,
			accuracy: 8,
			stability: 24,
			concealment: 16,
			threat: 24
		},
		extraStats: {
			tacticalReload: 3.75,
			reload: 3.75,
			equipDelays: [0.8, 0.8],
			ammoPickup: null,
			recoilHorizontal: [-2.4, 2.4],
			recoilVertical: [2.4, -2.4],
			spread: null,
			damageModifier: null
		}
	},
	'Plainsrider Bow': {
		name: 'Plainsrider Bow',
		image: 'plainsrider',
		source: content['The Butcher\'s Western Pack'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 327e3,
		stats: {
			magazine: 1,
			totalAmmo: 50,
			rateOfFire: 300,
			damage: 1000,
			accuracy: 96,
			stability: 96,
			concealment: 30,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 0.33,
			equipDelays: [0.55, 0.55],
			ammoPickup: null,
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		}
	},
	'Light Crossbow': {
		name: 'Light Crossbow',
		image: 'frankish',
		source: content['Gage Chivalry Pack'],
		inventorySlot: 'primary',
		reputation: 17,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 372e3,
		stats: {
			magazine: 1,
			totalAmmo: 50,
			rateOfFire: 40,
			damage: 750,
			accuracy: 96,
			stability: 96,
			concealment: 29,
			threat: 10
		},
		extraStats: {
			tacticalReload: null,
			reload: 1.5,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.6, 0.6],
			recoilVertical: [-0.12, 0.24],
			spread: 0.17,
			damageModifier: null
		}
	},
	'Airbow': {
		name: 'Airbow',
		image: 'ecp',
		source: content['h3h3 Character Pack'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Special',
		firingMode: 'Semi-Automatic',
		cost: 372e3,
		stats: {
			magazine: 6,
			totalAmmo: 30,
			rateOfFire: 120,
			damage: 700,
			accuracy: 84,
			stability: 84,
			concealment: 5,
			threat: 10
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.0,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [-0.18, 0.36],
			spread: 0.67,
			damageModifier: null
		}
	},
	'English Longbow': {
		name: 'English Longbow',
		image: 'long',
		source: content['Gage Chivalry Pack'],
		inventorySlot: 'primary',
		reputation: 29,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 652e3,
		stats: {
			magazine: 1,
			totalAmmo: 35,
			rateOfFire: 300,
			damage: 2000,
			accuracy: 96,
			stability: 96,
			concealment: 29,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 1.5,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		}
	},
	'XL 5.56 Microgun': {
		name: 'XL 5.56 Microgun',
		image: 'shuno',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 30,
		weaponType: 'Special',
		firingMode: 'Fully automatic',
		cost: 676e3,
		stats: {
			magazine: 750,
			totalAmmo: 750,
			rateOfFire: 2000,
			damage: 35,
			accuracy: 32,
			stability: 24,
			concealment: 5,
			threat: 31
		},
		extraStats: {
			tacticalReload: 7.8,
			reload: 7.8,
			equipDelays: [0.9, 1.5],
			ammoPickup: [7.5, 26.25],
			recoilHorizontal: [-0.36, 0.48],
			recoilVertical: [-0.12, 0.24],
			spread: 4.08,
			damageModifier: null
		}
	},
	'DECA Technologies Compound Bow': {
		name: 'DECA Technologies Compound Bow',
		image: 'elastic',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 749e3,
		stats: {
			magazine: 1,
			totalAmmo: 30,
			rateOfFire: 300,
			damage: 2000,
			accuracy: 96,
			stability: 96,
			concealment: 27,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 1.3,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.12, 0.12],
			recoilVertical: [1.08, 1.2],
			spread: 0.24,
			damageModifier: null
		}
	},
	'Vulcan Minigun': {
		name: 'Vulcan Minigun',
		image: 'm134',
		source: content['The OVERKILL Pack'],
		inventorySlot: 'primary',
		reputation: 40,
		weaponType: 'Special',
		firingMode: 'Fully automatic',
		cost: 871e3,
		stats: {
			magazine: 750,
			totalAmmo: 750,
			rateOfFire: 3000,
			damage: 25,
			accuracy: 32,
			stability: 24,
			concealment: 5,
			threat: 31
		},
		extraStats: {
			tacticalReload: 7.8,
			reload: 7.8,
			equipDelays: [0.9, 0.9],
			ammoPickup: [7.5, 26.25],
			recoilHorizontal: [-0.36, 0.48],
			recoilVertical: [-0.12, 0.24],
			spread: 4.08,
			damageModifier: null
		}
	},
	'Heavy Crossbow': {
		name: 'Heavy Crossbow',
		image: 'arblast',
		source: content['Gage Chivalry Pack'],
		inventorySlot: 'primary',
		reputation: 38,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 871e3,
		stats: {
			magazine: 1,
			totalAmmo: 35,
			rateOfFire: 21,
			damage: 2000,
			accuracy: 96,
			stability: 96,
			concealment: 28,
			threat: 10
		},
		extraStats: {
			tacticalReload: null,
			reload: 2.5,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.6, 0.6],
			recoilVertical: [-0.12, 0.24],
			spread: 0.17,
			damageModifier: null
		}
	},
	'Piglet Grenade Launcher': {
		name: 'Piglet Grenade Launcher',
		image: 'm32',
		source: content['The Butcher\'s BBQ Pack'],
		inventorySlot: 'primary',
		reputation: 43,
		weaponType: 'Special',
		firingMode: 'Double action',
		cost: 920e3,
		stats: {
			magazine: 6,
			totalAmmo: 12,
			rateOfFire: 60,
			damage: 1300,
			accuracy: 96,
			stability: 96,
			concealment: 10,
			threat: 37
		},
		extraStats: {
			tacticalReload: [9.21, 2.0],
			reload: 19.21,
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		}
	},
	'Flamethrower Mk.1': {
		name: 'Flamethrower Mk.1',
		image: 'flamethrower_mk2',
		source: content['The Butcher\'s BBQ Pack'],
		inventorySlot: 'primary',
		reputation: 44,
		weaponType: 'Special',
		firingMode: 'Fully automatic',
		cost: 920e3,
		stats: {
			magazine: 900,
			totalAmmo: 1800,
			rateOfFire: 2000,
			damage: 7,
			accuracy: 0,
			stability: 0,
			concealment: 7,
			threat: 37
		},
		extraStats: {
			tacticalReload: 8.5,
			reload: 8.5,
			equipDelays: [0.85, 0.85],
			ammoPickup: [4.5, 13.5],
			recoilHorizontal: [0.0, 0.0],
			recoilVertical: [0.0, 0.0],
			spread: 6.0,
			damageModifier: null
		}
	},
	'GL40 Grenade Launcher': {
		name: 'GL40 Grenade Launcher',
		image: 'gre_m79',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 46,
		weaponType: 'Special',
		firingMode: 'Break Action',
		cost: 920e3,
		stats: {
			magazine: 1,
			totalAmmo: 6,
			rateOfFire: 30,
			damage: 1300,
			accuracy: 96,
			stability: 96,
			concealment: 18,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 3.1,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		}
	}
}

export default specials