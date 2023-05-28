import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import exclusiveSet from '../../modifications/exclusiveSet'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const kahn357: WeaponData = {
	name: 'Kahn .357',
	image: 'korth',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Pistol',
	firingMode: 'Single action',
	cost: 418e3,
	stats: {
		magazine: 8,
		totalAmmo: 56,
		rateOfFire: 480,
		damage: 120,
		accuracy: 80,
		stability: 40,
		concealment: 27,
		threat: 24,
		reload: 2.75
	},
	extraStats: {
		tacticalReload: 2.75,
		equipDelays: [0.45, 0.5],
		ammoPickup: [3.0, 2.0],
		recoilHorizontal: [-1.0, 1.0],
		recoilVertical: [2.4, 3.6],
		spread: 1.2,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Railed Barrel']
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Flash Hider'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		exclusiveSet: [
			exclusiveSet['Electric Dream']
		],
		gadget: pistolGadget,
		grip: [
			grip.Ergogrip,
			grip['Overmold Grip']
		],
		magazine: [
			magazine['Hex Cylinder']
		],
		sight: [
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['CASSIAN Sharp Sight x3.25']
		]
	}
}

export default kahn357