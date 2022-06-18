import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const m1014: WeaponData = {
	name: 'M1014',
	image: 'benelli',
	source: content['Gage Shotgun Pack'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 8,
		totalAmmo: 64,
		rateOfFire: 429,
		damage: 55,
		accuracy: 28,
		stability: 44,
		concealment: 12,
		threat: 26,
		reload: 6.13
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.2, 4.8],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Short Barrel (M1014)'],
			barrel['Long Barrel (M1014)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		sight: shotgunSight,
		stock: [
			stock['Collapsed Stock'],
			stock['Tactical Stock (M1014)']
		]
	}
}

export default m1014