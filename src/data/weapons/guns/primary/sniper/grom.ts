import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const grom: WeaponData = {
	name: 'Grom',
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
		boost: sniperBoost,
		foregrip: [
			foregrip['Lightweight Foregrip']
		],
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
			sight['Compact Tactical Box Sight x2.5'],
			sight['Iron Sight (Grom)'],
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
			stock['Lightweight Stock']
		]
	}
}

export default grom