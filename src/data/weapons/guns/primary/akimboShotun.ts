import source from 'data/source/miscSources'

import { weaponData } from '../weaponTypes'

interface akimboShotunsList {
	'Akimbo Goliath 12G Shotguns': weaponData;
	'Brothers Grimm 12G Shotguns': weaponData;
	'Akimbo Judge Shotguns': weaponData;
}

const akimboShotuns: akimboShotunsList = {
	'Akimbo Goliath 12G Shotguns': {
		name: 'Akimbo Goliath 12G Shotguns',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 714e3,
		stats: {
			magazine: 12,
			totalAmmo: 72,
			rateOfFire: 333,
			damage: 42,
			accuracy: 56,
			stability: 8,
			concealment: 13,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: [0.5, 0.5],
			ammoPickup: [3.6, 5.4],
			recoilHorizontal: 1.4,
			recoilVertical: [3.92, 3.36],
			spread: 2.64,
			damageModifier: [1.0, 0.6]
		}
	},
	'Brothers Grimm 12G Shotguns': {
		name: 'Brothers Grimm 12G Shotguns',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 27,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 847e3,
		stats: {
			magazine: 16,
			totalAmmo: 96,
			rateOfFire: 333,
			damage: 18,
			accuracy: 12,
			stability: 12,
			concealment: 21,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: 0.5,
			ammoPickup: [3.8, 7.2],
			recoilHorizontal: 1.35,
			recoilVertical: [3.78, 3.24],
			spread: 5.28,
			damageModifier: [1.0, 0.5]
		}
	},
	'Akimbo Judge Shotguns': {
		name: 'Akimbo Judge Shotguns',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 1117200,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 500,
			damage: 155,
			accuracy: 52,
			stability: 0,
			concealment: 29,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: 0.5,
			ammoPickup: [0.2, 0.6],
			recoilHorizontal: 1.5,
			recoilVertical: [4.2, 3.6],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	}
}

export default akimboShotuns