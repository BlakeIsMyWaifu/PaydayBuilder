import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const bernettiRangehitter: WeaponData = {
	name: 'Bernetti Rangehitter',
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
		boost: sniperBoost,
		gadget: sniperGadget,
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
			sight['Iron Sight x1 (Bernetti Rangehitter)'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['CASSIAN Iron Sights x1'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Trace Optic x6.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Club Stock']
		]
	}
}

export default bernettiRangehitter