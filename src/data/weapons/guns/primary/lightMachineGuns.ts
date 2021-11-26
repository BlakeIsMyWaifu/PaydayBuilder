import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import bipod from '../modifications/bipod'
import boost, { BoostModificationsList } from '../modifications/boost'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import grip from '../modifications/grip'
import stock from '../modifications/stock'
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

const mainGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
]

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
		},
		modifications: {
			barrelExt: [
				...mainBarrelExt,
				barrelExt['PBS Suppressor']
			],
			bipod: [
				bipod['Lion\'s Bipod']
			],
			boost: mainBoost,
			foregrip: [
				foregrip['Tactical Foregrip (RPK)']
			],
			gadget: mainGadget,
			grip: [
				grip['AK Rubber Grip'],
				grip['AK Plastic Grip'],
				grip['AK Wood Grip'],
				grip['Aluminum Grip']
			],
			stock: [
				stock['Standard Stock (Main)'],
				stock['Tactical Stock (Main)'],
				stock['Folding Stock'],
				stock['Plastic Stock (RPK)'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['Classic Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
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
		},
		modifications: {
			barrel: [
				barrel['Short Barrel (KSP 58)']
			],
			barrelExt: mainBarrelExt,
			bipod: [
				bipod['Lion\'s Bipod']
			],
			boost: mainBoost,
			gadget: mainGadget,
			stock: [
				stock['Plastic Stock (KSP 58)']
			]
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
		},
		modifications: {
			boost: mainBoost
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
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (KSP)']
			],
			barrelExt: mainBarrelExt,
			bipod: [
				bipod['Lion\'s Bipod']
			],
			boost: mainBoost,
			foregrip: [
				foregrip['Railed Foregrip (KSP)']
			],
			gadget: mainGadget,
			stock: [
				stock['Standard Stock (Main)'],
				stock['Tactical Stock (Main)'],
				stock['Solid Stock (KSP)'],
				stock['Wide Stock'],
				stock['War-Torn Stock'],
				stock['2 Piece Stock'],
				stock['Contractor Stock']
			]
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
		},
		modifications: {
			barrel: [
				barrel['Light Barrel'],
				barrel['Heatsinked Suppressed Barrel (Buzzsaw)']
			],
			barrelExt: mainBarrelExt,
			bipod: [
				bipod['Lion\'s Bipod']
			],
			boost: mainBoost,
			gadget: mainGadget
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
		},
		modifications: {
			barrel: [
				barrel['Long Barrel (Brenner)']
			],
			barrelExt: mainBarrelExt,
			bipod: [
				bipod['Lion\'s Bipod']
			],
			boost: mainBoost,
			foregrip: [
				foregrip['Short Foregrip (Brenner)']
			],
			gadget: mainGadget,
			grip: [
				grip['Ergo Grip (Brenner)']
			]
		}
	}
}

export default lightMachineGuns
