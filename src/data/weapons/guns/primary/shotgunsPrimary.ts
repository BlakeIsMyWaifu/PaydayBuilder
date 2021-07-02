import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { weaponData } from '../weaponTypes'

export interface shotgunsList {
	'Predator 12G Shotgun': weaponData;
	'Breaker 12G Shotgun': weaponData;
	'Reinfeld 880 Shotgun': weaponData;
	'Mosconi 12G Tactical Shotgun': weaponData;
	'M1014 Shotgun': weaponData;
	'Raven Shotgun': weaponData;
	'IZHMA 12G Shotgun': weaponData;
	'Reinfeld 88 Shotgun': weaponData;
	'Mosconi 12G Shotgun': weaponData;
	'Joceline O/U 12G Shotgun': weaponData;
	'Steakout 12G Shotgun': weaponData;
}

const shotguns: shotgunsList = {
	'Predator 12G Shotgun': {
		name: 'Predator 12G Shotgun',
		image: '',
		source: source.Community,
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Shotgun',
		firingMode: 'Semi-Automatic',
		cost: 42e3,
		stats: {
			magazine: 6,
			totalAmmo: 66,
			rateOfFire: 300,
			damage: 55,
			accuracy: 28,
			stability: 44,
			concealment: 14,
			threat: 28
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			reload: 5.0,
			equipDelays: [0.85, 0.85],
			ammoPickup: [3.3, 4.95],
			recoilHorizontal: [-0.95, 1.52],
			recoilVertical: [3.42, 2.85],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Breaker 12G Shotgun': {
		name: 'Breaker 12G Shotgun',
		image: '',
		source: content['Biker Character Pack'],
		inventorySlot: 'primary',
		reputation: 3,
		weaponType: 'Shotgun',
		firingMode: 'Lever Action',
		cost: 76e3,
		stats: {
			magazine: 7,
			totalAmmo: 21,
			rateOfFire: 80,
			damage: 155,
			accuracy: 48,
			stability: 28,
			concealment: 20,
			threat: 28
		},
		extraStats: {
			tacticalReload: [3.28, 0.33],
			reload: 5.61,
			equipDelays: [0.85, 0.55],
			ammoPickup: [0.21, 0.74],
			recoilHorizontal: [-0.46, 0.46],
			recoilVertical: [4.37, 4.6],
			spread: 3.12,
			damageModifier: [1.0, 0.7]
		}
	},
	'Reinfeld 880 Shotgun': {
		name: 'Reinfeld 880 Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 8,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 175e3,
		stats: {
			magazine: 6,
			totalAmmo: 42,
			rateOfFire: 104,
			damage: 90,
			accuracy: 40,
			stability: 32,
			concealment: 11,
			threat: 28
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			reload: 5.0,
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.42, 1.47],
			recoilHorizontal: [-0.44, 0.44],
			recoilVertical: [4.18, 4.4],
			spread: 3.6,
			damageModifier: [1.0, 0.6]
		}
	},
	'Mosconi 12G Tactical Shotgun': {
		name: 'Mosconi 12G Tactical Shotgun',
		image: '',
		source: content['Jiu Feng Smuggler Pack'],
		inventorySlot: 'primary',
		reputation: 39,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 261e3,
		stats: {
			magazine: 7,
			totalAmmo: 42,
			rateOfFire: 150,
			damage: 110,
			accuracy: 36,
			stability: 32,
			concealment: 19,
			threat: 28
		},
		extraStats: {
			tacticalReload: [1.26, 0.4],
			reload: 3.98,
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.42, 1.47],
			recoilHorizontal: [-0.22, 0.22],
			recoilVertical: [4.62, 4.84],
			spread: 3.84,
			damageModifier: [1.0, 0.6]
		}
	},
	'M1014 Shotgun': {
		name: 'M1014 Shotgun',
		image: '',
		source: content['Gage Shotgun Pack'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Shotgun',
		firingMode: 'Semi-Automatic',
		cost: 327e3,
		stats: {
			magazine: 8,
			totalAmmo: 64,
			rateOfFire: 429,
			damage: 55,
			accuracy: 28,
			stability: 44,
			concealment: 12,
			threat: 26
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			reload: 6.13,
			equipDelays: [0.85, 0.85],
			ammoPickup: [3.2, 4.8],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Raven Shotgun': {
		name: 'Raven Shotgun',
		image: '',
		source: content['Gage Shotgun Pack'],
		inventorySlot: 'primary',
		reputation: 22,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 487e3,
		stats: {
			magazine: 14,
			totalAmmo: 42,
			rateOfFire: 104,
			damage: 90,
			accuracy: 44,
			stability: 44,
			concealment: 22,
			threat: 28
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			reload: 9.53,
			equipDelays: [0.55, 0.6],
			ammoPickup: [0.42, 1.47],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 3.36,
			damageModifier: [1.0, 0.6]
		}
	},
	'IZHMA 12G Shotgun': {
		name: 'IZHMA 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Shotgun',
		firingMode: 'Selective firing',
		cost: 581e3,
		stats: {
			magazine: 7,
			totalAmmo: 70,
			rateOfFire: 333,
			damage: 42,
			accuracy: 28,
			stability: 44,
			concealment: 13,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.65,
			reload: 3.95,
			equipDelays: [0.6, 0.6],
			ammoPickup: [3.5, 5.25],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Reinfeld 88 Shotgun': {
		name: 'Reinfeld 88 Shotgun',
		image: '',
		source: content['Gunslinger Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 581e3,
		stats: {
			magazine: 7,
			totalAmmo: 35,
			rateOfFire: 120,
			damage: 120,
			accuracy: 40,
			stability: 36,
			concealment: 17,
			threat: 28
		},
		extraStats: {
			tacticalReload: [2.45, 0.65],
			reload: 6.75,
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.35, 1.23],
			recoilHorizontal: [-0.21, 0.21],
			recoilVertical: [4.41, 4.62],
			spread: 3.6,
			damageModifier: [1.0, 0.6]
		}
	},
	'Mosconi 12G Shotgun': {
		name: 'Mosconi 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 39,
		weaponType: 'Shotgun',
		firingMode: 'Break Action',
		cost: 896e3,
		stats: {
			magazine: 2,
			totalAmmo: 32,
			rateOfFire: 500,
			damage: 155,
			accuracy: 60,
			stability: 36,
			concealment: 7,
			threat: 37
		},
		extraStats: {
			tacticalReload: 2.5,
			reload: 2.5,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.32, 1.12],
			recoilHorizontal: [-1.05, 1.05],
			recoilVertical: [6.09, 6.3],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'Joceline O/U 12G Shotgun': {
		name: 'Joceline O/U 12G Shotgun',
		image: '',
		source: source.Community,
		inventorySlot: 'primary',
		reputation: 43,
		weaponType: 'Shotgun',
		firingMode: 'Break Action',
		cost: 920e3,
		stats: {
			magazine: 2,
			totalAmmo: 28,
			rateOfFire: 500,
			damage: 155,
			accuracy: 60,
			stability: 28,
			concealment: 5,
			threat: 37
		},
		extraStats: {
			tacticalReload: 2.5,
			reload: 2.7,
			equipDelays: [0.55, 0.55],
			ammoPickup: [0.28, 0.98],
			recoilHorizontal: [-1.15, 1.15],
			recoilVertical: [6.67, 6.9],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'Steakout 12G Shotgun': {
		name: 'Steakout 12G Shotgun',
		image: '',
		source: content['The Butcher\'s BBQ Pack'],
		inventorySlot: 'primary',
		reputation: -1,
		weaponType: 'Shotgun',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 8,
			totalAmmo: 72,
			rateOfFire: 300,
			damage: 42,
			accuracy: 28,
			stability: 44,
			concealment: 9,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 4.1,
			equipDelays: [0.55, 0.55],
			ammoPickup: [3.6, 5.4],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	}
}

export default shotguns