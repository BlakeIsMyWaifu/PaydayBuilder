import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import boost from '../../modifications/boost'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { specialGadget } from '../commonModifications/specialModifications'

const piglet = {
	name: 'Piglet',
	image: 'm32',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: 43,
	weaponType: 'Special',
	firingMode: 'Double action',
	cost: 920e3,
	stats: {
		magazine: 6,
		totalAmmo: 12,
		rateOfFire: 60,
		damage: 1300,
		accuracy: 96,
		stability: 96,
		concealment: 10,
		threat: 37,
		reload: 19.21
	},
	extraStats: {
		tacticalReload: [9.21, 2.0],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Sting Grenade'],
			ammunition['Incendiary Round'],
			ammunition['X1-a Tactical ZAPper'],
			ammunition['Viper Grenade']
		],
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_gre_m32_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: -4,
					stability: 20,
					concealment: 2
				}
			}
		],
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost']
		],
		gadget: specialGadget,
		secondarySight: [
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['Signature Magnifier Gadget x6.25']
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
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			{
				name: 'No Stock',
				image: 'wpn_fps_gre_m32_no_stock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 0,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: -16,
					concealment: 4
				}
			},
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		]
	}
} as const satisfies WeaponData

export default piglet