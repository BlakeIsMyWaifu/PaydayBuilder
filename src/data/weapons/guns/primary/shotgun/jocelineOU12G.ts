import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const jocelineOU12G: WeaponData = {
	name: 'Joceline O/U 12G',
	image: 'b682',
	source: source.Community,
	inventorySlot: 'primary',
	reputation: 43,
	weaponType: 'Shotgun',
	firingMode: 'Break Action',
	cost: 920e3,
	stats: {
		magazine: 2,
		totalAmmo: 28,
		rateOfFire: 500,
		damage: 155,
		accuracy: 60,
		stability: 28,
		concealment: 5,
		threat: 37,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.55, 0.55],
		ammoPickup: [0.28, 0.98],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [6.67, 6.9],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		boost: shotgunBoost,
		barrel: [
			barrel['Sawed Off Barrel (Joceline)']
		],
		stock: [
			stock['Luxurious Ammo Pouch'],
			stock['Wrist Wrecker Stock']
		]
	}
}

export default jocelineOU12G