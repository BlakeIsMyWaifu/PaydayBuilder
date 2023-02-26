import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const galant: WeaponData = {
	name: 'Galant',
	image: 'ching',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 25,
	weaponType: 'Assault Rifle',
	firingMode: 'Semi-Automatic',
	cost: 557e3,
	stats: {
		magazine: 8,
		totalAmmo: 72,
		rateOfFire: 600,
		damage: 160,
		accuracy: 84,
		stability: 36,
		concealment: 20,
		threat: 31,
		reload: 1.52
	},
	extraStats: {
		tacticalReload: 2.56,
		equipDelays: [0.55, 0.6],
		ammoPickup: [1.3, 2.88],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 0.96,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Tanker Barrel']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		foregrip: [
			foregrip['Custom Foregrip']
		],
		gadget: assaultRifleGadgetMagnifier,
		sight: assaultRifleSight,
		stock: [
			stock['Magpouch Stock']
		]
	}
}

export default galant