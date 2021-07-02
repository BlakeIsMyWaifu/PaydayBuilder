import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { weaponData } from '../weaponTypes'

interface shotgunsList {
	'Locomotive 12G Shotgun': weaponData;
	'GSPS 12G Shotgun': weaponData;
	'Goliath 12G Shotgun': weaponData;
	'Grimm 12G Shotgun': weaponData;
	'Street Sweeper Shotgun': weaponData;
	'The Judge Shotgun': weaponData;
	'Claire 12G Shotgun': weaponData;
}

const shotguns: shotgunsList = {
	'Locomotive 12G Shotgun': {
		name: 'Locomotive 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 13,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 283e3,
		stats: {
			magazine: 6,
			totalAmmo: 42,
			rateOfFire: 160,
			damage: 90,
			accuracy: 48,
			stability: 44,
			concealment: 23,
			threat: 28
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			reload: 5.0,
			equipDelays: [0.6, 0.7],
			ammoPickup: [0.42, 1.47],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 3.12,
			damageModifier: [1.0, 0.6]
		}
	},
	'GSPS 12G Shotgun': {
		name: 'GSPS 12G Shotgun',
		image: '',
		source: content['The Goat Simulator Heist'],
		inventorySlot: 'secondary',
		reputation: 23,
		weaponType: 'Shotgun',
		firingMode: 'Pump action',
		cost: 510e3,
		stats: {
			magazine: 7,
			totalAmmo: 28,
			rateOfFire: 104,
			damage: 155,
			accuracy: 44,
			stability: 60,
			concealment: 22,
			threat: 28
		},
		extraStats: {
			tacticalReload: [2.45, 0.65],
			reload: 6.75,
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.28, 0.98],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [2.85, 3.0],
			spread: 3.36,
			damageModifier: [1.0, 0.5]
		}
	},
	'Goliath 12G Shotgun': {
		name: 'Goliath 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 23,
		weaponType: 'Shotgun',
		firingMode: 'Double action',
		cost: 510e3,
		stats: {
			magazine: 6,
			totalAmmo: 54,
			rateOfFire: 333,
			damage: 42,
			accuracy: 56,
			stability: 52,
			concealment: 13,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.55,
			reload: 2.55,
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-0.34, 0.34],
			recoilVertical: [3.23, 3.4],
			spread: 2.64,
			damageModifier: [1.0, 0.5]
		}
	},
	'Grimm 12G Shotgun': {
		name: 'Grimm 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 27,
		weaponType: 'Shotgun',
		firingMode: 'Selective firing',
		cost: 605e3,
		stats: {
			magazine: 8,
			totalAmmo: 104,
			rateOfFire: 300,
			damage: 18,
			accuracy: 12,
			stability: 56,
			concealment: 21,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.16,
			reload: 2.9,
			equipDelays: [0.55, 0.55],
			ammoPickup: [5.2, 7.8],
			recoilHorizontal: [-0.32, 0.32],
			recoilVertical: [3.04, 3.2],
			spread: 5.28,
			damageModifier: [1.0, 0.5]
		}
	},
	'Street Sweeper Shotgun': {
		name: 'Street Sweeper Shotgun',
		image: '',
		source: content['Gage Shotgun Pack'],
		inventorySlot: 'secondary',
		reputation: 33,
		weaponType: 'Shotgun',
		firingMode: 'Double action',
		cost: 749e3,
		stats: {
			magazine: 12,
			totalAmmo: 72,
			rateOfFire: 429,
			damage: 42,
			accuracy: 28,
			stability: 52,
			concealment: 21,
			threat: 28
		},
		extraStats: {
			tacticalReload: [2.26, 0.52],
			reload: 8.0,
			equipDelays: [0.85, 0.6],
			ammoPickup: [3.6, 5.4],
			recoilHorizontal: [-0.34, 0.34],
			recoilVertical: [3.23, 3.4],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'The Judge Shotgun': {
		name: 'The Judge Shotgun',
		image: '',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 35,
		weaponType: 'Shotgun',
		firingMode: 'Double action',
		cost: 798e3,
		stats: {
			magazine: 5,
			totalAmmo: 35,
			rateOfFire: 500,
			damage: 155,
			accuracy: 52,
			stability: 36,
			concealment: 29,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.25,
			reload: 2.25,
			equipDelays: [0.45, 0.5],
			ammoPickup: [0.18, 0.53],
			recoilHorizontal: [-1.05, 1.05],
			recoilVertical: [6.09, 6.3],
			spread: 2.88,
			damageModifier: [1.0, 0.5]
		}
	},
	'Claire 12G Shotgun': {
		name: 'Claire 12G Shotgun',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 43,
		weaponType: 'Shotgun',
		firingMode: 'Single action',
		cost: 920e3,
		stats: {
			magazine: 2,
			totalAmmo: 44,
			rateOfFire: 500,
			damage: 155,
			accuracy: 56,
			stability: 52,
			concealment: 10,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.2,
			reload: 2.2,
			equipDelays: [0.4, 0.6],
			ammoPickup: [0.22, 0.66],
			recoilHorizontal: [-0.68, 0.51],
			recoilVertical: [2.89, 3.06],
			spread: 2.64,
			damageModifier: [1.0, 0.5]
		}
	}
}

export default shotguns