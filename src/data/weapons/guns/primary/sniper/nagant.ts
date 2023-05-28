import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bayonet from '../../modifications/bayonet'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const nagant: WeaponData = {
	name: 'Nagant',
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
			sight['Iron Sight x1.25 (Nagant)'],
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
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
			stock['Discrete Stock (Nagant)']
		]
	}
}

export default nagant