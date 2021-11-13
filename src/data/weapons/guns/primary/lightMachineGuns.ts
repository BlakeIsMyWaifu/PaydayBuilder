import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

export type LightMachineGunList =
	'RPK Light Machine Gun' |
	'KSP 58 Light Machine Gun' |
	'M60 Light Machine Gun' |
	'KSP Light Machine Gun' |
	'Buzzsaw 42 Light Machine Gun' |
	'Brenner-21 Light Machine Gun'

const lightMachineGuns: Record<LightMachineGunList, WeaponData> = {
	'RPK Light Machine Gun': {
		name: 'RPK Light Machine Gun',
		image: 'rpk',
		source: content['Gage Weapon Pack #02'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 42e3,
		stats: {
			magazine: 100,
			totalAmmo: 300,
			rateOfFire: 750,
			damage: 120,
			accuracy: 28,
			stability: 8,
			concealment: 1,
			threat: 22
		},
		extraStats: {
			tacticalReload: 3.4,
			reload: 4.56,
			equipDelays: [0.9, 0.9],
			ammoPickup: [7.5, 10.5],
			recoilHorizontal: [-2.8, 3.92],
			recoilVertical: [-0.56, 2.24],
			spread: 4.32,
			damageModifier: [1.0, 0.8]
		}
	},
	'KSP 58 Light Machine Gun': {
		name: 'KSP 58 Light Machine Gun',
		image: 'par',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 23,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 510e3,
		stats: {
			magazine: 200,
			totalAmmo: 400,
			rateOfFire: 909,
			damage: 80,
			accuracy: 52,
			stability: 28,
			concealment: 1,
			threat: 31
		},
		extraStats: {
			tacticalReload: 6.5,
			reload: 6.5,
			equipDelays: [0.9, 0.9],
			ammoPickup: [10.0, 12.0],
			recoilHorizontal: [-2.3, 3.91],
			recoilVertical: [-0.46, 1.84],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'M60 Light Machine Gun': {
		name: 'M60 Light Machine Gun',
		image: 'm60',
		source: content['Fugitive Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 749e3,
		stats: {
			magazine: 200,
			totalAmmo: 300,
			rateOfFire: 550,
			damage: 120,
			accuracy: 48,
			stability: 20,
			concealment: 1,
			threat: 34
		},
		extraStats: {
			tacticalReload: 6.25,
			reload: 6.25,
			equipDelays: [0.9, 0.9],
			ammoPickup: [7.5, 10.5],
			recoilHorizontal: [-2.5, 3.5],
			recoilVertical: [-0.5, 2],
			spread: 3.12,
			damageModifier: [1.0, 0.8]
		}
	},
	'KSP Light Machine Gun': {
		name: 'KSP Light Machine Gun',
		image: 'm249',
		source: content['Gage Weapon Pack #02'],
		inventorySlot: 'primary',
		reputation: 45,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 920e3,
		stats: {
			magazine: 200,
			totalAmmo: 400,
			rateOfFire: 909,
			damage: 80,
			accuracy: 48,
			stability: 28,
			concealment: 1,
			threat: 31
		},
		extraStats: {
			tacticalReload: 5.62,
			reload: 5.62,
			equipDelays: [0.9, 0.9],
			ammoPickup: [10.0, 12.0],
			recoilHorizontal: [-2.3, 3.22],
			recoilVertical: [-0.46, 1.84],
			spread: 3.12,
			damageModifier: [1.0, 0.7]
		}
	},
	'Buzzsaw 42 Light Machine Gun': {
		name: 'Buzzsaw 42 Light Machine Gun',
		image: 'mg42',
		source: content['Gage Historical Pack'],
		inventorySlot: 'primary',
		reputation: 71,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 920e3,
		stats: {
			magazine: 150,
			totalAmmo: 450,
			rateOfFire: 1200,
			damage: 80,
			accuracy: 48,
			stability: 28,
			concealment: 1,
			threat: 31
		},
		extraStats: {
			tacticalReload: 6.5,
			reload: 6.5,
			equipDelays: [0.9, 0.9],
			ammoPickup: [11.25, 13.5],
			recoilHorizontal: [-2.3, 3.22],
			recoilVertical: [-0.46, 1.84],
			spread: 3.12,
			damageModifier: [1.0, 0.7]
		}
	},
	'Brenner-21 Light Machine Gun': {
		name: 'Brenner-21 Light Machine Gun',
		image: 'hk21',
		source: content['Gage Weapon Pack #02'],
		inventorySlot: 'primary',
		reputation: 75,
		weaponType: 'LMG',
		firingMode: 'Fully automatic',
		cost: 920e3,
		stats: {
			magazine: 150,
			totalAmmo: 300,
			rateOfFire: 723,
			damage: 120,
			accuracy: 36,
			stability: 8,
			concealment: 1,
			threat: 37
		},
		extraStats: {
			tacticalReload: 4.65,
			reload: 6.7,
			equipDelays: [0.9, 0.9],
			ammoPickup: [7.5, 10.5],
			recoilHorizontal: [-1.68, 1.68],
			recoilVertical: [1.12, 2.24],
			spread: 3.84,
			damageModifier: [1.0, 0.8]
		}
	}
}

export default lightMachineGuns
