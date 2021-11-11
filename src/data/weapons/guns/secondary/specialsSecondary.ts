import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

type SecondarySpecialList =
	'Pistol Crossbow' |
	'Compact 40mm Grenade Launcher' |
	'HRL-7 Rocket Launcher' |
	'China Puff 40mm Grenade Launcher' |
	'Commando 101 Rocket Launcher' |
	'MA-17 Flamethrower' |
	'Arbiter Grenade Launcher' |
	'OVE9000 Saw'

const specials: Record<SecondarySpecialList, WeaponData> = {
	'Pistol Crossbow': {
		name: 'Pistol Crowssbow',
		image: 'hunter',
		source: content['Gage Ninja Pack'],
		inventorySlot: 'secondary',
		reputation: 16,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 349e3,
		stats: {
			magazine: 1,
			totalAmmo: 25,
			rateOfFire: 50,
			damage: 350,
			accuracy: 96,
			stability: 100,
			concealment: 26,
			threat: 10
		},
		extraStats: {
			tacticalReload: null,
			reload: 1.2,
			equipDelays: [0.5, 0.55],
			ammoPickup: null,
			recoilHorizontal: [-0.5, 0.5],
			recoilVertical: [-0.1, 0.2],
			spread: 0.17,
			damageModifier: null
		}
	},
	'Compact 40mm Grenade Launcher': {
		name: 'Compact 40mm Grenade Launcher',
		image: 'slap',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 20,
		weaponType: 'Special',
		firingMode: 'Break Action',
		cost: 441e3,
		stats: {
			magazine: 1,
			totalAmmo: 6,
			rateOfFire: 30,
			damage: 1300,
			accuracy: 84,
			stability: 92,
			concealment: 22,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 2.5,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.35, 0.35],
			recoilVertical: [2.03, 2.1],
			spread: 0.96,
			damageModifier: null
		}
	},
	'HRL-7 Rocket Launcher': {
		name: 'HRL-7 Rocket Launcher',
		image: 'rpg7',
		source: content['The OVERKILL Pack'],
		inventorySlot: 'secondary',
		reputation: 38,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 871e3,
		stats: {
			magazine: 1,
			totalAmmo: 4,
			rateOfFire: 30,
			damage: 12500,
			accuracy: 96,
			stability: 100,
			concealment: 5,
			threat: 37
		},
		extraStats: {
			tacticalReload: null,
			reload: 4.7,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.25, 0.25],
			recoilVertical: [1.45, 1.5],
			spread: 0.24,
			damageModifier: null
		}
	},
	'China Puff 40mm Grenade Launcher': {
		name: 'China Puff 40mm Grenade Launcher',
		image: 'china',
		source: content['Wolf Pack'],
		inventorySlot: 'secondary',
		reputation: 39,
		weaponType: 'Special',
		firingMode: 'Pump action',
		cost: 896e3,
		stats: {
			magazine: 3,
			totalAmmo: 6,
			rateOfFire: 50,
			damage: 960,
			accuracy: 96,
			stability: 100,
			concealment: 18,
			threat: 37
		},
		extraStats: {
			tacticalReload: [4.32, 0.83],
			reload: 6.98,
			equipDelays: [1.0, 0.6],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.25, 0.25],
			recoilVertical: [1.45, 1.5],
			spread: 0.24,
			damageModifier: null
		}
	},
	'Commando 101 Rocket Launcher': {
		name: 'Commando 101 Rocket Launcher',
		image: 'ray',
		source: content['Scarface Heist'],
		inventorySlot: 'secondary',
		reputation: 41,
		weaponType: 'Special',
		firingMode: 'Single Shot',
		cost: 920e3,
		stats: {
			magazine: 4,
			totalAmmo: 8,
			rateOfFire: 60,
			damage: 6200,
			accuracy: 96,
			stability: 100,
			concealment: 5,
			threat: 37
		},
		extraStats: {
			tacticalReload: 6.0,
			reload: 5.75,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.25, 0.25],
			recoilVertical: [1.45, 1.5],
			spread: 0.24,
			damageModifier: null
		}
	},
	'MA-17 Flamethrower': {
		name: 'MA-17 Flamethrower',
		image: 'system',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 47,
		weaponType: 'Special',
		firingMode: 'Fully automatic',
		cost: 920e3,
		stats: {
			magazine: 700,
			totalAmmo: 1400,
			rateOfFire: 2000,
			damage: 7,
			accuracy: 0,
			stability: 8,
			concealment: 15,
			threat: 37
		},
		extraStats: {
			tacticalReload: 8.5,
			reload: 8.5,
			equipDelays: [0.85, 0.85],
			ammoPickup: [3.5, 10.5],
			recoilHorizontal: [0.0, 0.0],
			recoilVertical: [0.0, 0.0],
			spread: 6.0,
			damageModifier: null
		}
	},
	'Arbiter Grenade Launcher': {
		name: 'Arbiter Grenade Launcher',
		image: 'arbiter',
		source: content['Gage Spec Ops Pack'],
		inventorySlot: 'secondary',
		reputation: 47,
		weaponType: 'Special',
		firingMode: 'Semi-Automatic',
		cost: 920e3,
		stats: {
			magazine: 5,
			totalAmmo: 15,
			rateOfFire: 80,
			damage: 480,
			accuracy: 96,
			stability: 100,
			concealment: 18,
			threat: 37
		},
		extraStats: {
			tacticalReload: 3.34,
			reload: 4.5,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.25, 0.25],
			recoilVertical: [1.45, 1.5],
			spread: 0.24,
			damageModifier: null
		}
	},
	'OVE9000 Saw': {
		name: 'OVE9000 Saw',
		image: 'saw',
		source: source['Base Game'],
		inventorySlot: 'secondary',
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
			stability: 32,
			concealment: 16,
			threat: 24
		},
		extraStats: {
			tacticalReload: 3.75,
			reload: 3.75,
			equipDelays: [0.8, 0.8],
			ammoPickup: null,
			recoilHorizontal: [-2.2, 2.2],
			recoilVertical: [2.2, -2.2],
			spread: null,
			damageModifier: null
		}
	}
}

export default specials