import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const grom: WeaponData = {
	name: 'Grom',
	image: 'siltstone',
	source: content['Gage Russian Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 46,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 920e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 150,
		damage: 160,
		accuracy: 72,
		stability: 4,
		concealment: 16,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-1.16, 1.16],
		recoilVertical: [4.35, 5.8],
		spread: 1.68,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			barrel['Grievky Compensator'],
			barrel['Tikho Barrel']
		],
		boost: sniperBoost,
		foregrip: [
			foregrip['Lightweight Foregrip']
		],
		gadget: sniperGadgetMagnifier,
		sight: sniperSight,
		stock: [
			stock['Lightweight Stock']
		]
	}
}

export default grom