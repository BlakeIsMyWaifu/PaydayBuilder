import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bolt from '../../modifications/bolt'
import exclusiveSet from '../../modifications/exclusiveSet'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const pronghorn: WeaponData = {
	name: 'Pronghorn',
	image: 'scout',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 334400,
	stats: {
		magazine: 5,
		totalAmmo: 20,
		rateOfFire: 60,
		damage: 246,
		accuracy: 72,
		stability: 12,
		concealment: 18,
		threat: 28,
		reload: 5.3
	},
	extraStats: {
		tacticalReload: 3.4,
		equipDelays: [0.45, 0.4],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 1.68,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			barrel['Longshot Suppressor']
		],
		bolt: [
			bolt['Quickdraw Speedbolt']
		],
		boost: sniperBoost,
		exclusiveSet: [
			exclusiveSet['Open Range Sniper']
		],
		gadget: sniperGadget,
		magazine: [
			magazine['Standoff Extended Magazine']
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
			sight['Iron Sights'],
			sight['Trace Optic x6.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Stakeout Stock (Pronghorn)'],
			stock['Marksman Stock (Pronghorn)']
		]
	}
}

export default pronghorn