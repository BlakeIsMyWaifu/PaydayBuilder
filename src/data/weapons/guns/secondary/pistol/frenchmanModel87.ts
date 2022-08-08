import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const frenchmanModel87: WeaponData = {
	name: 'Frenchman Model 87',
	image: 'model3',
	source: content['Gunslinger Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 581e3,
	stats: {
		magazine: 6,
		totalAmmo: 66,
		rateOfFire: 400,
		damage: 130,
		accuracy: 76,
		stability: 28,
		concealment: 26,
		threat: 22,
		reload: 2.47
	},
	extraStats: {
		tacticalReload: 2.47,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.65, 2.31],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [3.68, 2.99],
		spread: 1.44,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Opera Long Barrel'],
			barrel['Napoleon Barrel']
		],
		boost: pistolBoost,
		grip: [
			grip['Mule Bone Grip']
		]
	}
}

export default frenchmanModel87