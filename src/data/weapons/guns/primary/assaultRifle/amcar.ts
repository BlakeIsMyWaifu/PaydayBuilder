import source from 'data/source/miscSources'

import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const amcar: WeaponData = {
	name: 'AMCAR',
	image: 'amcar',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 545,
		damage: 45,
		accuracy: 36,
		stability: 76,
		concealment: 21,
		threat: 14,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.55, 0.6],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [0.66, 0.88],
		spread: 3.84,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		magazine: [
			magazine['Milspec Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default amcar