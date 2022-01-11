import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import ammunition, { AmmunitionModificationsList } from '../modifications/ammunition'
import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import boost, { BoostModificationsList } from '../modifications/boost'
import custom from '../modifications/custom'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReceiver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
import upperReceiver from '../modifications/upperReceiver'
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

export type SecondaryShotgunList =
	'Locomotive 12G Shotgun' |
	'GSPS 12G Shotgun' |
	'Goliath 12G Shotgun' |
	'Grimm 12G Shotgun' |
	'Street Sweeper Shotgun' |
	'The Judge Shotgun' |
	'Claire 12G Shotgun'

const shotguns: Record<SecondaryShotgunList, WeaponData> = {
	'Locomotive 12G Shotgun': {
		name: 'Locomotive 12G Shotgun',
		image: 'serbu',
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
			threat: 28,
			reload: 5.0
		},
		extraStats: {
			tacticalReload: [1.77, 0.57],
			equipDelays: [0.6, 0.7],
			ammoPickup: [0.42, 1.47],
			recoilHorizontal: [-0.38, 0.38],
			recoilVertical: [3.61, 3.8],
			spread: 3.12,
			damageModifier: [1.0, 0.6]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			magazine: [
				magazine['Extended Mag. (Locomotive)']
			],
			sight: mainSight,
			stock: [
				stock['Standard Stock (Main)'],
				stock['Standard Stock (Locomotive)'],
				stock['Police Shorty Stock'],
				stock['Tactical Stock (Main)'],
				stock['Tactical Shorty Stock'],
				stock['Muldon Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			],
			upperReceiver: [
				upperReceiver['Shell Rack']
			]
		}
	},
	'GSPS 12G Shotgun': {
		name: 'GSPS 12G Shotgun',
		image: 'm37',
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
			threat: 28,
			reload: 6.75
		},
		extraStats: {
			tacticalReload: [2.45, 0.65],
			equipDelays: [0.85, 0.85],
			ammoPickup: [0.28, 0.98],
			recoilHorizontal: [-0.3, 0.3],
			recoilVertical: [2.85, 3.0],
			spread: 3.36,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			barrel: [
				barrel['Riot Barrel']
			],
			boost: mainBoost,
			gadget: mainGadget,
			stock: [
				stock['Stakeout Stock']
			]
		}
	},
	'Goliath 12G Shotgun': {
		name: 'Goliath 12G Shotgun',
		image: 'rota',
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
			threat: 28,
			reload: 2.55
		},
		extraStats: {
			tacticalReload: 2.55,
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-0.34, 0.34],
			recoilVertical: [3.23, 3.4],
			spread: 2.64,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Short Barrel (Goliath)'],
				barrel['Silenced Barrel (Goliath)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'Grimm 12G Shotgun': {
		name: 'Grimm 12G Shotgun',
		image: 'basset',
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
			threat: 28,
			reload: 2.9
		},
		extraStats: {
			tacticalReload: 2.16,
			equipDelays: [0.55, 0.55],
			ammoPickup: [5.2, 7.8],
			recoilHorizontal: [-0.32, 0.32],
			recoilVertical: [3.04, 3.2],
			spread: 5.28,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: [
				custom['Single Fire'],
				custom['Auto Fire']
			],
			foregrip: [
				foregrip['Little Brother Foregrip']
			],
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Big Brother Magazine']
			],
			sight: mainSight
		}
	},
	'Street Sweeper Shotgun': {
		name: 'Street Sweeper Shotgun',
		image: 'striker',
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
			threat: 28,
			reload: 8.0
		},
		extraStats: {
			tacticalReload: [2.26, 0.52],
			equipDelays: [0.85, 0.6],
			ammoPickup: [3.6, 5.4],
			recoilHorizontal: [-0.34, 0.34],
			recoilVertical: [3.23, 3.4],
			spread: 4.32,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			barrel: [
				barrel['Long Barrel (Street Sweeper)'],
				barrel['Suppressed Barrel (Street Sweeper)']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'The Judge Shotgun': {
		name: 'The Judge Shotgun',
		image: 'judge',
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
			threat: 28,
			reload: 2.25
		},
		extraStats: {
			tacticalReload: 2.25,
			equipDelays: [0.45, 0.5],
			ammoPickup: [0.18, 0.53],
			recoilHorizontal: [-1.05, 1.05],
			recoilVertical: [6.09, 6.3],
			spread: 2.88,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			lowerReceiver: [
				lowerReceiver['Custom Reinforced Frame']
			]
		}
	},
	'Claire 12G Shotgun': {
		name: 'Claire 12G Shotgun',
		image: 'coach',
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
			threat: 28,
			reload: 2.2
		},
		extraStats: {
			tacticalReload: 2.2,
			equipDelays: [0.4, 0.6],
			ammoPickup: [0.22, 0.66],
			recoilHorizontal: [-0.68, 0.51],
			recoilVertical: [2.89, 3.06],
			spread: 2.64,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Sawed Off Barrel (Claire)']
			],
			boost: mainBoost,
			stock: [
				stock['Deadman\'s Stock']
			]
		}
	}
}

export default shotguns