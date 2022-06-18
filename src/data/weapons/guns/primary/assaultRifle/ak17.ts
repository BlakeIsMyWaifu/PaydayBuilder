import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak17: WeaponData = {
	name: 'AK17',
	image: 'flint',
	source: content['Gage Russian Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 16,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 350e3,
	stats: {
		magazine: 35,
		totalAmmo: 105,
		rateOfFire: 652,
		damage: 99,
		accuracy: 60,
		stability: 60,
		concealment: 16,
		threat: 14,
		reload: 3.37
	},
	extraStats: {
		tacticalReload: 2.26,
		equipDelays: [0.5, 0.5],
		ammoPickup: [3.15, 4.72],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		magazine: [
			magazine['AK Quadstacked Mag'],
			magazine['Low Drag Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default ak17