import content from 'data/source/downloadableContent'

import foregrip from '../../modifications/foregrip'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const cavity9mm: WeaponData = {
	name: 'Cavity 9mm',
	image: 'sub2000',
	source: content['The Golden Grin Casino Heist'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Assault Rifle',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 33,
		totalAmmo: 66,
		rateOfFire: 706,
		damage: 160,
		accuracy: 72,
		stability: 32,
		concealment: 27,
		threat: 31,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [1.19, 2.64],
		recoilHorizontal: [-2.2, 2.2],
		recoilVertical: [1.32, 1.76],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		foregrip: [
			foregrip['Appalachian Foregrip'],
			foregrip['Delabarre Foregrip'],
			foregrip['Tooth Fairy Suppressor']
		],
		gadget: assaultRifleGadgetMagnifier,
		sight: assaultRifleSight
	}
}

export default cavity9mm