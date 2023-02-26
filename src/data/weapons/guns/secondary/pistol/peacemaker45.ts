import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import slide from '../../modifications/slide'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const peacemaker45: WeaponData = {
	name: 'Peacemaker .45',
	image: 'peacemaker',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'secondary',
	reputation: 31,
	weaponType: 'Pistol',
	firingMode: 'Single action',
	cost: 700e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 180,
		accuracy: 84,
		stability: 12,
		concealment: 26,
		threat: 28,
		reload: 7.09
	},
	extraStats: {
		tacticalReload: [3.76, 0.67],
		equipDelays: [0.65, 0.65],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.35, 1.35],
		recoilVertical: [7.83, 8.1],
		spread: 0.96,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		boost: pistolBoost,
		grip: [
			grip['Grand Grip']
		],
		slide: [
			slide['Precision Barrel (Peacemaker)'],
			slide['Shootout Barrel']
		],
		stock: [
			stock['Ol´ Ben\'s Stock']
		]
	}
}

export default peacemaker45