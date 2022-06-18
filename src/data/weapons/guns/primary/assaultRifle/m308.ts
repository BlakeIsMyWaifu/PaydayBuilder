import source from 'data/source/miscSources'

import extra from '../../modifications/extra'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const m308: WeaponData = {
	name: 'M308',
	image: 'new_m14',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 581e3,
	stats: {
		magazine: 10,
		totalAmmo: 70,
		rateOfFire: 706,
		damage: 160,
		accuracy: 84,
		stability: 36,
		concealment: 8,
		threat: 31,
		reload: 3.15
	},
	extraStats: {
		tacticalReload: 2.65,
		equipDelays: [0.55, 0.6],
		ammoPickup: [1.26, 2.8],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 0.96,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		extra: [
			extra['Scope Mount (M308)']
		],
		gadget: assaultRifleGadgetMagnifier,
		sight: assaultRifleSight,
		stock: [
			stock['Abraham Body'],
			stock['Jaeger Body'],
			stock['B-Team Stock']
		]
	}
}

export default m308