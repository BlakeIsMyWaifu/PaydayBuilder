import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget } from '../commonModifications/sniperModifications'

const kangArmsX1: WeaponData = {
	name: 'Káng Arms X1',
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
		barrel: [
			barrel['KA-ZD1A Long Barrel'],
			barrel['KA-ZD1B Short Barrel']
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		magazine: [
			magazine['KA-ZDM2 Extended Magazine']
		],
		secondarySight: [
			secondarySight['Riktpunkt 45 degree Sight'],
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['Angled Sight'],
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
			sight['KA-ZD032 Iron Sight x1.25'],
			sight['Trace Optic x6.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		]
	}
}

export default kangArmsX1