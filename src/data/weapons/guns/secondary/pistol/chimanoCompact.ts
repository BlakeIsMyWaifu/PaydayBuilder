import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const chimanoCompact: WeaponData = {
	name: 'Chimano Compact',
	image: 'g26',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 27,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 605e3,
	stats: {
		magazine: 10,
		totalAmmo: 150,
		rateOfFire: 545,
		damage: 53,
		accuracy: 52,
		stability: 60,
		concealment: 30,
		threat: 4,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.75, 5.25],
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
		lowerReceiver: [
			lowerReceiver['Striking Body Kit']
		],
		magazine: [
			magazine['Striking Mag'],
			magazine['Extended Mag. (Chimano)']
		],
		sight: pistolSight,
		slide: [
			slide['Striking Slide']
		]
	}
}

export default chimanoCompact