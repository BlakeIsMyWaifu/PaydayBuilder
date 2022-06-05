import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import ammunition from '../modifications/ammunition'
import barrel from '../modifications/barrel'
import boost, { BoostModificationsList } from '../modifications/boost'
import extra from '../modifications/extra'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReceiver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
import upperReceiver from '../modifications/upperReceiver'
import { Modification, WeaponData } from '../weaponTypes'

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

const mainBoostTotalAmmo: Modification<BoostModificationsList>[] = [
	...mainBoost,
	boost['Total Ammo (Main)']
]

const mainGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
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
	sight['Acough Optic Scope']
]

export type PrimarySpecialList =
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
	'GL40 Grenade Launcher'

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
			threat: 24,
			reload: 3.75
		},
		extraStats: {
			tacticalReload: 3.75,
			equipDelays: [0.8, 0.8],
			ammoPickup: null,
			recoilHorizontal: [-2.4, 2.4],
			recoilVertical: [2.4, -2.4],
			spread: null,
			damageModifier: null
		},
		modifications: {
			boost: mainBoostTotalAmmo,
			lowerReceiver: [
				lowerReceiver['Silent Motor'],
				lowerReceiver['Fast Motor']
			],
			magazine: [
				magazine['Durable Blade'],
				magazine['Sharp Blade']
			]
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
			threat: 37,
			reload: 0.33
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.55, 0.55],
			ammoPickup: null,
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Arrows (Plainsrider)'],
				ammunition['Poisoned Arrows (Plainsrider)']
			],
			boost: [
				...mainBoostTotalAmmo,
				boost['Total Ammo (Plainsrider)']
			]
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
			threat: 10,
			reload: 1.5
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.6, 0.6],
			recoilVertical: [-0.12, 0.24],
			spread: 0.17,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Bolt (Light Crossbow)'],
				ammunition['Poison Bolt (Light Crossbow)']
			],
			boost: mainBoostTotalAmmo
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
			threat: 10,
			reload: 3.0
		},
		extraStats: {
			tacticalReload: 3.0,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.9, 0.9],
			recoilVertical: [-0.18, 0.36],
			spread: 0.67,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Arrow (Airbow)'],
				ammunition['Poison Arrow (Airbow)']
			],
			boost: mainBoostTotalAmmo,
			sight: mainSight,
			stock: [
				stock['Light Stock (Airbow)']
			]
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
			threat: 37,
			reload: 1.5
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Arrow (English Longbow)'],
				ammunition['Poison Arrow (English Longbow)']
			],
			boost: mainBoostTotalAmmo
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
			threat: 31,
			reload: 7.8
		},
		extraStats: {
			tacticalReload: 7.8,
			equipDelays: [0.9, 1.5],
			ammoPickup: [7.5, 26.25],
			recoilHorizontal: [-0.36, 0.48],
			recoilVertical: [-0.12, 0.24],
			spread: 4.08,
			damageModifier: null
		},
		modifications: {
			boost: mainBoostTotalAmmo,
			gadget: mainGadget,
			upperReceiver: [
				upperReceiver['Heat Sink Barrel'],
				upperReceiver['XS Heat Sink Barrel'],
				upperReceiver['XS Barrel']
			]
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
			threat: 37,
			reload: 1.3
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.85, 0.85],
			ammoPickup: null,
			recoilHorizontal: [-0.12, 0.12],
			recoilVertical: [1.08, 1.2],
			spread: 0.24,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Arrow (DECA)'],
				ammunition['Poison Arrow (DECA)']
			],
			boost: mainBoostTotalAmmo,
			grip: [
				grip['Wooden Grip (DECA)'],
				grip['Ergonomic Grip (DECA)']
			],
			sight: [
				...mainSight,
				sight['Compact Profile Sight'],
				sight['Maelstrom Sight'],
				sight['Advanced Combat Sight'],
				sight['Reconnaissance Sight']
			],
			upperReceiver: [
				upperReceiver['Tactical Frame']
			]
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
			threat: 31,
			reload: 7.8
		},
		extraStats: {
			tacticalReload: 7.8,
			equipDelays: [0.9, 0.9],
			ammoPickup: [7.5, 26.25],
			recoilHorizontal: [-0.36, 0.48],
			recoilVertical: [-0.12, 0.24],
			spread: 4.08,
			damageModifier: null
		},
		modifications: {
			barrel: [
				barrel['Aerial Assault Barrel'],
				barrel['The Stump Barrel']
			],
			boost: mainBoostTotalAmmo,
			extra: [
				extra['I\'ll Take Half That Kit']
			],
			gadget: mainGadget
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
			threat: 10,
			reload: 2.5
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.5, 0.7],
			ammoPickup: null,
			recoilHorizontal: [-0.6, 0.6],
			recoilVertical: [-0.12, 0.24],
			spread: 0.17,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Bolt (Heavy Crossbow)'],
				ammunition['Poison Bolt (Heavy Crossbow)']
			],
			boost: mainBoostTotalAmmo
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
			threat: 37,
			reload: 19.21
		},
		extraStats: {
			tacticalReload: [9.21, 2.0],
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Incendiary Round']
			],
			barrel: [
				barrel['Short Barrel (Piglet)']
			],
			boost: mainBoost,
			gadget: [
				...mainGadget,
				gadget['Riktpunkt Magnifier Gadget'],
				gadget['Signature Magnifier Gadget']
			],
			sight: [
				...mainSight,
				sight['Compact Profile Sight'],
				sight['Maelstrom Sight'],
				sight['Advanced Combat Sight'],
				sight['Reconnaissance Sight']
			],
			stock: [
				stock['Tactical Stock (Main)'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['No Stock (Piglet)'],
				stock['Contractor Stock']
			]
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
			threat: 37,
			reload: 8.5
		},
		extraStats: {
			tacticalReload: 8.5,
			equipDelays: [0.85, 0.85],
			ammoPickup: [4.5, 13.5],
			recoilHorizontal: [0.0, 0.0],
			recoilVertical: [0.0, 0.0],
			spread: 6.0,
			damageModifier: null
		},
		modifications: {
			boost: [
				...mainBoostTotalAmmo,
				boost['Damage (Flamethrower)']
			],
			magazine: [
				magazine.Rare,
				magazine['Well Done']
			]
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
			threat: 37,
			reload: 3.1
		},
		extraStats: {
			tacticalReload: null,
			equipDelays: [0.6, 0.6],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [1.74, 1.8],
			spread: 0.24,
			damageModifier: null
		},
		modifications: {
			ammunition: [
				ammunition['Incendiary Round']
			],
			barrel: [
				barrel['Pirate Barrel']
			],
			boost: mainBoost,
			stock: [
				stock['Sawed-off Stock']
			]
		}
	}
}

export default specials