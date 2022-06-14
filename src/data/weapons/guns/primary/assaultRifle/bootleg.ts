import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const bootleg: WeaponData = {
	name: 'Bootleg',
	image: 'tecci',
	source: content['Sydney Character Pack'],
	inventorySlot: 'primary',
	reputation: 21,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 464e3,
	stats: {
		magazine: 100,
		totalAmmo: 200,
		rateOfFire: 667,
		damage: 70,
		accuracy: 24,
		stability: 52,
		concealment: 14,
		threat: 14,
		reload: 3.92
	},
	extraStats: {
		tacticalReload: 3.17,
		equipDelays: [0.6, 0.6],
		ammoPickup: [6, 11],
		recoilHorizontal: [-1.7, 1.7],
		recoilVertical: [1.02, 1.36],
		spread: 4.56,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['AML Barrel']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default bootleg