import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolSight } from '../commonModifications/pistolModifications'

const m139mm: WeaponData = {
	name: 'M13 9mm',
	image: 'legacy',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 15,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 13,
		totalAmmo: 156,
		rateOfFire: 545,
		damage: 53,
		accuracy: 44,
		stability: 48,
		concealment: 30,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.9, 5.46],
		recoilHorizontal: [-0.9, 0.9],
		recoilVertical: [2.16, 3.24],
		spread: 3.36,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Threaded Barrel (M13)']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		grip: [
			grip['Wooden Grip (M13)']
		],
		sight: pistolSight
	}
}

export default m139mm