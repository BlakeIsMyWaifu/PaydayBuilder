import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const whiteStreak: WeaponData = {
	name: 'White Streak',
	image: 'pl14',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 14,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 305e3,
	stats: {
		magazine: 12,
		totalAmmo: 60,
		rateOfFire: 400,
		damage: 120,
		accuracy: 68,
		stability: 32,
		concealment: 29,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [2.64, 3.96],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Prototype Barrel (White Streak)']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Extended Magazine (White Streak)']
		],
		sight: pistolSight
	}
}

export default whiteStreak