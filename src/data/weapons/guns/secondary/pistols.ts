import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import boost, { BoostModificationsList } from '../modifications/boost'
import extra from '../modifications/extra'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import lowerReciver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import sight, { SightModificationsList } from '../modifications/sight'
import slide from '../modifications/slide'
import stock from '../modifications/stock'
import upperReciever from '../modifications/upperReceiver'
import { Modification, WeaponData } from '../weaponTypes'

const mainBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['IPSC Compensator'],
	barrelExt['Facepunch Compensator'],
	barrelExt['Flash Hider'],
	barrelExt['Roctec Suppressor'],
	barrelExt['Champion\'s Suppressor'],
	barrelExt['Standard Issue Suppressor'],
	barrelExt['Size Doesn\'t Matter Suppressor'],
	barrelExt['Monolith Suppressor'],
	barrelExt['Asepsis Suppressor'],
	barrelExt['Budget Suppressor'],
	barrelExt['Jungle Ninja Suppressor'],
	barrelExt['Hurricane Compensator']
]

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

const mainGadget: Modification<GadgetModificationsList>[] = [
	gadget['Tactical Pistol Light'],
	gadget['Pocket Laser'],
	gadget['Micro Laser'],
	gadget['Combined Module'],
	gadget['Polymer Flashlight']
]

const mainSight: Modification<SightModificationsList>[] = [
	sight['Pistol Red Dot Sight'],
	sight['SKOLD Micro Reflex Sight'],
	sight['Riktpunkt Holosight']
]

export type PistolList =
	'Interceptor .45 Pistol' |
	'Chimano 88 Pistol' |
	'Gruber Kurz Pistol' |
	'Signature .40 Pistol' |
	'Crosskill Pistol' |
	'Bernetti 9 Pistol' |
	'Bronco .44 Pistol' |
	'Crosskill Chunky Compact Pistol' |
	'White Streak Pistol' |
	'Baby Deagle' |
	'M13 9mm Pistol' |
	'Chimano Custom Pistol' |
	'Broomstick Pistol' |
	'Parabellum Pistol' |
	'5/7 AP Pistol' |
	'Castigo .44 Revolver' |
	'Contractor Pistol' |
	'Frenchman Model 87 Revolver' |
	'Chimano Compact Pistol' |
	'Crosskill Guard Pistol' |
	'LEO Pistol' |
	'STRYK 18c Pistol' |
	'Bernetti Auto Pistol' |
	'Czech 92 Pistol' |
	'Igor Automatik Pistol' |
	'HOLT 9mm Pistol' |
	'Peacemaker .45 Revolver' |
	'Matever .357 Revolver' |
	'Deagle Pistol'

