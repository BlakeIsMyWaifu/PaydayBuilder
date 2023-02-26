import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bayonet from '../../modifications/bayonet'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const nagant: WeaponData = {
	name: 'Nagant',
	image: 'mosin',
	source: content['Gage Historical Pack'],
	inventorySlot: 'primary',
	reputation: 54,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 25,
		rateOfFire: 60,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 6,
		threat: 28,
		reload: 3.85
	},
	extraStats: {
		tacticalReload: 3.85,
		equipDelays: [0.5, 0.6],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (Nagant)'],
			barrel['Long Barrel (Nagant)'],
			barrel['Silenced Barrel (Nagant)']
		],
		bayonet: [
			bayonet['Nagant Bayonet']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Discrete Stock (Nagant)']
		]
	}
}

export default nagant