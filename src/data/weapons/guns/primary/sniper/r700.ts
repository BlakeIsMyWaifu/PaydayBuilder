import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const r700: WeaponData = {
	name: 'R700',
	image: 'r700',
	source: content['Fugitive Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 23,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 510e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 75,
		damage: 246,
		accuracy: 92,
		stability: 28,
		concealment: 10,
		threat: 28,
		reload: 4.7
	},
	extraStats: {
		tacticalReload: 3.35,
		equipDelays: [0.75, 0.45],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [6.9, 11.04],
		spread: 0.48,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (R700)'],
			barrel['Medium Barrel (R700)']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Military Stock'],
			stock['Tactical Stock (R700)']
		]
	}
}

export default r700