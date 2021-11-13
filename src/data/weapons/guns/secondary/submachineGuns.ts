import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

export type SubmachineGunList =
	'Swedish K Submachine Gun' |
	'SpecOps Submachine Gun' |
	'Mark 10 Submachine Gun' |
	'CR 805B Submachine Gun' |
	'AK Gen 21 Tactical Submachine Gun' |
	'Jacket\'s Piece' |
	'Compact-5 Submachine Gun' |
	'Chicago Typewriter Submachine Gun' |
	'Miyaka 10 Special Submachine Gun' |
	'Cobra Submachine Gun' |
	'CMP Submachine Gun' |
	'Para Submachine Gun' |
	'Micro Uzi Submachine Gun' |
	'Signature Submachine Gun' |
	'Jackal Submachine Gun' |
	'MP40 Submachine Gun' |
	'Heather Submachine Gun' |
	'Krinkov Submachine Gun' |
	'Blaster 9mm Submachine Gun' |
	'Kobus 90 Submachine Gun' |
	'Kross Vertex Submachine Gun' |
	'Tatonka Submachine Gun' |
	'Patchett L2A1 Submachine Gun' |
	'Uzi Submachine Gun'

const submachineGuns: Record<SubmachineGunList, WeaponData> = {
	'Swedish K Submachine Gun': {
		name: 'Swedish K Submachine Gun',
		image: 'm45',
		source: content['Armored Transport'],
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Submachine Gun',
		firingMode: 'Fully automatic',
		cost: 42e3,
		stats: {
			magazine: 40,
			totalAmmo: 80,
			rateOfFire: 600,
			damage: 99,
			accuracy: 68,
			stability: 52,
			concealment: 24,
			threat: 10
		},
		extraStats: {
			tacticalReload: 2.48,
			reload: 3.39,
			equipDelays: [0.6, 0.5],
			ammoPickup: [0.8, 2.8],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [-2.04, 2.04],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'SpecOps Submachine Gun': {
		name: 'SpecOps Submachine Gun',
		image: 'mp7',
		source: content['Gage Weapon Pack #01'],
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 20,
			totalAmmo: 160,
			rateOfFire: 952,
			damage: 58,
			accuracy: 64,
			stability: 76,
			concealment: 23,
			threat: 8
		},
		extraStats: {
			tacticalReload: 1.7,
			reload: 2.13,
			equipDelays: [0.5, 0.6],
			ammoPickup: [4.8, 8.8],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [0.66, 0.88],
			spread: 2.16,
			damageModifier: [1.0, 0.6]
		}
	},
	'Mark 10 Submachine Gun': {
		name: 'Mark 10 Submachine Gun',
		image: 'mac10',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 2,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 58e3,
		stats: {
			magazine: 40,
			totalAmmo: 160,
			rateOfFire: 1000,
			damage: 58,
			accuracy: 48,
			stability: 72,
			concealment: 27,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.74,
			reload: 2.35,
			equipDelays: [0.5, 0.5],
			ammoPickup: [4.8, 8.8],
			recoilHorizontal: [-0.6, 0.6],
			recoilVertical: [0.84, 1.2],
			spread: 3.12,
			damageModifier: [1.0, 0.6]
		}
	},
	'CR 805B Submachine Gun': {
		name: 'CR 805B Submachine Gun',
		image: 'hajk',
		source: content['The Biker Heist'],
		inventorySlot: 'secondary',
		reputation: 2,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 58e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 750,
			damage: 99,
			accuracy: 72,
			stability: 76,
			concealment: 18,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.74,
			reload: 3.04,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.9, 3.15],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [-0.66, 1.32],
			spread: 1.68,
			damageModifier: [1.0, 0.7]
		}
	},
	'AK Gen 21 Tactical Submachine Gun': {
		name: 'AK Gen 21 Tactical Submachine Gun',
		image: 'vityaz',
		source: content['Jiu Feng Smuggler Pack'],
		inventorySlot: 'secondary',
		reputation: 6,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 134e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 750,
			damage: 72,
			accuracy: 64,
			stability: 76,
			concealment: 23,
			threat: 14
		},
		extraStats: {
			tacticalReload: 1.78,
			reload: 2.68,
			equipDelays: [0.45, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-0.55, 0.55],
			recoilVertical: [0.55, 0.77],
			spread: 2.16,
			damageModifier: [1.0, 0.6]
		}
	},
	'Jacket\'s Piece': {
		name: 'Jacket\'s Piece',
		image: 'cobray',
		source: content['Jacket Character Pack'],
		inventorySlot: 'secondary',
		reputation: 12,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 261e3,
		stats: {
			magazine: 32,
			totalAmmo: 160,
			rateOfFire: 1200,
			damage: 57,
			accuracy: 52,
			stability: 76,
			concealment: 25,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.78,
			reload: 3.78,
			equipDelays: [0.5, 0.55],
			ammoPickup: [4.8, 8.8],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [-0.66, 1.32],
			spread: 2.88,
			damageModifier: [1.0, 0.6]
		}
	},
	'Compact-5 Submachine Gun': {
		name: 'Compact-5 Submachine Gun',
		image: 'new_mp5',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 13,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 283e3,
		stats: {
			magazine: 30,
			totalAmmo: 210,
			rateOfFire: 750,
			damage: 44,
			accuracy: 44,
			stability: 88,
			concealment: 24,
			threat: 6
		},
		extraStats: {
			tacticalReload: 2.09,
			reload: 3.13,
			equipDelays: [0.6, 0.6],
			ammoPickup: [6.3, 11.55],
			recoilHorizontal: [-0.8, 0.8],
			recoilVertical: [0.48, 0.64],
			spread: 3.36,
			damageModifier: [1.0, 0.5]
		}
	},
	'Chicago Typewriter Submachine Gun': {
		name: 'Chicago Typewriter Submachine Gun',
		image: 'm1928',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 14,
		weaponType: 'Submachine Gun',
		firingMode: 'Fully automatic',
		cost: 305e3,
		stats: {
			magazine: 50,
			totalAmmo: 150,
			rateOfFire: 723,
			damage: 58,
			accuracy: 48,
			stability: 76,
			concealment: 18,
			threat: 12
		},
		extraStats: {
			tacticalReload: 3.04,
			reload: 3.91,
			equipDelays: [0.75, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.32, 1.32],
			recoilVertical: [0.33, 1.65],
			spread: 3.12,
			damageModifier: [1.0, 0.6]
		}
	},
	'Miyaka 10 Special Submachine Gun': {
		name: 'Miyaka 10 Special Submachine Gun',
		image: 'pm9',
		source: content['Jiu Feng Smuggler Pack 2'],
		inventorySlot: 'secondary',
		reputation: 17,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 372e3,
		stats: {
			magazine: 25,
			totalAmmo: 175,
			rateOfFire: 1100,
			damage: 60,
			accuracy: 28,
			stability: 64,
			concealment: 26,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.61,
			reload: 2.26,
			equipDelays: [0.5, 0.7],
			ammoPickup: [5.25, 9.63],
			recoilHorizontal: [-1.68, 1.68],
			recoilVertical: [-0.14, 0.84],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Cobra Submachine Gun': {
		name: 'Cobra Submachine Gun',
		image: 'scorpion',
		source: content['Hotline Miami'],
		inventorySlot: 'secondary',
		reputation: 18,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 395e3,
		stats: {
			magazine: 20,
			totalAmmo: 220,
			rateOfFire: 1000,
			damage: 44,
			accuracy: 28,
			stability: 76,
			concealment: 28,
			threat: 6
		},
		extraStats: {
			tacticalReload: 1.74,
			reload: 2.39,
			equipDelays: [0.5, 0.7],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [0.66, 0.88],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'CMP Submachine Gun': {
		name: 'CMP Submachine Gun',
		image: 'mp9',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 19,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 418e3,
		stats: {
			magazine: 30,
			totalAmmo: 210,
			rateOfFire: 952,
			damage: 44,
			accuracy: 28,
			stability: 84,
			concealment: 26,
			threat: 8
		},
		extraStats: {
			tacticalReload: 1.31,
			reload: 2.16,
			equipDelays: [0.4, 0.5],
			ammoPickup: [6.3, 11.55],
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [-1.08, 1.08],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Para Submachine Gun': {
		name: 'Para Submachine Gun',
		image: 'olympic',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 19,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 418e3,
		stats: {
			magazine: 25,
			totalAmmo: 150,
			rateOfFire: 682,
			damage: 55,
			accuracy: 44,
			stability: 72,
			concealment: 24,
			threat: 14
		},
		extraStats: {
			tacticalReload: 1.88,
			reload: 2.81,
			equipDelays: [0.5, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.2, 1.2],
			recoilVertical: [0.72, 0.96],
			spread: 3.36,
			damageModifier: [1.0, 0.6]
		}
	},
	'Micro Uzi Submachine Gun': {
		name: 'Micro Uzi Submachine Gun',
		image: 'baka',
		source: content['Yakuza Character Pack'],
		inventorySlot: 'secondary',
		reputation: 19,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 418e3,
		stats: {
			magazine: 32,
			totalAmmo: 224,
			rateOfFire: 1200,
			damage: 44,
			accuracy: 28,
			stability: 84,
			concealment: 29,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.61,
			reload: 2.26,
			equipDelays: [0.5, 0.7],
			ammoPickup: [6.72, 12.32],
			recoilHorizontal: [-1.08, 1.08],
			recoilVertical: [-0.09, 0.54],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Signature Submachine Gun': {
		name: 'Signature Submachine Gun',
		image: 'shepheard',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 20,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 441e3,
		stats: {
			magazine: 20,
			totalAmmo: 200,
			rateOfFire: 750,
			damage: 44,
			accuracy: 44,
			stability: 52,
			concealment: 24,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.83,
			reload: 2.48,
			equipDelays: [0.5, 0.6],
			ammoPickup: [6.0, 11.0],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [-0.34, 0.68],
			spread: 3.36,
			damageModifier: [1.0, 0.5]
		}
	},
	'Jackal Submachine Gun': {
		name: 'Jackal Submachine Gun',
		image: 'schakal',
		source: content['John Wick Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 20,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 441e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 652,
			damage: 99,
			accuracy: 60,
			stability: 60,
			concealment: 24,
			threat: 10
		},
		extraStats: {
			tacticalReload: 2.05,
			reload: 3.15,
			equipDelays: [0.5, 0.6],
			ammoPickup: [0.9, 3.15],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [-0.3, 0.6],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'MP40 Submachine Gun': {
		name: 'MP40 Submachine Gun',
		image: 'erma',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 25,
		weaponType: 'Submachine Gun',
		firingMode: 'Fully automatic',
		cost: 557e3,
		stats: {
			magazine: 40,
			totalAmmo: 80,
			rateOfFire: 600,
			damage: 99,
			accuracy: 68,
			stability: 52,
			concealment: 24,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.65,
			reload: 2.65,
			equipDelays: [0.6, 0.5],
			ammoPickup: [0.8, 2.8],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [-2.04, 2.04],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Heather Submachine Gun': {
		name: 'Heather Submachine Gun',
		image: 'sr2',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 25,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 557e3,
		stats: {
			magazine: 32,
			totalAmmo: 160,
			rateOfFire: 750,
			damage: 58,
			accuracy: 52,
			stability: 60,
			concealment: 28,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.8,
			reload: 3.48,
			equipDelays: [0.5, 0.55],
			ammoPickup: [4.8, 8.8],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [-0.45, 0.9],
			spread: 2.88,
			damageModifier: [1.0, 0.6]
		}
	},
	'Krinkov Submachine Gun': {
		name: 'Krinkov Submachine Gun',
		image: 'akmsu',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 29,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 822,
			damage: 99,
			accuracy: 60,
			stability: 52,
			concealment: 21,
			threat: 22
		},
		extraStats: {
			tacticalReload: 1.87,
			reload: 3.39,
			equipDelays: [0.6, 0.55],
			ammoPickup: [0.9, 3.15],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [1.02, 1.36],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'Blaster 9mm Submachine Gun': {
		name: 'Blaster 9mm Submachine Gun',
		image: 'tec9',
		source: content['Hotline Miami'],
		inventorySlot: 'secondary',
		reputation: 32,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 725e3,
		stats: {
			magazine: 20,
			totalAmmo: 220,
			rateOfFire: 896,
			damage: 44,
			accuracy: 28,
			stability: 84,
			concealment: 27,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.01,
			reload: 2.85,
			equipDelays: [0.5, 0.6],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [0.54, 0.72],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		}
	},
	'Kobus 90 Submachine Gun': {
		name: 'Kobus 90 Submachine Gun',
		image: 'p90',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 36,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 822e3,
		stats: {
			magazine: 50,
			totalAmmo: 150,
			rateOfFire: 909,
			damage: 56,
			accuracy: 52,
			stability: 68,
			concealment: 25,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.22,
			reload: 2.96,
			equipDelays: [0.65, 0.68],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 2.88,
			damageModifier: [1.0, 0.6]
		}
	},
	'Kross Vertex Submachine Gun': {
		name: 'Kross Vertext Submachine Gun',
		image: 'polymer',
		source: content['Gage Ninja Pack'],
		inventorySlot: 'secondary',
		reputation: 39,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 896e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 1200,
			damage: 58,
			accuracy: 52,
			stability: 84,
			concealment: 20,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.74,
			reload: 2.17,
			equipDelays: [0.5, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [-0.18, 0.36],
			spread: 2.88,
			damageModifier: [1.0, 0.6]
		}
	},
	'Tatonka Submachine Gun': {
		name: 'Tatonka Submachine Gun',
		image: 'coal',
		source: content['Gage Russian Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 42,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 64,
			totalAmmo: 128,
			rateOfFire: 652,
			damage: 99,
			accuracy: 52,
			stability: 60,
			concealment: 24,
			threat: 10
		},
		extraStats: {
			tacticalReload: 2.83,
			reload: 3.7,
			equipDelays: [0.5, 0.6],
			ammoPickup: [1.28, 4.48],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [-0.3, 0.6],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'Patchett L2A1 Submachine Gun': {
		name: 'Patchett L2A1 Submachine Gun',
		image: 'sterling',
		source: content['Gage Historical Pack'],
		inventorySlot: 'secondary',
		reputation: 51,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 24,
			totalAmmo: 96,
			rateOfFire: 545,
			damage: 99,
			accuracy: 52,
			stability: 84,
			concealment: 20,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.0,
			reload: 2.87,
			equipDelays: [0.65, 0.55],
			ammoPickup: [2.88, 5.28],
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [0.54, 0.72],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'Uzi Submachine Gun': {
		name: 'Uzi Submachine Gun',
		image: 'uzi',
		source: content['Hotline Miami'],
		inventorySlot: 'secondary',
		reputation: 55,
		weaponType: 'Submachine Gun',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 40,
			totalAmmo: 200,
			rateOfFire: 698,
			damage: 44,
			accuracy: 52,
			stability: 76,
			concealment: 24,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.13,
			reload: 3.06,
			equipDelays: [0.6, 0.55],
			ammoPickup: [6.0, 11.0],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [0.66, 0.88],
			spread: 2.88,
			damageModifier: [1.0, 0.5]
		}
	}
}

export default submachineGuns