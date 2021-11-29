import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import ammunition, { AmmunitionModificationsList } from '../modifications/ammunition'
import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import boost, { BoostModificationsList } from '../modifications/boost'
import custom, { CustomModificationsList } from '../modifications/custom'
import extra from '../modifications/extra'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReciver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
import upperReciever from '../modifications/upperReceiver'
import { Modification, WeaponData } from '../weaponTypes'

const mainAmmunition: Modification<AmmunitionModificationsList>[] = [
	ammunition['000 Buckshot (Community)'],
	ammunition['000 Buckshot (DLC)'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

const mainBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Accuracy (- Shotguns)'],
	boost['Team Boost']
]

const mainCustom: Modification<CustomModificationsList>[] = [
	custom['Single Fire'],
	custom['Auto Fire']
]

const mainGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
]

const mainGadgetMagnifier: Modification<GadgetModificationsList>[] = [
	...mainGadget,
	gadget['Riktpunkt Magnifier Gadget'],
	gadget['Signature Magnifier Gadget']
]

const mainSight: Modification<SightModificationsList>[] = [
	sight['The Professional\'s Choice Sight'],
	sight['Surgeon Sight'],
	sight['See More Sight'],
	sight['Combat Sight'],
	sight['Speculator Sight'],
	sight['Trigonom Sight'],
	sight['Holographic Sight'],
	sight['Compact Holosight'],
	sight['Solar Sight'],
	sight['Military Red Dot Sight (1)'],
	sight['Military Red Dot Sight (2)'],
	sight['Milspec Scope'],
	sight['Acough Optic Scope'],
	sight['Compact Profile Sight'],
	sight['Maelstrom Sight'],
	sight['Advanced Combat Sight'],
	sight['Reconnaissance Sight']
]

export type PrimaryShotgunList =
	'Predator 12G Shotgun' |
	'Breaker 12G Shotgun' |
	'Reinfeld 880 Shotgun' |
	'Mosconi 12G Tactical Shotgun' |
	'M1014 Shotgun' |
	'Raven Shotgun' |
	'IZHMA 12G Shotgun' |
	'Reinfeld 88 Shotgun' |
	'Mosconi 12G Shotgun' |
	'Joceline O/U 12G Shotgun' |
	'Steakout 12G Shotgun'

const shotguns: Record<PrimaryShotgunList, WeaponData> = {
	'Predator 12G Shotgun': {
		name: 'Predator 12G Shotgun',
		image: 'spas12',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Extended Mag']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Folded Stock (Predator)'],
				stock['Solid Stock (Predator)'],
				stock['No Stock (Predator)']
			]
		}
	},
	'Breaker 12G Shotgun': {
		name: 'Breaker 12G Shotgun',
		image: 'boot',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			barrel: [
				barrel['Long Barrel (Breaker)'],
				barrel['Short Barrel (Breaker)']
			],
			boost: mainBoost,
			gadget: mainGadget,
			lowerReceiver: [
				lowerReciver['Treated Body']
			],
			stock: [
				stock['Long Stock']
			]
		}
	},
	'Reinfeld 880 Shotgun': {
		name: 'Reinfeld 880 Shotgun',
		image: 'r870',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			foregrip: [
				foregrip['Zombie Hunter Pump']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			magazine: [
				magazine['Extended Mag. (Reinfeld 880)']
			],
			sight: mainSight,
			stock: [
				stock['Standard Stock (Main)'],
				stock['Short Enough Stock'],
				stock['Tactical Stock (Main)'],
				stock['Short Enough Tactical Stock'],
				stock['Government Issue Tactical Stock'],
				stock['Muldon Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			],
			upperReceiver: [
				upperReciever['Shell Rack']
			]
		}
	},
	'Mosconi 12G Tactical Shotgun': {
		name: 'Mosconi 12G Tactical Shotgun',
		image: 'm590',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['CE Extender'],
				barrel['CE Muffler']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Titanium Skeleton Grip']
			],
			lowerReceiver: [
				lowerReciver['CE Rail Stabilizer']
			],
			sight: mainSight
		}
	},
	'M1014 Shotgun': {
		name: 'M1014 Shotgun',
		image: 'benelli',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Short Barrel (M1014)'],
				barrel['Long Barrel (M1014)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Collapsed Stock'],
				stock['Tactical Stock (M1014)']
			]
		}
	},
	'Raven Shotgun': {
		name: 'Raven Shotgun',
		image: 'ksg',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Short Barrel (Raven)'],
				barrel['Long Barrel (Raven)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'IZHMA 12G Shotgun': {
		name: 'IZHMA 12G Shotgun',
		image: 'saiga',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Short Barrel (IZHMA)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['Scope Mount (AK)']
			],
			foregrip: [
				foregrip['The Tactical Russian Rail'],
				foregrip['Hollow Handle']
			],
			gadget: mainGadget,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			magazine: [
				magazine['Big Brother Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Standard Stock (Main)'],
				stock['Tactical Stock (Main)'],
				stock['Skeletal Stock (Main)'],
				stock['Wooden Sniper Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['Classic Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
		}
	},
	'Reinfeld 88 Shotgun': {
		name: 'Reinfeld 88 Shotgun',
		image: 'm1897',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Huntsman Barrel'],
				barrel['Ventilated Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			stock: [
				stock['Artisan Stock']
			]
		}
	},
	'Mosconi 12G Shotgun': {
		name: 'Mosconi 12G Shotgun',
		image: 'huntsman',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			boost: mainBoost,
			barrel: [
				barrel['Road Warrior Barrel']
			],
			stock: [
				stock['Gangsta Special Stock']
			]
		}
	},
	'Joceline O/U 12G Shotgun': {
		name: 'Joceline O/U 12G Shotgun',
		image: 'b682',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			boost: mainBoost,
			barrel: [
				barrel['Sawed Off Barrel (Joceline)']
			],
			stock: [
				stock['Luxurious Ammo Pouch'],
				stock['Wrist Wrecker Stock']
			]
		}
	},
	'Steakout 12G Shotgun': {
		name: 'Steakout 12G Shotgun',
		image: 'aa12',
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
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Long Barrel (Steakout)'],
				barrel['Suppressed Barrel (Steakout)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Drum Mag']
			],
			sight: mainSight
		}
	}
}

export default shotguns