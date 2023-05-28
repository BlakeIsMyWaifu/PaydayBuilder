import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import exclusiveSet from '../../modifications/exclusiveSet'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const northStar: WeaponData = {
	name: 'North Star',
	image: 'victor',
	source: content['A Criminal Carol'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 773e3,
	stats: {
		magazine: 10,
		totalAmmo: 20,
		rateOfFire: 150,
		damage: 160,
		accuracy: 52,
		stability: 8,
		concealment: 16,
		threat: 26,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.9, 0.9],
		ammoPickup: [1.0, 1.5],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [7.0, 5.6],
		spread: 2.88,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrelExt: [
			barrelExt['Tiwaz Silencer']
		],
		boost: sniperBoost,
		exclusiveSet: [
			exclusiveSet['Celestial Assault']
		],
		gadget: sniperGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Titanium Skeleton Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: sniperSecondarySight,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Trace Optic x6.25'],
			sight['Cynosura Iron Sights'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
}

export default northStar