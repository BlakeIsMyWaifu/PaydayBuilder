import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import lowerReceiver from '../../modifications/lowerReceiver'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const breaker12G: WeaponData = {
	name: 'Breaker 12G',
	image: 'boot',
	source: content['Biker Character Pack'],
	inventorySlot: 'primary',
	reputation: 3,
	weaponType: 'Shotgun',
	firingMode: 'Lever Action',
	cost: 76e3,
	stats: {
		magazine: 7,
		totalAmmo: 21,
		rateOfFire: 80,
		damage: 155,
		accuracy: 48,
		stability: 28,
		concealment: 20,
		threat: 28,
		reload: 5.61
	},
	extraStats: {
		tacticalReload: [3.28, 0.33],
		equipDelays: [0.85, 0.55],
		ammoPickup: [0.21, 0.74],
		recoilHorizontal: [-0.46, 0.46],
		recoilVertical: [4.37, 4.6],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		barrel: [
			barrel['Long Barrel (Breaker)'],
			barrel['Short Barrel (Breaker)']
		],
		boost: shotgunBoost,
		gadget: shotgunGadget,
		lowerReceiver: [
			lowerReceiver['Treated Body']
		],
		stock: [
			stock['Long Stock']
		]
	}
}

export default breaker12G