import content from 'data/source/downloadableContent'

import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const leo: WeaponData = {
	name: 'LEO',
	image: 'hs2000',
	source: content['The Bomb Heists'],
	inventorySlot: 'secondary',
	reputation: 28,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 628e3,
	stats: {
		magazine: 19,
		totalAmmo: 95,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.5, 0.5],
		ammoPickup: [2.38, 3.33],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Extended Mag (LEO)']
		],
		sight: pistolSight,
		slide: [
			slide['Custom Slide'],
			slide['Long Slide (LEO)']
		]
	}
}

export default leo