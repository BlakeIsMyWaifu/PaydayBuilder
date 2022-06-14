import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const chimanoCustom: WeaponData = {
	name: 'Chimano Custom',
	image: 'g22c',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 22,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 487e3,
	stats: {
		magazine: 16,
		totalAmmo: 96,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 9,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.4, 3.36],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			...pistolBarrelExt,
			barrelExt['Ventilated Compensator'],
			barrelExt['Velocity Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip (Chimano)'],
			grip['Platypus Grip'],
			grip['Ergo Grip (STRYK / Chimano Custom)']
		],
		magazine: [
			magazine['Extended Mag. (Chimano)']
		],
		sight: pistolSight,
		slide: [
			slide['Long Slide (Chimano Custom)']
		]
	}
}

export default chimanoCustom