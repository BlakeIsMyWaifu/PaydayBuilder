import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { weaponData } from '../weaponTypes'

export interface pistolList {
	'Interceptor 45 Pistol': weaponData;
	'Chimano 88 Pistol': weaponData;
	'Gruber Kurz Pistol': weaponData;
	'Signature .40 Pistol': weaponData;
	'Crosskill Pistol': weaponData;
	'Bernetti 9 Pistol': weaponData;
	'Bronco .44 Pistol': weaponData;
	'Crosskill Chunky Compact Pistol': weaponData;
	'White Streak Pistol': weaponData;
	'Baby Deagle': weaponData;
	'M13 9mm Pistol': weaponData;
	'Chimano Custom Pistol': weaponData;
	'Broomstick Pistol': weaponData;
	'Parabellum Pistol': weaponData;
	'5/7 AP Pistol': weaponData;
	'Castigo .44 Revolver': weaponData;
	'Contractor Pistol': weaponData;
	'Frenchman Model 87 Revolver': weaponData;
	'Chimano Compact Pistol': weaponData;
	'Crosskill Guard Pistol': weaponData;
	'LEO Pistol': weaponData;
	'STRYK 18c Pistol': weaponData;
	'Bernetti Auto Pistol': weaponData;
	'Czech 92 Pistol': weaponData;
	'Igor Automatik Pistol': weaponData;
	'HOLT 9mm Pistol': weaponData;
	'Peacemaker .45 Revolver': weaponData;
	'Matever .357 Revolver': weaponData;
	'Deagle Pistol': weaponData;
}

