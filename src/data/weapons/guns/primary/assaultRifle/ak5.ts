import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak5: WeaponData = {
	name: 'AK5',
	image: 'ak5',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 749e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 706,
		damage: 66,
		accuracy: 60,
		stability: 60,
		concealment: 18,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['CQB Barrel (AK5)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Karbin Ceres Handguard'],
			foregrip['Belgian Heat Handguard']
		],
		gadget: assaultRifleGadgetMagnifier,
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Bertil Stock'],
			stock['Caesar Stock']
		]
	}
}

export default ak5