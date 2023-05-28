import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import exclusiveSet from '../../modifications/exclusiveSet'
import receiver from '../../modifications/receiver'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { specialAmmunition, specialBoost, specialGadget, specialSight } from '../commonModifications/specialModifications'

const basilisk3V: WeaponData = {
	name: 'Basilisk 3V',
	image: 'ms3gl',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Break Action',
	cost: 736e3,
	stats: {
		magazine: 3,
		totalAmmo: 9,
		rateOfFire: 182,
		damage: 320,
		accuracy: 36,
		stability: 76,
		concealment: 21,
		threat: 37,
		reload: 7.33
	},
	extraStats: {
		tacticalReload: [5.33, 1.0],
		equipDelays: [1.0, 0.6],
		ammoPickup: [0.55, 0.65],
		recoilHorizontal: [-0.55, 0.55],
		recoilVertical: [3.19, 3.3],
		spread: 3.84,
		damageModifier: null
	},
	modifications: {
		ammunition: specialAmmunition,
		barrel: [
			barrel['Fang Barrel']
		],
		boost: specialBoost,
		exclusiveSet: [
			exclusiveSet.Venomous
		],
		gadget: specialGadget,
		receiver: [
			receiver.Serpent
		],
		sight: specialSight,
		stock: [
			stock['Copperhead Recoil Pad']
		]
	}
}

export default basilisk3V