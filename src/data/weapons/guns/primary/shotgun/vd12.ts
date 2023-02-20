import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSight } from '../commonModifications/shotgunModifications'

const vd12: WeaponData = {
	name: 'VD-12',
	image: 'sko12',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 270e3,
	stats: {
		magazine: 28,
		totalAmmo: 56,
		rateOfFire: 273,
		damage: 65,
		accuracy: 28,
		stability: 44,
		concealment: 6,
		threat: 28,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 3.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.8, 4.2],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Long Barrel (VD-12)'],
			barrel['Short Barrel (VD-12)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: shotgunCustom,
		// TODO exclusiveSlot
		foregrip: [
			foregrip['Front Mounting Rail']
		],
		gadget: shotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip']
		],
		// TODO secondary sight
		sight: shotgunSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		]
	}
}

export default vd12