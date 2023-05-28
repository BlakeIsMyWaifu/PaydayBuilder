import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import exclusiveSet from '../../modifications/exclusiveSet'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost } from '../commonModifications/sniperModifications'

const aranG2: WeaponData = {
	name: 'Aran G2',
	image: 'contender',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'secondary',
	reputation: 28,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 1,
		totalAmmo: 10,
		rateOfFire: 35,
		damage: 480,
		accuracy: 64,
		stability: 4,
		concealment: 20,
		threat: 10,
		reload: 2.78
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.55, 0.65],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [8.41, 8.7],
		spread: 2.16,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Aran G2)'],
			barrel['Short Barrel (Aran G2)']
		],
		barrelExt: [
			barrelExt['Phantom Suppressor']
		],
		boost: sniperBoost,
		exclusiveSet: [
			exclusiveSet['Perfect Blue']
		],
		foregrip: [
			foregrip['Kanden Foregrip']
		],
		grip: [
			grip['Bounty Grip']
		],
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
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Sylux Iron Sight'],
			sight['Trace Optic x6.25'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Bounty Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
}

export default aranG2