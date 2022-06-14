import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const falcon: WeaponData = {
	name: 'Falcon',
	image: 'fal',
	source: content['The Big Bank Heist'],
	inventorySlot: 'primary',
	reputation: 42,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 20,
		totalAmmo: 100,
		rateOfFire: 698,
		damage: 98,
		accuracy: 68,
		stability: 44,
		concealment: 10,
		threat: 22,
		reload: 3.28
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.6, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['CQB Foregrip (Falcon)'],
			barrel['Retro Foregrip'],
			barrel['Marksman Foregrip'],
			barrel['Wooden Foregrip']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Tactical Grip']
		],
		magazine: [
			magazine['Extended Magazine (Falcon)']
		],
		sight: assaultRifleSight,
		stock: [
			stock['CQB Stock'],
			stock['Marksman Stock (Falcon)'],
			stock['Wooden Stock (Falcon)']
		]
	}
}

export default falcon