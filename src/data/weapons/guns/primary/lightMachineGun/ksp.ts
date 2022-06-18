import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bipod from '../../modifications/bipod'
import foregrip from '../../modifications/foregrip'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const ksp: WeaponData = {
	name: 'KSP',
	image: 'm249',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 45,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 200,
		totalAmmo: 400,
		rateOfFire: 909,
		damage: 80,
		accuracy: 48,
		stability: 28,
		concealment: 1,
		threat: 31,
		reload: 5.62
	},
	extraStats: {
		tacticalReload: 5.62,
		equipDelays: [0.9, 0.9],
		ammoPickup: [10.0, 12.0],
		recoilHorizontal: [-2.3, 3.22],
		recoilVertical: [-0.46, 1.84],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (KSP)']
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		foregrip: [
			foregrip['Railed Foregrip (KSP)']
		],
		gadget: lightMachineGunGadget,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Solid Stock (KSP)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default ksp