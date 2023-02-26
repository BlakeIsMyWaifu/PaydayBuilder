import content from 'data/source/downloadableContent'

import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const crosskillChunkyCompact: WeaponData = {
	name: 'Crosskill Chunky Compact',
	image: 'm1911',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 134e3,
	stats: {
		magazine: 12,
		totalAmmo: 60,
		rateOfFire: 480,
		damage: 110,
		accuracy: 64,
		stability: 32,
		concealment: 28,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-0.88, 0.88],
		recoilVertical: [3.52, 3.96],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Crosskill Long Mag']
		],
		sight: pistolSight,
		slide: [
			slide['Chunky Hunter Barrel'],
			slide['Crosskill Platinum Bull Slide']
		]
	}
}

export default crosskillChunkyCompact