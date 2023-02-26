import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const gecko762: WeaponData = {
	name: 'Gecko 7.62',
	image: 'galil',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 34,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 773e3,
	stats: {
		magazine: 35,
		totalAmmo: 175,
		rateOfFire: 845,
		damage: 67,
		accuracy: 48,
		stability: 68,
		concealment: 15,
		threat: 24,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.14,
		equipDelays: [0.6, 0.6],
		ammoPickup: [5.25, 9.63],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 3.12,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Fabulous Foregrip'],
			barrel['CQB Foregrip (Gecko)'],
			barrel['Light Foregrip'],
			barrel['Sniper Foregrip']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Sniper Grip']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Fabulous Stock'],
			stock['Light Stock (Gecko)'],
			stock['Plastic Stock (Gecko)'],
			stock['Skeletal Stock (Gecko)'],
			stock['Sniper Stock (Gecko)'],
			stock['Wooden Stock (Gecko)']
		]
	}
}

export default gecko762