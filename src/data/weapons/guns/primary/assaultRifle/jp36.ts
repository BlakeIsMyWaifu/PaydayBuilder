import source from 'data/source/miscSources'

import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const jp36: WeaponData = {
	name: 'JP36',
	image: 'g36',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 16,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 349e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 706,
		damage: 54,
		accuracy: 40,
		stability: 64,
		concealment: 19,
		threat: 13,
		reload: 3.85
	},
	extraStats: {
		tacticalReload: 2.85,
		equipDelays: [0.6, 0.6],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 3.6,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Compact Foregrip'],
			foregrip['Polizei Special Foregrip'],
			foregrip['JP36 Long Foregrip']
		],
		gadget: assaultRifleGadgetMagnifier,
		magazine: [
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Solid Stock (JP36)'],
			stock['Sniper Stock (JP36)']
		]
	}
}

export default jp36