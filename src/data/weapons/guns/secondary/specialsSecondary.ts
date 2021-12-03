import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import ammunition from '../modifications/ammunition'
import barrel from '../modifications/barrel'
import boost, { BoostModificationsList } from '../modifications/boost'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReceiver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
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
	sight['Acough Optic Scope'],
	sight['Compact Profile Sight'],
	sight['Maelstrom Sight'],
	sight['Advanced Combat Sight'],
	sight['Reconnaissance Sight']
]

export type SecondarySpecialList =
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
		name: 'Pistol Crossbow',
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
		},
		modifications: {
			ammunition: [
				ammunition['Explosive Bolts (Pistol Crossbow)'],
				ammunition['Poisoned Bolts (Pistol Crossbow)']
			],
			barrel: [
				barrel['Carbon Limb'],
				barrel['Skeletal Limb']
			],
			boost: mainBoostTotalAmmo,
			grip: [
				grip['Camo Grip'],
				grip['Walnut Grip']
			],
			sight: [
				sight['Pistol Red Dot Sight'],
				sight['SKOLD Micro Reflex Sight'],
				sight['Riktpunkt Holosight']
			]
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
		},
		modifications: {
			ammunition: [
				ammunition['Incendiary Round']
			],
			boost: mainBoost,
			gadget: mainGadget,
			sight: mainSight
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
		},
		modifications: {
			boost: mainBoost,
			gadget: [
				gadget['Riktpunkt Magnifier Gadget']
			],
			sight: mainSight
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
		},
		modifications: {
			ammunition: [
				ammunition['Incendiary Round']
			],
			boost: mainBoost,
			stock: [
				stock['Riot Stock']
			]
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
		},
		modifications: {
			boost: mainBoost
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
		},
		modifications: {
			barrel: [
				barrel['Merlin Nozzle']
			],
			boost: mainBoostTotalAmmo,
			gadget: mainGadget,
			magazine: [
				magazine['High Temperature Mixture'],
				magazine['Low Temperature Mixture']
			]
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
		},
		modifications: {
			ammunition: [
				ammunition['Incendiary Round']
			],
			barrel: [
				barrel['Bombardier Barrel'],
				barrel['Long Barrel (Arbiter)']
			],
			boost: mainBoost,
			gadget: [
				...mainGadget,
				gadget['Riktpunkt Magnifier Gadget'],
				gadget['Signature Magnifier Gadget']
			],
			sight: mainSight
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
	}
}

export default specials