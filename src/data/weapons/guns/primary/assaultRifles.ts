import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import boost, { BoostModificationsList } from '../modifications/boost'
import custom, { CustomModificationsList } from '../modifications/custom'
import extra from '../modifications/extra'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReceiver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
import upperReceiver from '../modifications/upperReceiver'
import { Modification, WeaponData } from '../weaponTypes'

const mainBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Low Profile Suppressor'],
	barrelExt['Medium Suppressor'],
	barrelExt['The Bigger The Better Suppressor'],
	barrelExt['Stubby Compensator'],
	barrelExt['The Tank Compensator'],
	barrelExt['Fire Breather Nozzle'],
	barrelExt['Tactical Compensator'],
	barrelExt['Competitor\'s Compensator'],
	barrelExt['Funnel of Fun Nozzle'],
	barrelExt['Ported Compensator']
]

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
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
	gadget['LED Combo'],
	gadget['Riktpunkt 45 degree Sight'],
	gadget['45 degree red-dot sight'],
	gadget['45 Degree Ironsights']
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

export type AssaultRifleList =
	'AMCAR Rifle' |
	'Commando 553 Rifle' |
	'Eagle Heavy Rifle' |
	'Union 5.56 Rifle' |
	'AK Rifle' |
	'CAR-4 Rifle' |
	'UAR Rifle' |
	'KETCHNOV Byk-1 Assault Rifle' |
	'Cavity 9mm' |
	'AK.762' |
	'JP36 Rifle' |
	'AK17 Rifle' |
	'Golden AK.762 Rifle' |
	'Bootleg Rifle' |
	'Queen\'s Wrath Rifle' |
	'Galant Rifle' |
	'M308 Rifle' |
	'Clarion Rifle' |
	'Lion\'s Roar Rifle' |
	'Valkyria Rifle' |
	'AK5 Rifle' |
	'Gecko 7.62 Rifle' |
	'Tempest-21 Rifle' |
	'AMR-16 Rifle' |
	'Little Friend 7.62 Assault Rifle' |
	'Falcon Rifle' |
	'Gewehr 3 Rifle'

