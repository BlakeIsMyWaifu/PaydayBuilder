import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const gl40: WeaponData = {
	name: 'GL40',
	image: 'gre_m79',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 46,
	weaponType: 'Special',
	firingMode: 'Break Action',
	cost: 920e3,
	stats: {
		magazine: 1,
		totalAmmo: 6,
		rateOfFire: 30,
		damage: 1300,
		accuracy: 96,
		stability: 96,
		concealment: 18,
		threat: 37,
		reload: 3.1
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Incendiary Round']
		],
		barrel: [
			barrel['Pirate Barrel']
		],
		boost: specialBoost,
		stock: [
			stock['Sawed-off Stock']
		]
	}
}

export default gl40