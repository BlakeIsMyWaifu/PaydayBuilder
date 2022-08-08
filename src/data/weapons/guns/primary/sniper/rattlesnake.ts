import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const rattlesnake: WeaponData = {
	name: 'Rattlesnake',
	image: 'msr',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 327e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 60,
		damage: 246,
		accuracy: 88,
		stability: 28,
		concealment: 5,
		threat: 26,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 2.6,
		equipDelays: [0.7, 0.6],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [6.9, 11.04],
		spread: 0.72,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Rattlesnake)']
		],
		barrelExt: [
			barrelExt['Sniper Suppressor']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Tactical Aluminium Body']
		]
	}
}

export default rattlesnake