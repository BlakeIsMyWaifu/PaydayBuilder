import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import bipod from '../../modifications/bipod'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const rpk: WeaponData = {
	name: 'RPK',
	image: 'rpk',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 100,
		totalAmmo: 300,
		rateOfFire: 750,
		damage: 120,
		accuracy: 28,
		stability: 8,
		concealment: 5,
		threat: 22,
		reload: 4.56
	},
	extraStats: {
		tacticalReload: 3.4,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.8, 3.92],
		recoilVertical: [-0.56, 2.24],
		spread: 4.32,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrelExt: [
			...lightMachineGunBarrelExt,
			barrelExt['PBS Suppressor']
		],
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		foregrip: [
			foregrip['Tactical Foregrip (RPK)']
		],
		gadget: lightMachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Plastic Stock (RPK)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default rpk