import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoostConcealment, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const gruberKurz: WeaponData = {
	name: 'Gruber Kurz',
	image: 'ppk',
	source: content['Armored Transport'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 14,
		totalAmmo: 154,
		rateOfFire: 545,
		damage: 53,
		accuracy: 44,
		stability: 60,
		concealment: 30,
		threat: 4,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.55,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.85, 5.39],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 3.36,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoostConcealment,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip (Gruber Kurz)']
		],
		sight: pistolSight,
		slide: [
			slide['Long Slide (Gruber Kurz)']
		]
	}
}

export default gruberKurz