const pistols: Record<PistolList, WeaponData> = {
	'Interceptor .45 Pistol': {
		name: 'Interceptor .45 Pistol',
		image: 'usp',
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
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Ventilated .45'],
				barrelExt['Velocity .45']
			],
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Extended Mag. (Interceptor)'],
				magazine['I want more Magazine!']
			],
			sight: mainSight,
			slide: [
				slide['Expert Slide'],
				slide['Match Slide']
			]
		}
	},
	'Chimano 88 Pistol': {
		name: 'Chimano 88 Pistol',
		image: 'glock_17',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Laser Grip (Chimano)'],
				grip['Platypus Grip']
			],
			magazine: [
				magazine['Extended Mag. (Chimano)']
			],
			sight: mainSight
		}
	},
	'Gruber Kurz Pistol': {
		name: 'Gruber Kurz Pistol',
		image: 'ppk',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 3.36,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: [
				...mainBoost,
				boost['Concealment (Extra)']
			],
			gadget: mainGadget,
			grip: [
				grip['Laser Grip (Gruber Kurz)']
			],
			sight: mainSight,
			slide: [
				slide['Long Slide (Gruber Kurz)']
			]
		}
	},
	'Signature .40 Pistol': {
		name: 'Signature .40 Pistol',
		image: 'p226',
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
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Ventilated .40'],
				barrelExt['Velocity .40']
			],
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Ergo Grip (Signature .40)']
			],
			magazine: [
				magazine['Extended Mag. (Signature .40)']
			],
			sight: mainSight,
			slide: [
				slide['Two Tone Slide'],
				slide['Long Slide (Signature .40)']
			]
		}
	},
	'Crosskill Pistol': {
		name: 'Crosskill Pistol',
		image: 'colt_1911',
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
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Aggressor Comensator'],
				barrelExt['Punisher Compensator']
			],
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Ergo Grip (Crosskill)'],
				grip['Bling Grip (Crosskill)'],
				grip['Engraved Crosskill Grips']
			],
			magazine: [
				magazine['12rnd Mag.'],
				magazine['Magazine with Ameritude!']
			],
			sight: [
				sight['Marksman Sight'],
				...mainSight
			],
			slide: [
				slide['Vented Slide'],
				slide['Long Vented Slide']
			]
		}
	},
	'Bernetti 9 Pistol': {
		name: 'Bernetti 9 Pistol',
		image: 'b92fs',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 2.64,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['The Competitor Compensator'],
				barrelExt['The Professional Compensator']
			],
			boost: [
				...mainBoost,
				boost['Concealment (Extra)']
			],
			gadget: mainGadget,
			grip: [
				grip['Ergo Grip (Bernetti 9)'],
				grip['Engraved Bernetti Grips']
			],
			magazine: [
				magazine['Extended Mag. (Bernetti 9)']
			],
			sight: [
				sight['Marksman Sight'],
				...mainSight
			],
			lowerReciever: [
				lowerReciver['Custom Titanium Frame']
			],
			upperReciever: [
				upperReciever['The Elite Slide']
			]
		}
	},
	'Bronco .44 Pistol': {
		name: 'Bronco .44 Pistol',
		image: 'new_raging_bull',
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
			recoilHorizontal: [-1.35, 1.35],
			recoilVertical: [3.24, 4.86],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		},
		modifications: {
			barrelExt: [
				barrelExt['Flash Hider']
			],
			boost: [
				...mainBoost,
				boost['Concealment (Extra)']
			],
			extra: [
				extra['Bronco Scope Mount']
			],
			gadget: [
				gadget['Riktpunkt Magnifier Gadget'],
				gadget['Signature Magnifier Gadget']
			],
			grip: [
				grip['Ergo Wooden Grip']
			],
			sight: [
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
			],
			slide: [
				slide['Aggressor Barrel'],
				slide['Pocket Surprise Barrel'],
				slide['Ventilated Barrel'],
				slide['Overcompensating Barrel']
			],
			upperReciever: [
				upperReciever['Slimline Body']
			]
		}
	},
	'Crosskill Chunky Compact Pistol': {
		name: 'Crosskill Chunky Compact Pistol',
		image: 'm1911',
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
			recoilHorizontal: [-0.8, 0.8],
			recoilVertical: [3.2, 3.6],
			spread: 2.16,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Crosskill Long Mag']
			],
			sight: mainSight,
			slide: [
				slide['Chunky Hunter Barrel'],
				slide['Crosskill Platinum Bull Slide']
			]
		}
	},
	'White Streak Pistol': {
		name: 'White Streak Pistol',
		image: 'pl14',
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
			recoilHorizontal: [-1.0, 1.0],
			recoilVertical: [2.4, 3.6],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Prototype Barrel (White Streak)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Extended Magazine (White Streak)']
			],
			sight: mainSight
		}
	},
	'Baby Deagle': {
		name: 'Baby Deagle',
		image: 'sparrow',
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
			recoilHorizontal: [-1.0, 1.0],
			recoilVertical: [2.4, 3.6],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Ported Barrel'],
				barrel['Threaded Barrel (Baby Deagle)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Spike Grip']
			],
			lowerReciever: [
				lowerReciver['Spike Kit']
			],
			sight: mainSight
		}
	},
	'M13 9mm Pistol': {
		name: 'M13 9mm Pistol',
		image: 'legacy',
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
			recoilHorizontal: [-0.8, 0.8],
			recoilVertical: [1.92, 2.88],
			spread: 3.36,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Threaded Barrel (M13)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			grip: [
				grip['Wooden Grip (M13)']
			],
			sight: mainSight
		}
	},
	'Chimano Custom Pistol': {
		name: 'Chimano Custom Pistol',
		image: 'g22c',
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
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Ventilated Compensator'],
				barrelExt['Velocity Compensator']
			],
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Laser Grip (Chimano)'],
				grip['Platypus Grip'],
				grip['Ergo Grip (STRYK / Chimano Custom)']
			],
			magazine: [
				magazine['Extended Mag. (Chimano)']
			],
			sight: mainSight,
			slide: [
				slide['Long Slide (Chimano Custom)']
			]
		}
	},
	'Broomstick Pistol': {
		name: 'Broomstick Pistol',
		image: 'c96',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 1.2,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Damper.L 44 Nozzle']
			],
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['High Capacity Mag']
			],
			sight: [
				sight['Barrel Sight 44'],
				...mainSight
			],
			slide: [
				slide['Precision Barrel (Broomstick)']
			],
			stock: [
				stock['Holster Stock']
			]
		}
	},
	'Parabellum Pistol': {
		name: 'Parabellum Pistol',
		image: 'breech',
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
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [2.64, 3.96],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		},
		modifications: {
			barrel: [
				barrel['Reinforced Barrel'],
				barrel['Short Barrel (Parabellum)']
			],
			boost: mainBoost,
			grip: [
				grip['Engraved Grip']
			],
			sight: mainSight
		}
	},
	'5/7 AP Pistol': {
		name: '5/7 AP Pistol',
		image: 'lemming',
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
			recoilHorizontal: [-0.95, 0.95],
			recoilVertical: [2.28, 3.42],
			spread: 3.12,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['TiN Treated Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Extended Magazine (5/7 AP)']
			],
			sight: mainSight
		}
	},
	'Castigo .44 Revolver': {
		name: 'Castigo .44 Revolver',
		image: 'chinchilla',
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
			recoilHorizontal: [-1.35, 1.35],
			recoilVertical: [3.24, 4.86],
			spread: 1.44,
			damageModifier: [1.0, 0.8]
		},
		modifications: {
			barrel: [
				barrel['Diablo Barrel']
			],
			boost: mainBoost,
			grip: [
				grip['Carnival Grip'],
				grip['Cruz Grip']
			]
		}
	},
	'Contractor Pistol': {
		name: 'Contractor Pistol',
		image: 'packrat',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Contractor Compensator']
			],
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Extended Magazine (Contractor)']
			],
			sight: [
				sight['Tritium Sights'],
				...mainSight
			]
		}
	},
	'Frenchman Model 87 Revolver': {
		name: 'Frenchman Model 87 Revolver',
		image: 'model3',
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
			recoilHorizontal: [-0.63, 0.63],
			recoilVertical: [3.36, 2.73],
			spread: 1.44,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Opera Long Barrel'],
				barrel['Napoleon Barrel']
			],
			boost: mainBoost,
			grip: [
				grip['Mule Bone Grip']
			]
		}
	},
	'Chimano Compact Pistol': {
		name: 'Chimano Compact Pistol',
		image: 'g26',
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
			recoilHorizontal: [-0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Laser Grip (Chimano)'],
				grip['Platypus Grip']
			],
			lowerReciever: [
				lowerReciver['Striking Body Kit']
			],
			magazine: [
				magazine['Striking Mag'],
				magazine['Extended Mag. (Chimano)']
			],
			sight: mainSight,
			slide: [
				slide['Striking Slide']
			]
		}
	},
	'Crosskill Guard Pistol': {
		name: 'Crosskill Guard Pistol',
		image: 'shrew',
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
			recoilHorizontal: [0.65, 0.65],
			recoilVertical: [1.56, 2.34],
			spread: 2.16,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Blinged Grip'],
				grip['Ergonomic Grip (Crosskill Guard)']
			],
			magazine: [
				magazine['Extended Mag (Crosskill Guard)']
			],
			sight: mainSight,
			slide: [
				slide['Milled Slide']
			]
		}
	},
	'LEO Pistol': {
		name: 'LEO Pistol',
		image: 'hs2000',
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
			equipDelays: [0.5, 0.5],
			ammoPickup: [2.38, 3.33],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [1.8, 2.7],
			spread: 1.92,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			magazine: [
				magazine['Extended Mag (LEO)']
			],
			sight: mainSight,
			slide: [
				slide['Custom Slide'],
				slide['Long Slide (LEO)']
			]
		}
	},
	'STRYK 18c Pistol': {
		name: 'STRYK 18c Pistol',
		image: 'glock_18c',
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
			recoilHorizontal: [0.42, 0.42],
			recoilVertical: [0.42, 0.56],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['Ventilated Compensator'],
				barrelExt['Velocity Compensator']
			],
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Laser Grip (Chimano)'],
				grip['Platypus Grip'],
				grip['Ergo Grip (STRYK / Chimano Custom)']
			],
			magazine: [
				magazine['Extended Mag. (Chimano)']
			],
			sight: mainSight,
			stock: [
				stock.Stock
			]
		}
	},
	'Bernetti Auto Pistol': {
		name: 'Bernetti Auo Pistol',
		image: 'beer',
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
			tacticalReload: 1.47,
			reload: 2.12,
			equipDelays: [0.35, 0.5],
			ammoPickup: [1.95, 6.83],
			recoilHorizontal: [-0.24, 0.24],
			recoilVertical: [0.48, 0.6],
			spread: 3.6,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Weller Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Cartel Grip (Bernetti Auto)'],
				grip['Weller Grip']
			],
			magazine: [
				magazine['Extended Magazine (Bernetti Auto)']
			],
			sight: mainSight,
			stock: [
				stock['Federales Stock (Bernetti Auto)']
			]
		}
	},
	'Czech 92 Pistol': {
		name: 'Czech 92 Pistol',
		image: 'czech',
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
		},
		modifications: {
			barrel: [
				barrel['Sicario Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Cartel Grip (Czech)'],
				grip['Sicario Grip']
			]
		}
	},
	'Igor Automatik Pistol': {
		name: 'Igor Automatik Pistol',
		image: 'stech',
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
			recoilHorizontal: [-0.63, 0.63],
			recoilVertical: [0.63, 0.84],
			spread: 2.64,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrel: [
				barrel['Tirador Barrel']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Federales Grip'],
				grip['Cartel Grip (Igor)']
			],
			magazine: [
				magazine['Extended Magazine (Igor)']
			],
			sight: mainSight,
			stock: [
				stock['Federales Stock (Igor)']
			]
		}
	},
	'HOLT 9mm Pistol': {
		name: 'HOLT 9mm Pistol',
		image: 'holt',
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
			recoilHorizontal: [-0.55, 0.55],
			recoilVertical: [1.32, 1.98],
			spread: 2.4,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Ergonomic Grip (HOLT)'],
				grip['Bling Grip (HOLT)']
			],
			magazine: [
				magazine['Extended Magazine (HOLT)']
			],
			sight: mainSight
		}
	},
	'Peacemaker .45 Revolver': {
		name: 'Peacemaker .45 Revolver',
		image: 'peacemaker',
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
			equipDelays: [0.65, 0.65],
			ammoPickup: [1.35, 1.89],
			recoilHorizontal: [-1.25, 1.25],
			recoilVertical: [7.25, 7.5],
			spread: 0.96,
			damageModifier: [1.0, 0.8]
		},
		modifications: {
			boost: mainBoost,
			grip: [
				grip['Grand Grip']
			],
			slide: [
				slide['Precision Barrel (Peacemaker)'],
				slide['Shootout Barrel']
			],
			stock: [
				stock['Ol´ Ben\'s Stock']
			]
		}
	},
	'Matever .357 Revolver': {
		name: 'Matever .357 Revoler',
		image: 'mateba',
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
			recoilHorizontal: [-1.25, 1.25],
			recoilVertical: [3.0, 4.5],
			spread: 0.96,
			damageModifier: [1.0, 0.8]
		},
		modifications: {
			barrel: [
				barrel['Pesante Barrel'],
				barrel['Medio Barrel'],
				barrel['Pisccolo Barrel']
			],
			boost: mainBoost,
			gadget: mainGadget,
			grip: [
				grip['Noir Grip']
			]
		}
	},
	'Deagle Pistol': {
		name: 'Deagle Pistol',
		image: 'deagle',
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
			recoilHorizontal: [-1.05, 1.05],
			recoilVertical: [2.52, 3.78],
			spread: 1.44,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['La Femme Compensator'],
				barrelExt['OVERKILL Compensator']
			],
			boost: mainBoost,
			extra: [
				extra['Deagle Scope Mount']
			],
			gadget: mainGadget,
			grip: [
				grip['Ergo Grip (Deagle)'],
				grip['Bling Grip (Deagle)']
			],
			magazine: [
				magazine['Extended Mag. (Deagle)']
			],
			sight: mainSight,
			slide: [
				slide['Long Barrel'],
				slide['Custom Milled Barrel']
			]
		}
	}
}

export default pistols