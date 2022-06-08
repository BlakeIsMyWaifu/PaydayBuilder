import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrel from '../modifications/barrel'
import barrelExt from '../modifications/barrelExt'
import bayonet from '../modifications/bayonet'
import boost, { BoostModificationsList } from '../modifications/boost'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import sight, { SightModificationsList } from '../modifications/sight'
import stock from '../modifications/stock'
import { Modification, WeaponData } from '../weaponTypes'

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost'],
	boost['Total Ammo (Main)']
]

const mainGadgetMagnifier: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Angled Sight'],
	gadget['Riktpunkt 45 degree Sight'],
	gadget['45 degree red-dot sight'],
	gadget['45 Degree Ironsights'],
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
	sight['Reconnaissance Sight'],
	sight['Theia Magnified Scope'],
	sight['Box Buddy Sight']
]

export type PrimarySniperList =
	'Rattlesnake Sniper Rifle' |
	'R700 Sniper Rifle' |
	'Bernetti Rangehitter Sniper Rifle' |
	'Káng Arms X1 Sniper Rifle' |
	'Platypus 70 Sniper Rifle' |
	'Lebensauger .308 Sniper Rifle' |
	'Desertfox Sniper Rifle' |
	'Contractor .308 Sniper Rifle' |
	'R93 Sniper Rifle' |
	'Repeater 1874 Sniper Rifle' |
	'Grom Sniper Rifle' |
	'Nagant Sniper Rifle' |
	'Thanatos .50 cal Sniper Rifle'

