import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight } from '../commonModifications/shotgunModifications'

const raven: WeaponData = {
	name: 'Raven',
	image: 'ksg',
	source: content['Gage Shotgun Pack'],
	inventorySlot: 'primary',
	reputation: 22,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 487e3,
	stats: {
		magazine: 14,
		totalAmmo: 42,
		rateOfFire: 104,
		damage: 90,
		accuracy: 44,
		stability: 44,
		concealment: 22,
		threat: 28,
		reload: 9.53
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.55, 0.6],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 3.36,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Short Barrel (Raven)'],
			barrel['Long Barrel (Raven)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
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
			sight['Flip-up x1'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		]
	}
}

export default raven