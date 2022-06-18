import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

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
		gadget: shotgunGadgetMagnifier,
		sight: shotgunSight
	}
}

export default raven