import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const claire12G: WeaponData = {
	name: 'Claire 12G',
	image: 'coach',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 43,
	weaponType: 'Shotgun',
	firingMode: 'Single action',
	cost: 920e3,
	stats: {
		magazine: 2,
		totalAmmo: 44,
		rateOfFire: 500,
		damage: 155,
		accuracy: 56,
		stability: 44,
		concealment: 10,
		threat: 28,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.4, 0.6],
		ammoPickup: [0.22, 0.66],
		recoilHorizontal: [-0.76, 0.57],
		recoilVertical: [3.23, 3.42],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Sawed-Off Barrel (Claire)']
		],
		boost: shotgunBoost,
		stock: [
			stock['Deadman\'s Stock']
		]
	}
}

export default claire12G