const snipers: Record<PrimarySniperList, WeaponData> = {
	'Rattlesnake Sniper Rifle': {
		name: 'Rattlesnake Sniper Rifle',
		image: 'msr',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 327e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 60,
			damage: 246,
			accuracy: 88,
			stability: 28,
			concealment: 5,
			threat: 26,
			reload: 3.7
		},
		extraStats: {
			tacticalReload: 2.6,
			equipDelays: [0.7, 0.6],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.69, 0.69],
			recoilVertical: [6.9, 11.04],
			spread: 0.72,
			damageModifier: [1.0, 1.5]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (Rattlesnake)']
			],
			barrelExt: [
				barrelExt['Sniper Suppressor']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Tactical Aluminium Body']
			]
		}
	},
	'R700 Sniper Rifle': {
		name: 'R700 Sniper Rifle',
		image: 'r700',
		source: content['Fugitive Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 23,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 510e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 75,
			damage: 246,
			accuracy: 92,
			stability: 28,
			concealment: 10,
			threat: 28,
			reload: 4.7
		},
		extraStats: {
			tacticalReload: 3.35,
			equipDelays: [0.75, 0.45],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.69, 0.69],
			recoilVertical: [6.9, 11.04],
			spread: 0.48,
			damageModifier: [1.0, 1.5]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (R700)'],
				barrel['Medium Barrel (R700)']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Military Stock'],
				stock['Tactical Stock (R700)']
			]
		}
	},
	'Bernetti Rangehitter Sniper Rifle': {
		name: 'Bernetti Rangehitter Sniper Rifle',
		image: 'sbl',
		source: content['Gunslinger Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Sniper',
		firingMode: 'Lever Action',
		cost: 581e3,
		stats: {
			magazine: 10,
			totalAmmo: 50,
			rateOfFire: 120,
			damage: 196,
			accuracy: 68,
			stability: 20,
			concealment: 19,
			threat: 28,
			reload: 7.73
		},
		extraStats: {
			tacticalReload: [2.27, 0.57],
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.5, 3.75],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [5.0, 7.5],
			spread: 1.92,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			barrel: [
				barrel['Deep Range Barrel'],
				barrel['Wind Whistler Barrel']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Club Stock']
			]
		}
	},
	'Káng Arms X1 Sniper Rifle': {
		name: 'Káng Arms X1 Sniper Rifle',
		image: 'qbu88',
		source: content['Jiu Feng Smuggler Pack 2'],
		inventorySlot: 'primary',
		reputation: -1,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 628e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 80,
			stability: 48,
			concealment: 12,
			threat: 12,
			reload: 3.3
		},
		extraStats: {
			tacticalReload: 2.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.72, 0.72],
			recoilVertical: [2.7, 3.6],
			spread: 1.2,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			boost: mainBoost
		}
	},
	'Platypus 70 Sniper Rifle': {
		name: 'Platypus 70 Sniper Rifle',
		image: 'model70',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 32,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 725e3,
		stats: {
			magazine: 5,
			totalAmmo: 30,
			rateOfFire: 60,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 6,
			threat: 28,
			reload: 4.5
		},
		extraStats: {
			tacticalReload: 3.35,
			equipDelays: [0.75, 0.45],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		},
		modifications: {
			barrelExt: [
				barrelExt['Beak Suppressor']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'Lebensauger .308 Sniper Rifle': {
		name: 'Lebensauger .308 Sniper Rifle',
		image: 'wa2000',
		source: content['Gage Ninja Pack'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 749e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 92,
			stability: 20,
			concealment: 16,
			threat: 12,
			reload: 6.2
		},
		extraStats: {
			tacticalReload: 4.64,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.5, 0.5],
			recoilVertical: [5.0, 6.25],
			spread: 0.48,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			barrel: [
				barrel['Langer Barrel'],
				barrel['Gedämpfter Barrel']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Leichter Grip'],
				grip['Subtiler Grip'],
				grip['Walnuss Grip']
			],
			sight: mainSight
		}
	},
	'Desertfox Sniper Rifle': {
		name: 'Desertfox Sniper Rifle',
		image: 'desertfox',
		source: content['John Wick Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 773e3,
		stats: {
			magazine: 5,
			totalAmmo: 30,
			rateOfFire: 60,
			damage: 480,
			accuracy: 76,
			stability: 12,
			concealment: 19,
			threat: 28,
			reload: 3.86
		},
		extraStats: {
			tacticalReload: 2.72,
			equipDelays: [0.75, 0.45],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 1.44,
			damageModifier: [1.0, 1.8]
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (Desertfox)'],
				barrel['Silenced Barrel (Desertfox)']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight
		}
	},
	'Contractor .308 Sniper Rifle': {
		name: 'Contractor .308 Sniper Rifle',
		image: 'tti',
		source: content['John Wick Heists'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 773e3,
		stats: {
			magazine: 20,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 60,
			stability: 4,
			concealment: 16,
			threat: 12,
			reload: 3.3
		},
		extraStats: {
			tacticalReload: 2.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.87, 0.87],
			recoilVertical: [4.35, 5.8],
			spread: 2.4,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			barrelExt: [
				barrelExt['Contractor Silencer']
			],
			boost: mainBoost,
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
	'R93 Sniper Rifle': {
		name: 'R93 Sniper Rifle',
		image: 'r93',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 35,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 798e3,
		stats: {
			magazine: 6,
			totalAmmo: 30,
			rateOfFire: 50,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 5,
			threat: 31,
			reload: 3.82
		},
		extraStats: {
			tacticalReload: 2.82,
			equipDelays: [0.65, 0.7],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.27, 0.27],
			recoilVertical: [8.1, 10.26],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (R93)'],
				barrel['Compensated Suppressor']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Wooden Body']
			]
		}
	},
	'Repeater 1874 Sniper Rifle': {
		name: 'Repeater 1874 Sniper Rifle',
		image: 'winchester1874',
		source: content['The Butcher\'s Western Pack'],
		inventorySlot: 'primary',
		reputation: 36,
		weaponType: 'Sniper',
		firingMode: 'Lever Action',
		cost: 822e3,
		stats: {
			magazine: 15,
			totalAmmo: 45,
			rateOfFire: 86,
			damage: 246,
			accuracy: 92,
			stability: 20,
			concealment: 12,
			threat: 28,
			reload: 10.57
		},
		extraStats: {
			tacticalReload: [2.27, 0.57],
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.25, 3.38],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [7.5, 12.0],
			spread: 0.48,
			damageModifier: [1.0, 1.5]
		},
		modifications: {
			barrel: [
				barrel['Long Range Barrel'],
				barrel['Outlaw\'s Silenced Barrel']
			],
			boost: mainBoost,
			sight: [
				sight['A5 Scope']
			]
		}
	},
	'Grom Sniper Rifle': {
		name: 'Grom Sniper Rifle',
		image: 'siltstone',
		source: content['Gage Russian Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 46,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 920e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 72,
			stability: 4,
			concealment: 16,
			threat: 12,
			reload: 3.3
		},
		extraStats: {
			tacticalReload: 2.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-1.16, 1.16],
			recoilVertical: [4.35, 5.8],
			spread: 1.68,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			barrel: [
				barrel['Grievky Compensator'],
				barrel['Tikho Barrel']
			],
			boost: mainBoost,
			foregrip: [
				foregrip['Lightweight Foregrip']
			],
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Lightweight Stock']
			]
		}
	},
	'Nagant Sniper Rifle': {
		name: 'Nagant Sniper Rifle',
		image: 'mosin',
		source: content['Gage Historical Pack'],
		inventorySlot: 'primary',
		reputation: 54,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 920e3,
		stats: {
			magazine: 5,
			totalAmmo: 25,
			rateOfFire: 60,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 6,
			threat: 28,
			reload: 3.85
		},
		extraStats: {
			tacticalReload: 3.85,
			equipDelays: [0.5, 0.6],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (Nagant)'],
				barrel['Long Barrel (Nagant)'],
				barrel['Silenced Barrel (Nagant)']
			],
			bayonet: [
				bayonet['Nagant Bayonet']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			sight: mainSight,
			stock: [
				stock['Discrete Stock (Nagant)']
			]
		}
	},
	'Thanatos .50 cal Sniper Rifle': {
		name: 'Thanatos .50 cal Sniper Rifle',
		image: 'm95',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 65,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 920e3,
		stats: {
			magazine: 5,
			totalAmmo: 15,
			rateOfFire: 40,
			damage: 3500,
			accuracy: 92,
			stability: 4,
			concealment: 1,
			threat: 37,
			reload: 5.23
		},
		extraStats: {
			tacticalReload: 3.96,
			equipDelays: [0.9, 0.9],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-1.45, 1.45],
			recoilVertical: [8.7, 11.02],
			spread: 0.48,
			damageModifier: [1.0, 1.3]
		},
		modifications: {
			barrel: [
				barrel['Tank Buster Barrel'],
				barrel['CQB Barrel (Thanatos)'],
				barrel['Suppressed Barrel (Thanatos)']
			],
			boost: mainBoost,
			gadget: mainGadgetMagnifier,
			grip: [
				grip['Ergo Grip (Main)'],
				grip['Pro Grip'],
				grip['Rubber Grip'],
				grip['Straight Grip'],
				grip['Contractor Grip']
			],
			sight: mainSight
		}
	}
}

export default snipers