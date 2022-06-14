import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolSight } from '../commonModifications/pistolModifications'

const parabellum: WeaponData = {
	name: 'Parabellum',
	image: 'breech',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 25,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 557e3,
	stats: {
		magazine: 8,
		totalAmmo: 56,
		rateOfFire: 400,
		damage: 180,
		accuracy: 76,
		stability: 24,
		concealment: 29,
		threat: 9,
		reload: 2.1
	},
	extraStats: {
		tacticalReload: 1.33,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.4, 1.96],
		recoilHorizontal: [-1.2, 1.2],
		recoilVertical: [2.88, 4.32],
		spread: 1.44,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Reinforced Barrel'],
			barrel['Short Barrel (Parabellum)']
		],
		boost: pistolBoost,
		grip: [
			grip['Engraved Grip']
		],
		sight: pistolSight
	}
}

export default parabellum