const pistols: pistolList = {
	'Interceptor 45 Pistol': {
		name: 'Interceptor 45 Pistol',
		image: '',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 42e3,
		stats: {
			magazine: 13,
			totalAmmo: 91,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 60,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.2,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.27, 3.19],
			recoilHorizontal: 0.75,
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Chimano 88 Pistol': {
		name: 'Chimano 88 Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 42e3,
		stats: {
			magazine: 17,
			totalAmmo: 153,
			rateOfFire: 545,
			damage: 53,
			accuracy: 52,
			stability: 68,
			concealment: 30,
			threat: 8
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.83, 5.36],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'Gruber Kurz Pistol': {
		name: 'Gruber Kurz Pistol',
		image: '',
		source: content['Armored Transport'],
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 42e3,
		stats: {
			magazine: 14,
			totalAmmo: 154,
			rateOfFire: 545,
			damage: 53,
			accuracy: 44,
			stability: 68,
			concealment: 30,
			threat: 4
		},
		extraStats: {
			tacticalReload: 1.55,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.85, 5.39],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 3.36,
			damageModifier: [1.0, 0.7]
		}
	},
	'Signature .40 Pistol': {
		name: 'Signature .40 Pistol',
		image: '',
		source: content['Gage Weapon Pack #01'],
		inventorySlot: 'secondary',
		reputation: 0,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 42e3,
		stats: {
			magazine: 12,
			totalAmmo: 84,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 60,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.1, 2.94],
			recoilHorizontal: 0.75,
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Crosskill Pistol': {
		name: 'Crosskill Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 2,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 58e3,
		stats: {
			magazine: 10,
			totalAmmo: 90,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 60,
			concealment: 29,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.25, 3.15],
			recoilHorizontal: 0.75,
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Bernetti 9 Pistol': {
		name: 'Bernetti 9 Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 6,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 134e3,
		stats: {
			magazine: 14,
			totalAmmo: 154,
			rateOfFire: 545,
			damage: 53,
			accuracy: 56,
			stability: 68,
			concealment: 30,
			threat: 6
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.85, 5.93],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 2.64,
			damageModifier: [1.0, 0.7]
		}
	},
	'Bronco .44 Pistol': {
		name: 'Bronco .44 Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 6,
		weaponType: 'Pistol',
		firingMode: 'Double action',
		cost: 134e3,
		stats: {
			magazine: 6,
			totalAmmo: 54,
			rateOfFire: 400,
			damage: 175,
			accuracy: 76,
			stability: 12,
			concealment: 26,
			threat: 24
		},
		extraStats: {
			tacticalReload: 2.25,
			reload: 2.25,
			equipDelays: [0.45, 0.5],
			ammoPickup: [1.35, 1.89],
			recoilHorizontal: 1.35,
			recoilVertical: [3.24, 4.86],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		}
	},
	'Crosskill Chunky Compact Pistol': {
		name: 'Crosskill Chunky Compact Pistol',
		image: '',
		source: content['Jiu Feng Smuggler Pack'],
		inventorySlot: 'secondary',
		reputation: 6,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 134e3,
		stats: {
			magazine: 12,
			totalAmmo: 60,
			rateOfFire: 480,
			damage: 110,
			accuracy: 64,
			stability: 40,
			concealment: 28,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.5, 2.1],
			recoilHorizontal: 0.8,
			recoilVertical: [3.2, 3.6],
			spread: 2.16,
			damageModifier: [1.0, 0.7]
		}
	},
	'White Streak Pistol': {
		name: 'White Streak Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 14,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 305e3,
		stats: {
			magazine: 12,
			totalAmmo: 60,
			rateOfFire: 400,
			damage: 120,
			accuracy: 68,
			stability: 40,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.5, 2.1],
			recoilHorizontal: 1.0,
			recoilVertical: [2.4, 3.6],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Baby Deagle': {
		name: 'Baby Deagle',
		image: '',
		source: content['The Point Break Heists'],
		inventorySlot: 'secondary',
		reputation: 14,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 305e3,
		stats: {
			magazine: 12,
			totalAmmo: 60,
			rateOfFire: 400,
			damage: 120,
			accuracy: 68,
			stability: 40,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.5, 2.1],
			recoilHorizontal: 1.0,
			recoilVertical: [2.4, 3.6],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'M13 9mm Pistol': {
		name: 'M13 9mm Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 15,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 327e3,
		stats: {
			magazine: 13,
			totalAmmo: 156,
			rateOfFire: 545,
			damage: 53,
			accuracy: 44,
			stability: 56,
			concealment: 30,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.5,
			reload: 2.15,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.9, 5.46],
			recoilHorizontal: 0.8,
			recoilVertical: [1.92, 2.88],
			spread: 3.36,
			damageModifier: [1.0, 0.7]
		}
	},
	'Chimano Custom Pistol': {
		name: 'Chimano Custom Pistol',
		image: '',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 22,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 487e3,
		stats: {
			magazine: 16,
			totalAmmo: 96,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 60,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.2,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.4, 3.36],
			recoilHorizontal: 0.75,
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Broomstick Pistol': {
		name: 'Broomstick Pistol',
		image: '',
		source: content['Gage Historical Pack'],
		inventorySlot: 'secondary',
		reputation: 23,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 510e3,
		stats: {
			magazine: 10,
			totalAmmo: 90,
			rateOfFire: 480,
			damage: 80,
			accuracy: 80,
			stability: 68,
			concealment: 28,
			threat: 10
		},
		extraStats: {
			tacticalReload: 4.0,
			reload: 4.17,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.25, 3.15],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 1.2,
			damageModifier: [1.0, 0.7]
		}
	},
	'Parabellum Pistol': {
		name: 'Parabellum Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 25,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 557e3,
		stats: {
			magazine: 8,
			totalAmmo: 56,
			rateOfFire: 400,
			damage: 180,
			accuracy: 76,
			stability: 32,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.33,
			reload: 2.1,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.4, 1.96],
			recoilHorizontal: 1.1,
			recoilVertical: [2.64, 3.96],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		}
	},
	'5/7 AP Pistol': {
		name: '5/7 AP Pistol',
		image: '',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 26,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 581e3,
		stats: {
			magazine: 15,
			totalAmmo: 45,
			rateOfFire: 600,
			damage: 120,
			accuracy: 48,
			stability: 44,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.5,
			reload: 2.15,
			equipDelays: [0.35, 0.5],
			ammoPickup: [0.23, 0.67],
			recoilHorizontal: 0.95,
			recoilVertical: [2.28, 3.42],
			spread: 3.12,
			damageModifier: [1.0, 0.7]
		}
	},
	'Castigo .44 Revolver': {
		name: 'Castigo .44 Revolver',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 26,
		weaponType: 'Pistol',
		firingMode: 'Double action',
		cost: 581e3,
		stats: {
			magazine: 6,
			totalAmmo: 54,
			rateOfFire: 400,
			damage: 180,
			accuracy: 76,
			stability: 12,
			concealment: 28,
			threat: 24
		},
		extraStats: {
			tacticalReload: 2.97,
			reload: 2.97,
			equipDelays: [0.45, 0.5],
			ammoPickup: [1.35, 1.89],
			recoilHorizontal: 1.35,
			recoilVertical: [3.24, 4.86],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		}
	},
	'Contractor Pistol': {
		name: 'Contractor Pistol',
		image: '',
		source: content['John Wick Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 26,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 581e3,
		stats: {
			magazine: 15,
			totalAmmo: 90,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 68,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.52,
			reload: 2.32,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.25, 3.15],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'Frenchman Model 87 Revolver': {
		name: 'Frenchman Model 87 Revolver',
		image: '',
		source: content['Gunslinger Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 26,
		weaponType: 'Pistol',
		firingMode: 'Double action',
		cost: 581e3,
		stats: {
			magazine: 6,
			totalAmmo: 66,
			rateOfFire: 400,
			damage: 130,
			accuracy: 76,
			stability: 36,
			concealment: 26,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.47,
			reload: 2.47,
			equipDelays: [0.45, 0.5],
			ammoPickup: [1.65, 2.31],
			recoilHorizontal: 0.63,
			recoilVertical: [3.36, 2.73],
			spread: 1.44,
			damageModifier: [1.0, 0.7]
		}
	},
	'Chimano Compact Pistol': {
		name: 'Chimano Compact Pistol',
		image: '',
		source: source.Community,
		inventorySlot: 'secondary',
		reputation: 27,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 605e3,
		stats: {
			magazine: 10,
			totalAmmo: 150,
			rateOfFire: 545,
			damage: 53,
			accuracy: 52,
			stability: 68,
			concealment: 30,
			threat: 4
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.75, 5.25],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'Crosskill Guard Pistol': {
		name: 'Crosskill Guard Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 27,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 605e3,
		stats: {
			magazine: 17,
			totalAmmo: 153,
			rateOfFire: 545,
			damage: 53,
			accuracy: 64,
			stability: 68,
			concealment: 30,
			threat: 8
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [3.83, 5.36],
			recoilHorizontal: 0.65,
			recoilVertical: [1.56, 2.34],
			spread: 2.16,
			damageModifier: [1.0, 0.7]
		}
	},
	'LEO Pistol': {
		name: 'LEO Pistol',
		image: '',
		source: content['The Bomb Heists'],
		inventorySlot: 'secondary',
		reputation: 28,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 628e3,
		stats: {
			magazine: 19,
			totalAmmo: 95,
			rateOfFire: 480,
			damage: 80,
			accuracy: 68,
			stability: 60,
			concealment: 29,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: 0.5,
			ammoPickup: [2.38, 3.33],
			recoilHorizontal: 0.75,
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		}
	},
	'STRYK 18c Pistol': {
		name: 'STRYK 18c Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 29,
		weaponType: 'Pistol',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 20,
			totalAmmo: 160,
			rateOfFire: 909,
			damage: 35,
			accuracy: 52,
			stability: 64,
			concealment: 29,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.6, 5.6],
			recoilHorizontal: 0.42,
			recoilVertical: [0.42, 0.56],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		}
	},
	'Bernetti Auto Pistol': {
		name: 'Bernetti Auo Pistol',
		image: '',
		source: content['Federales Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 29,
		weaponType: 'Pistol',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 15,
			totalAmmo: 195,
			rateOfFire: 1101,
			damage: 25,
			accuracy: 40,
			stability: 72,
			concealment: 28,
			threat: 10
		},
		extraStats: {
			tacticalReload:  1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.95, 6.83],
			recoilHorizontal: 0.24,
			recoilVertical: [0.48, 0.6],
			spread: 3.6,
			damageModifier: [1.0, 0.7]
		}
	},
	'Czech 92 Pistol': {
		name: 'Czech 92 Pistol',
		image: '',
		source: content['Federales Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 29,
		weaponType: 'Pistol',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 15,
			totalAmmo: 150,
			rateOfFire: 1000,
			damage: 38,
			accuracy: 60,
			stability: 68,
			concealment: 26,
			threat: 10
		},
		extraStats: {
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.5, 5.25],
			recoilHorizontal: [-0.65, 0.39],
			recoilVertical: [0.65, 0.52],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'Igor Automatik Pistol': {
		name: 'Igor Automatik Pistol',
		image: '',
		source: content['Federales Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 29,
		weaponType: 'Pistol',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 20,
			totalAmmo: 80,
			rateOfFire: 750,
			damage: 65,
			accuracy: 56,
			stability: 36,
			concealment: 25,
			threat: 8
		},
		extraStats: {
			tacticalReload: 2.0,
			reload: 2.7,
			equipDelays: [0.35, 0.5],
			ammoPickup: [0.8, 2.8],
			recoilHorizontal: 0.63,
			recoilVertical: [0.63, 0.84],
			spread: 2.64,
			damageModifier: [1.0, 0.7]
		}
	},
	'HOLT 9mm Pistol': {
		name: 'HOLT 9mm Pistol',
		image: '',
		source: content['Fugitive Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 30,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 676e3,
		stats: {
			magazine: 15,
			totalAmmo: 90,
			rateOfFire: 480,
			damage: 80,
			accuracy: 60,
			stability: 76,
			concealment: 28,
			threat: 9
		},
		extraStats: {
			tacticalReload: 1.5,
			reload: 2.15,
			equipDelays: [0.35, 0.5],
			ammoPickup: [2.25, 3.15],
			recoilHorizontal: 0.55,
			recoilVertical: [1.32, 1.98],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		}
	},
	'Peacemaker .45 Revolver': {
		name: 'Peacemaker .45 Revolver',
		image: '',
		source: content['The Butcher\'s Western Pack'],
		inventorySlot: 'secondary',
		reputation: 31,
		weaponType: 'Pistol',
		firingMode: 'Single action',
		cost: 700e3,
		stats: {
			magazine: 6,
			totalAmmo: 54,
			rateOfFire: 400,
			damage: 180,
			accuracy: 84,
			stability: 20,
			concealment: 26,
			threat: 28
		},
		extraStats: {
			tacticalReload: [3.76, 0.67],
			reload: 7.09,
			equipDelays: 0.65,
			ammoPickup: [1.35, 1.89],
			recoilHorizontal: 1.25,
			recoilVertical: [7.25, 7.5],
			spread: 0.96,
			damageModifier: [1.0, 0.8]
		}
	},
	'Matever .357 Revolver': {
		name: 'Matever .357 Revoler',
		image: '',
		source: content['The Alesso Heist'],
		inventorySlot: 'secondary',
		reputation: 34,
		weaponType: 'Pistol',
		firingMode: 'Double action',
		cost: 773e3,
		stats: {
			magazine: 6,
			totalAmmo: 54,
			rateOfFire: 400,
			damage: 180,
			accuracy: 84,
			stability: 20,
			concealment: 20,
			threat: 24
		},
		extraStats: {
			tacticalReload: 3.6,
			reload: 3.6,
			equipDelays: [0.45, 0.5],
			ammoPickup: [1.35, 1.89],
			recoilHorizontal: 1.25,
			recoilVertical: [3.0, 4.5],
			spread: 0.96,
			damageModifier: [1.0, 0.8]
		}
	},
	'Deagle Pistol': {
		name: 'Deagle Pistol',
		image: '',
		source: source['Base Game'],
		inventorySlot: 'secondary',
		reputation: 36,
		weaponType: 'Pistol',
		firingMode: 'Semi-Automatic',
		cost: 822e3,
		stats: {
			magazine: 10,
			totalAmmo: 60,
			rateOfFire: 400,
			damage: 120,
			accuracy: 76,
			stability: 36,
			concealment: 28,
			threat: 24
		},
		extraStats: {
			tacticalReload: 1.85,
			reload: 3.1,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.5, 2.1],
			recoilHorizontal: 1.05,
			recoilVertical: [2.52, 3.78],
			spread: 1.44,
			damageModifier: [1.0, 0.7]
		}
	}
}

export default pistols