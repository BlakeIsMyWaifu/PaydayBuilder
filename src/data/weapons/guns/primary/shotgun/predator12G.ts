import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const predator12G: WeaponData = {
	name: 'Predator 12G',
	image: 'spas12',
	source: source.Community,
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 6,
		totalAmmo: 66,
		rateOfFire: 300,
		damage: 55,
		accuracy: 28,
		stability: 44,
		concealment: 14,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.3, 4.95],
		recoilHorizontal: [-0.95, 1.52],
		recoilVertical: [3.42, 2.85],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Extended Mag']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		sight: shotgunSight,
		stock: [
			stock['Folded Stock (Predator)'],
			stock['Solid Stock (Predator)'],
			stock['No Stock (Predator)']
		]
	}
}

export default predator12G