import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const bernettiRangehitter: WeaponData = {
	name: 'Bernetti Rangehitter',
	image: 'sbl',
	source: content['Gunslinger Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Sniper',
	firingMode: 'Lever Action',
	cost: 581e3,
	stats: {
		magazine: 10,
		totalAmmo: 50,
		rateOfFire: 120,
		damage: 196,
		accuracy: 68,
		stability: 20,
		concealment: 19,
		threat: 28,
		reload: 7.73
	},
	extraStats: {
		tacticalReload: [2.27, 0.57],
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.5, 3.75],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [5.0, 7.5],
		spread: 1.92,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			barrel['Deep Range Barrel'],
			barrel['Wind Whistler Barrel']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Club Stock']
		]
	}
}

export default bernettiRangehitter