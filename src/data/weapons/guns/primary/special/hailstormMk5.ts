import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const hailstormMk5: WeaponData = {
	name: 'Hailstorm Mk 5',
	image: 'hailstorm',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 48,
	weaponType: 'Special',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 120,
		totalAmmo: 540,
		rateOfFire: 2000,
		damage: 40,
		accuracy: 72,
		stability: 52,
		concealment: 8,
		threat: 12,
		reload: 4.3
	},
	extraStats: {
		tacticalReload: 3.6,
		equipDelays: [0.55, 0.55],
		ammoPickup: [2.7, 8.1],
		recoilHorizontal: [-1.19, 1.19],
		recoilVertical: [0.68, 0.85],
		spread: 1.68,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['v1.4 Barrel'],
			barrel['v3.8 Barrel'],
			barrel['v2.2 Barrel']
		],
		boost: specialBoostTotalAmmo,
		// TODO exclusive set
		grip: [
			grip['Whiteout Grip'],
			grip['Crystalline Grip'],
			grip['FZRA Grip']
		]
	}
}

export default hailstormMk5