const assaultRifles: Record<AssaultRifleList, WeaponData> = {
	'AMCAR Rifle': {
		name: 'AMCAR Rifle',
		image: 'amcar',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 20,
			totalAmmo: 220,
			rateOfFire: 545,
			damage: 42,
			accuracy: 36,
			stability: 76,
			concealment: 21,
			threat: 14,
			reload: 3.0
		},
		extraStats: {
			tacticalReload: 2.25,
			equipDelays: [0.55, 0.6],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [0.66, 0.88],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Milspec Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
		}
	},
	'Commando 553 Rifle': {
		name: 'Commando 553 Rifle',
		image: 's552',
		source: content['Armored Transport'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 240,
			rateOfFire: 714,
			damage: 42,
			accuracy: 36,
			stability: 56,
			concealment: 22,
			threat: 12,
			reload: 2.4
		},
		extraStats: {
			tacticalReload: 1.65,
			equipDelays: [0.7, 0.55],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.6, 1.6],
			recoilVertical: [0.96, 1.28],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (Commando)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Enhanced Foregrip'],
				foregrip['Railed Foregrip (Commando)']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Enhanced Grip']
			],
			sight: mainSight,
			stock: [
				stock['Tactical Stock (Main)'],
				stock['Enhanced Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			],
			upperReceiver: [
				upperReceiver['Heat Treated Body']
			]
		}
	},
	'Eagle Heavy Rifle': {
		name: 'Eagle Heavy Rifle',
		image: 'scar',
		source: content['Gage Weapon Pack #01'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 100,
			rateOfFire: 612,
			damage: 98,
			accuracy: 72,
			stability: 44,
			concealment: 8,
			threat: 22,
			reload: 3.15
		},
		extraStats: {
			tacticalReload: 2.2,
			equipDelays: [0.5, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (Eagle Heavy)'],
				barrel['Long Barrel (Eagle Heavy)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Rail Extension']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			sight: mainSight,
			stock: [
				stock['Sniper Stock (Eagle Heavy)']
			]
		}
	},
	'Union 5.56 Rifle': {
		name: 'Union 5.56 Rifle',
		image: 'corgi',
		source: source['Reservoir Dogs'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 857,
			damage: 58,
			accuracy: 68,
			stability: 68,
			concealment: 20,
			threat: 12,
			reload: 2.9
		},
		extraStats: {
			tacticalReload: 2.1,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (Union)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Vintage Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			lowerReceiver: [
				lowerReceiver['Dunes Tactical Receiver']
			]
		}
	},
	'AK Rifle': {
		name: 'AK Rifle',
		image: 'ak74',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 1,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 652,
			damage: 56,
			accuracy: 48,
			stability: 60,
			concealment: 16,
			threat: 14,
			reload: 3.87
		},
		extraStats: {
			tacticalReload: 2.8,
			equipDelays: [0.5, 0.5],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 3.12,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['AK Slavic Dragon Barrel'],
				barrel['Modern Barrel'],
				barrel['DMR Kit (AK)']
			],
			barrelExt: [
				...mainBarrelExt,
				barrelExt['PBS Suppressor']
			],
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['Scope Mount (AK)']
			],
			foregrip: [
				foregrip['Railed Wooden Grip'],
				foregrip['The Tactical Russian Handguard'],
				foregrip['Battleproven Handguard'],
				foregrip['Lightweight Rail'],
				foregrip['Crabs Rail'],
				foregrip['Keymod Rail']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			magazine: [
				magazine['AK Quadstacked Mag'],
				magazine['Low Drag Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Standard Stock (Main)'],
				stock['Tactical Stock (Main)'],
				stock['Folding Stock'],
				stock['Wooden Sniper Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['Classic Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
		}
	},
	'CAR-4 Rifle': {
		name: 'CAR-4 Rifle',
		image: 'new_m4',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 4,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 95e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 600,
			damage: 52,
			accuracy: 44,
			stability: 60,
			concealment: 20,
			threat: 14,
			reload: 3.34
		},
		extraStats: {
			tacticalReload: 2.67,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 3.36,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (CAR)'],
				barrel['Short Barrel (CAR)'],
				barrel['Stealth Barrel'],
				barrel['DMR Kit (CAR)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Aftermarket Special Handguard'],
				foregrip['Competition Foregrip'],
				foregrip['Gazelle Rail'],
				foregrip['OVAL Foregrip'],
				foregrip['E.M.O. Foregrip']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			lowerReceiver: [
				lowerReceiver['THRUST Lower Receiver']
			],
			magazine: [
				magazine['Vintage Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Tactical Stock (Main)'],
				stock['Folding Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			],
			upperReceiver: [
				upperReceiver['Exotique Receiver'],
				upperReceiver['LW Upper Receiver'],
				upperReceiver['THRUST Upper Receiver']
			]
		}
	},
	'UAR Rifle': {
		name: 'UAR Rifle',
		image: 'aug',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 8,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 176e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 750,
			damage: 55,
			accuracy: 64,
			stability: 40,
			concealment: 20,
			threat: 14,
			reload: 3.3
		},
		extraStats: {
			tacticalReload: 2.5,
			equipDelays: [0.5, 0.5],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-2.0, 2.0],
			recoilVertical: [1.2, 1.6],
			spread: 2.16,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (UAR)'],
				barrel['Long Barrel (UAR)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['A3 Tactical Foregrip']
			],
			gadget: mainGadgetMagnifier,
			lowerReceiver: [
				lowerReceiver['Raptor Polymer Body']
			],
			magazine: [
				magazine['Speed Pull Magazine']
			],
			sight: mainSight
		}
	},
	'KETCHNOV Byk-1 Assault Rifle': {
		name: 'KETCHNOV Byk-1 Assault Rifle',
		image: 'groza',
		source: content['Jiu Feng Smuggler Pack 2'],
		inventorySlot: 'primary',
		reputation: 12,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 261e3,
		stats: {
			magazine: 20,
			totalAmmo: 80,
			rateOfFire: 698,
			damage: 88,
			accuracy: 72,
			stability: 52,
			concealment: 8,
			threat: 12,
			reload: 2.9
		},
		extraStats: {
			tacticalReload: 2.16,
			equipDelays: [0.55, 0.55],
			ammoPickup: [2.4, 4.4],
			recoilHorizontal: [-1.02, 1.02],
			recoilVertical: [1.19, 1.53],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			boost: mainBoost
		}
	},
	'Cavity 9mm': {
		name: 'Cavity 9mm',
		image: 'sub2000',
		source: content['The Golden Grin Casino Heist'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Assault Rifle',
		firingMode: 'Semi-Automatic',
		cost: 327e3,
		stats: {
			magazine: 33,
			totalAmmo: 66,
			rateOfFire: 706,
			damage: 160,
			accuracy: 72,
			stability: 32,
			concealment: 27,
			threat: 31,
			reload: 3.3
		},
		extraStats: {
			tacticalReload: 2.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [1.19, 2.64],
			recoilHorizontal: [-2.2, 2.2],
			recoilVertical: [1.32, 1.76],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			foregrip: [
				foregrip['Appalachian Foregrip'],
				foregrip['Delabarre Foregrip'],
				foregrip['Tooth Fairy Suppressor']
			],
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'AK.762': {
		name: 'AK.762',
		image: 'akm',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 349e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 561,
			damage: 97,
			accuracy: 60,
			stability: 44,
			concealment: 13,
			threat: 22,
			reload: 3.87
		},
		extraStats: {
			tacticalReload: 2.8,
			equipDelays: [0.5, 0.5],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['AK Slavic Dragon Barrel'],
				barrel['Modern Barrel'],
				barrel['DMR Kit (AK)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['Scope Mount (AK)']
			],
			foregrip: [
				foregrip['Railed Wooden Grip'],
				foregrip['The Tactical Russian Handguard'],
				foregrip['Battleproven Handguard'],
				foregrip['Lightweight Rail'],
				foregrip['Crabs Rail'],
				foregrip['Keymod Rail']
			],
			gadget: mainGadget,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			magazine: [
				magazine['AK Quadstacked Mag'],
				magazine['Low Drag Magazine'],
				magazine['Speed Pull Magazine']
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
	'JP36 Rifle': {
		name: 'JP36 Rifle',
		image: 'g36',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 349e3,
		stats: {
			magazine: 3,
			totalAmmo: 240,
			rateOfFire: 706,
			damage: 44,
			accuracy: 40,
			stability: 64,
			concealment: 19,
			threat: 13,
			reload: 3.85
		},
		extraStats: {
			tacticalReload: 2.85,
			equipDelays: [0.6, 0.6],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 3.6,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Compact Foregrip'],
				foregrip['Polizei Special Foregrip'],
				foregrip['JP36 Long Foregrip']
			],
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Solid Stock (JP36)'],
				stock['Sniper Stock (JP36)']
			]
		}
	},
	'AK17 Rifle': {
		name: 'AK17 Rifle',
		image: 'flint',
		source: content['Gage Russian Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 350e3,
		stats: {
			magazine: 35,
			totalAmmo: 105,
			rateOfFire: 652,
			damage: 99,
			accuracy: 60,
			stability: 60,
			concealment: 16,
			threat: 14,
			reload: 3.37
		},
		extraStats: {
			tacticalReload: 2.26,
			equipDelays: [0.5, 0.5],
			ammoPickup: [3.15, 4.72],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			magazine: [
				magazine['AK Quadstacked Mag'],
				magazine['Low Drag Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Tactical Stock (Main)'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
		}
	},
	'Golden AK.762 Rifle': {
		name: 'Golden AK.762 Rifle',
		image: 'akm_gold',
		source: source.Community,
		inventorySlot: 'primary',
		reputation: 17,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 372e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 561,
			damage: 97,
			accuracy: 60,
			stability: 44,
			concealment: 11,
			threat: 22,
			reload: 3.87
		},
		extraStats: {
			tacticalReload: 2.8,
			equipDelays: [0.5, 0.5],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['AK Slavic Dragon Barrel'],
				barrel['Modern Barrel'],
				barrel['DMR Kit (AK)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['Scope Mount (AK)']
			],
			foregrip: [
				foregrip['Railed Wooden Grip'],
				foregrip['The Tactical Russian Handguard'],
				foregrip['Battleproven Handguard'],
				foregrip['Lightweight Rail'],
				foregrip['Crabs Rail'],
				foregrip['Keymod Rail']
			],
			gadget: mainGadget,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			magazine: [
				magazine['AK Quadstacked Mag'],
				magazine['Low Drag Magazine'],
				magazine['Speed Pull Magazine']
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
	'Bootleg Rifle': {
		name: 'Bootleg Rifle',
		image: 'tecci',
		source: content['Sydney Character Pack'],
		inventorySlot: 'primary',
		reputation: 21,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 464e3,
		stats: {
			magazine: 100,
			totalAmmo: 200,
			rateOfFire: 667,
			damage: 40,
			accuracy: 24,
			stability: 52,
			concealment: 20,
			threat: 14,
			reload: 4.7
		},
		extraStats: {
			tacticalReload: 3.8,
			equipDelays: [0.6, 0.6],
			ammoPickup: [6, 11],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [1.02, 1.36],
			spread: 4.56,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['AML Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			sight: mainSight,
			stock: [
				stock['Tactical Stock (Main)'],
				stock['Folding Stock'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
		}
	},
	'Queen\'s Wrath Rifle': {
		name: 'Queen\'s Wrath Rifle',
		image: 'l85a2',
		source: content['Clover Character Pack'],
		inventorySlot: 'primary',
		reputation: 24,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 534e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 723,
			damage: 58,
			accuracy: 64,
			stability: 60,
			concealment: 16,
			threat: 12,
			reload: 4.5
		},
		extraStats: {
			tacticalReload: 3.5,
			equipDelays: [0.75, 0.45],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.8, 1.8],
			recoilVertical: [1.2, 1.65],
			spread: 2.16,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Prodigious Barrel'],
				barrel['Diminutive Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Versatile Foregrip']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Delightful Grip']
			],
			magazine: [
				magazine['Vintage Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight
		}
	},
	'Galant Rifle': {
		name: 'Galant Rifle',
		image: 'ching',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 25,
		weaponType: 'Assault Rifle',
		firingMode: 'Semi-Automatic',
		cost: 557e3,
		stats: {
			magazine: 8,
			totalAmmo: 72,
			rateOfFire: 600,
			damage: 160,
			accuracy: 84,
			stability: 36,
			concealment: 20,
			threat: 31,
			reload: 1.52
		},
		extraStats: {
			tacticalReload: 2.56,
			equipDelays: [0.55, 0.6],
			ammoPickup: [1.3, 2.88],
			recoilHorizontal: [-2.1, 2.1],
			recoilVertical: [1.26, 1.68],
			spread: 0.96,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Tanker Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			foregrip: [
				foregrip['Custom Foregrip']
			],
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Magpouch Stock']
			]
		}
	},
	'M308 Rifle': {
		name: 'M308 Rifle',
		image: 'new_m14',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 581e3,
		stats: {
			magazine: 10,
			totalAmmo: 70,
			rateOfFire: 706,
			damage: 160,
			accuracy: 84,
			stability: 36,
			concealment: 8,
			threat: 31,
			reload: 3.15
		},
		extraStats: {
			tacticalReload: 2.65,
			equipDelays: [0.55, 0.6],
			ammoPickup: [1.26, 2.8],
			recoilHorizontal: [-2.1, 2.1],
			recoilVertical: [1.26, 1.68],
			spread: 0.96,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			extra: [
				extra['Scope Mount (M308)']
			],
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Abraham Body'],
				stock['Jaeger Body'],
				stock['B-Team Stock']
			]
		}
	},
	'Clarion Rifle': {
		name: 'Clarion Rifle',
		image: 'famas',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 27,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 605e3,
		stats: {
			magazine: 30,
			totalAmmo: 240,
			rateOfFire: 1000,
			damage: 41,
			accuracy: 36,
			stability: 68,
			concealment: 24,
			threat: 14,
			reload: 3.78
		},
		extraStats: {
			tacticalReload: 2.72,
			equipDelays: [0.6, 0.55],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (Clarion)'],
				barrel['Short Barrel (Clarion)'],
				barrel['Sniper Barrel'],
				barrel['Suppressed Barrel (Clarion)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['G2 Grip']
			],
			sight: mainSight
		}
	},
	'Lion\'s Roar Rifle': {
		name: 'Lion\'s Roar Rifle',
		image: 'vhs',
		source: content['Dragan Character Pack'],
		inventorySlot: 'primary',
		reputation: 28,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 628e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 857,
			damage: 58,
			accuracy: 60,
			stability: 64,
			concealment: 17,
			threat: 12,
			reload: 4.75
		},
		extraStats: {
			tacticalReload: 3.2,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['CQB Barrel (Lion\'s Roar)'],
				barrel['Precision Barrel'],
				barrel['Silenced Barrel (Lion\'s Roar)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'Valkyria Rifle': {
		name: 'Valkyria Rifle',
		image: 'asval',
		source: content['Sokol Character Pack'],
		inventorySlot: 'primary',
		reputation: 29,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 30,
			totalAmmo: 220,
			rateOfFire: 896,
			damage: 41,
			accuracy: 56,
			stability: 64,
			concealment: 26,
			threat: 0,
			reload: 3.7
		},
		extraStats: {
			tacticalReload: 2.6,
			equipDelays: [0.5, 0.5],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 2.64,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Prototype Barrel (Valkyria)']
			],
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadget,
			sight: mainSight,
			stock: [
				stock['Solid Stock (Valkyria)']
			]
		}
	},
	'AK5 Rifle': {
		name: 'AK5 Rifle',
		image: 'ak5',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 749e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 706,
			damage: 56,
			accuracy: 60,
			stability: 60,
			concealment: 18,
			threat: 14,
			reload: 3.08
		},
		extraStats: {
			tacticalReload: 2.05,
			equipDelays: [0.45, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['CQB Barrel (AK5)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Karbin Ceres Handguard'],
				foregrip['Belgian Heat Handguard']
			],
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Vintage Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Bertil Stock'],
				stock['Caesar Stock']
			]
		}
	},
	'Gecko 7.62 Rifle': {
		name: 'Gecko 7.62 Rifle',
		image: 'galil',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 773e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 845,
			damage: 57,
			accuracy: 48,
			stability: 68,
			concealment: 15,
			threat: 24,
			reload: 4.2
		},
		extraStats: {
			tacticalReload: 3.0,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 3.12,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Fabulous Foregrip'],
				barrel['CQB Foregrip (Gecko)'],
				barrel['Light Foregrip'],
				barrel['Sniper Foregrip']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Sniper Grip']
			],
			sight: mainSight,
			stock: [
				stock['Fabulous Stock'],
				stock['Light Stock (Gecko)'],
				stock['Plastic Stock (Gecko)'],
				stock['Skeletal Stock (Gecko)'],
				stock['Sniper Stock (Gecko)'],
				stock['Wooden Stock (Gecko)']
			]
		}
	},
	'Tempest-21 Rifle': {
		name: 'Tempest-21 Rifle',
		image: 'komodo',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 38,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 871e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 800,
			damage: 58,
			accuracy: 60,
			stability: 52,
			concealment: 26,
			threat: 12,
			reload: 3.35
		},
		extraStats: {
			tacticalReload: 2.35,
			equipDelays: [0.6, 0.65],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.02, 1.02],
			recoilVertical: [0.68, 1.02],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			magazine: [
				magazine['Vintage Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight
		}
	},
	'AMR-16 Rifle': {
		name: 'AMR-16 Rifle',
		image: 'm16',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 39,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 896e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 857,
			damage: 94,
			accuracy: 56,
			stability: 32,
			concealment: 17,
			threat: 14,
			reload: 3.73
		},
		extraStats: {
			tacticalReload: 2.75,
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.32, 1.32],
			recoilVertical: [0.88, 1.32],
			spread: 2.64,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (CAR)'],
				barrel['DMR Kit (CAR)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Tactical Handguard'],
				foregrip['Blast From The Past Handguard'],
				foregrip['Long Ergo Foregrip']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			lowerReceiver: [
				lowerReceiver['THRUST Lower Receiver']
			],
			magazine: [
				magazine['Milspec Mag.'],
				magazine['Tactical Mag.'],
				magazine['CAR Quadstacked Mag'],
				magazine['Expert Mag'],
				magazine['L5 Magazine'],
				magazine['Speed Pull Magazine']
			],
			sight: mainSight,
			stock: [
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			],
			upperReceiver: [
				upperReceiver['Exotique Receiver'],
				upperReceiver['LW Upper Receiver'],
				upperReceiver['THRUST Upper Receiver']
			]
		}
	},
	'Little Friend 7.62 Assault Rifle': {
		name: 'Little Friend 7.62 Assault Rifle',
		image: 'contraband',
		source: content['Scarface Character Pack'],
		inventorySlot: 'primary',
		reputation: 41,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 20,
			totalAmmo: 60,
			rateOfFire: 612,
			damage: 160,
			accuracy: 72,
			stability: 44,
			concealment: 8,
			threat: 22,
			reload: 3.2
		},
		extraStats: {
			tacticalReload: 2.55,
			equipDelays: [0.5, 0.6],
			ammoPickup: [1.08, 2.4],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'Falcon Rifle': {
		name: 'Falcon Rifle',
		image: 'fal',
		source: content['The Big Bank Heist'],
		inventorySlot: 'primary',
		reputation: 42,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 20,
			totalAmmo: 100,
			rateOfFire: 698,
			damage: 98,
			accuracy: 68,
			stability: 44,
			concealment: 10,
			threat: 22,
			reload: 3.28
		},
		extraStats: {
			tacticalReload: 2.2,
			equipDelays: [0.6, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['CQB Foregrip (Falcon)'],
				barrel['Retro Foregrip'],
				barrel['Marksman Foregrip'],
				barrel['Wooden Foregrip']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Tactical Grip']
			],
			magazine: [
				magazine['Extended Magazine (Falcon)']
			],
			sight: mainSight,
			stock: [
				stock['CQB Stock'],
				stock['Marksman Stock'],
				stock['Wooden Stock (Falcon)']
			]
		}
	},
	'Gewehr 3 Rifle': {
		name: 'Gewehr 3 Rifle',
		image: 'g3',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 52,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 30,
			totalAmmo: 100,
			rateOfFire: 652,
			damage: 99,
			accuracy: 68,
			stability: 48,
			concealment: 12,
			threat: 26,
			reload: 2.0
		},
		extraStats: {
			tacticalReload: 1.4,
			equipDelays: [0.65, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.8, 1.8],
			recoilVertical: [1.08, 1.44],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		},
		modifications: {
			barrel: [
				barrel['Assault Kit'],
				barrel['DMR Kit (Gewehr)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: mainCustom,
			foregrip: [
				foregrip['Precision Foregrip'],
				foregrip['Tactical Foregrip (Gewehr)'],
				foregrip['Wooden Foregrip'],
				foregrip['Plastic Foregrip']
			],
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Retro Grip'],
				grip['Precision Grip']
			],
			sight: mainSight,
			stock: [
				stock['Precision Stock'],
				stock['Wooden Stock (Gewehr)']
			]
		}
	}
}

export default assaultRifles