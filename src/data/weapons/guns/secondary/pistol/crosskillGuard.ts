import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const crosskillGuard: WeaponData = {
	name: 'Crosskill Guard',
	image: 'shrew',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 27,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 605e3,
	stats: {
		magazine: 17,
		totalAmmo: 153,
		rateOfFire: 545,
		damage: 53,
		accuracy: 64,
		stability: 60,
		concealment: 30,
		threat: 8,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.83, 5.36],
		recoilHorizontal: [0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Blinged Grip'],
			grip['Ergonomic Grip (Crosskill Guard)']
		],
		magazine: [
			magazine['Extended Mag (Crosskill Guard)']
		],
		sight: pistolSight,
		slide: [
			slide['Milled Slide']
		]
	}
}

export default crosskillGuard