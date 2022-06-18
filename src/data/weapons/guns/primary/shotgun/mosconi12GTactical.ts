import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const mosconi12GTactical: WeaponData = {
	name: 'Mosconi 12G Tactical',
	image: 'm590',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 261e3,
	stats: {
		magazine: 7,
		totalAmmo: 42,
		rateOfFire: 150,
		damage: 110,
		accuracy: 36,
		stability: 32,
		concealment: 19,
		threat: 28,
		reload: 3.98
	},
	extraStats: {
		tacticalReload: [1.26, 0.4],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.22, 0.22],
		recoilVertical: [4.62, 4.84],
		spread: 3.84,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['CE Extender'],
			barrel['CE Muffler']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Titanium Skeleton Grip']
		],
		lowerReceiver: [
			lowerReceiver['CE Rail Stabilizer']
		],
		sight: shotgunSight
	}
}

export default mosconi12GTactical