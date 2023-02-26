import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const chimano88: WeaponData = {
	name: 'Chimano 88',
	image: 'glock_17',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 17,
		totalAmmo: 153,
		rateOfFire: 545,
		damage: 53,
		accuracy: 52,
		stability: 60,
		concealment: 30,
		threat: 8,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.83, 5.36],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip (Chimano)'],
			grip['Platypus Grip']
		],
		magazine: [
			magazine['Extended Mag. (Chimano)']
		],
		sight: pistolSight
	}
}

export default chimano88