import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const signature40: WeaponData = {
	name: 'Signature .40',
	image: 'p226',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 12,
		totalAmmo: 84,
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
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.1, 2.94],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			...pistolBarrelExt,
			barrelExt['Ventilated .40'],
			barrelExt['Velocity .40']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Signature .40)']
		],
		magazine: [
			magazine['Extended Mag. (Signature .40)']
		],
		sight: pistolSight,
		slide: [
			slide['Two Tone Slide'],
			slide['Long Slide (Signature .40)']
		]
	}
}

export default signature40