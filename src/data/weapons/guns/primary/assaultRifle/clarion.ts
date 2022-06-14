import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const clarion: WeaponData = {
	name: 'Clarion',
	image: 'famas',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 27,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 605e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 1000,
		damage: 51,
		accuracy: 36,
		stability: 68,
		concealment: 24,
		threat: 14,
		reload: 3.78
	},
	extraStats: {
		tacticalReload: 2.72,
		equipDelays: [0.6, 0.55],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 3.84,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Clarion)'],
			barrel['Short Barrel (Clarion)'],
			barrel['Sniper Barrel'],
			barrel['Suppressed Barrel (Clarion)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['G2 Grip']
		],
		sight: assaultRifleSight
	}
}

export default clarion