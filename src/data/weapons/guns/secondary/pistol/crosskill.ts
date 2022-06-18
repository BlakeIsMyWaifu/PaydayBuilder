import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import { WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const crosskill: WeaponData = {
	name: 'Crosskill',
	image: 'colt_1911',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 58e3,
	stats: {
		magazine: 10,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			...pistolBarrelExt,
			barrelExt['Aggressor Compensator'],
			barrelExt['Punisher Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Crosskill)'],
			grip['Bling Grip (Crosskill)'],
			grip['Engraved Crosskill Grips']
		],
		magazine: [
			magazine['12rnd Mag.'],
			magazine['Magazine with Ameritude!']
		],
		sight: [
			sight['Marksman Sight'],
			...pistolSight
		],
		slide: [
			slide['Vented Slide'],
			slide['Long Vented Slide']
		]
	}
}

export default crosskill