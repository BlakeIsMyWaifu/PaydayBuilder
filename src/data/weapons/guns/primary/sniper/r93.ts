import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const r93: WeaponData = {
	name: 'R93',
	image: 'r93',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 35,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 798e3,
	stats: {
		magazine: 6,
		totalAmmo: 30,
		rateOfFire: 50,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 5,
		threat: 31,
		reload: 3.82
	},
	extraStats: {
		tacticalReload: 2.82,
		equipDelays: [0.65, 0.7],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.27, 0.27],
		recoilVertical: [8.1, 10.26],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (R93)'],
			barrel['Compensated Suppressor']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Wooden Body']
		]
	}
}

export default r93