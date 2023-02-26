import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const mosconi12G: WeaponData = {
	name: 'Mosconi 12G',
	image: 'huntsman',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Shotgun',
	firingMode: 'Break Action',
	cost: 896e3,
	stats: {
		magazine: 2,
		totalAmmo: 32,
		rateOfFire: 500,
		damage: 155,
		accuracy: 60,
		stability: 36,
		concealment: 7,
		threat: 37,
		reload: 2.5
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.32, 1.12],
		recoilHorizontal: [-1.05, 1.05],
		recoilVertical: [6.09, 6.3],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		boost: shotgunBoost,
		barrel: [
			barrel['Road Warrior Barrel']
		],
		stock: [
			stock['Gangsta Special Stock']
		]
	}
}

export default mosconi12G