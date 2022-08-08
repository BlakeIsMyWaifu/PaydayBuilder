import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialSight } from '../commonModifications/specialModifications'

const airbow: WeaponData = {
	name: 'Airbow',
	image: 'ecp',
	source: content['h3h3 Character Pack'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Semi-Automatic',
	cost: 372e3,
	stats: {
		magazine: 6,
		totalAmmo: 30,
		rateOfFire: 120,
		damage: 700,
		accuracy: 84,
		stability: 84,
		concealment: 5,
		threat: 10,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.7],
		ammoPickup: null,
		recoilHorizontal: [-0.9, 0.9],
		recoilVertical: [-0.18, 0.36],
		spread: 0.67,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Explosive Arrow (Airbow)'],
			ammunition['Poison Arrow (Airbow)']
		],
		boost: specialBoostTotalAmmo,
		sight: specialSight,
		stock: [
			stock['Light Stock (Airbow)']
		]
	}
}

export default airbow