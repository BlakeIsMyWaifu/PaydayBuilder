import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const gsps12G: WeaponData = {
	name: 'GSPS 12G',
	image: 'm37',
	source: content['The Goat Simulator Heist'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 510e3,
	stats: {
		magazine: 7,
		totalAmmo: 28,
		rateOfFire: 104,
		damage: 155,
		accuracy: 44,
		stability: 52,
		concealment: 22,
		threat: 28,
		reload: 6.75
	},
	extraStats: {
		tacticalReload: [2.45, 0.65],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.7, 0.98],
		recoilHorizontal: [-0.34, 0.34],
		recoilVertical: [3.23, 3.4],
		spread: 3.36,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		barrel: [
			barrel['Riot Barrel']
		],
		boost: shotgunBoost,
		gadget: shotgunGadget,
		stock: [
			stock['Stakeout Stock (GSPS)']
		]
	}
}

export default gsps12G