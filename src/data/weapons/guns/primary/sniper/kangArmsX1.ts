import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import { WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const kangArmsX1: WeaponData = {
	name: 'Káng Arms X1',
	image: 'qbu88',
	source: content['Jiu Feng Smuggler Pack 2'],
	inventorySlot: 'primary',
	reputation: -1,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 150,
		damage: 160,
		accuracy: 80,
		stability: 48,
		concealment: 12,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.72, 0.72],
		recoilVertical: [2.7, 3.6],
		spread: 1.2,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			barrel['KA-ZD1A Long Barrel'],
			barrel['KA-ZD1B Short Barrel']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		magazine: [
			magazine['KA-ZDM2 Extended Magazine']
		],
		sight: [
			...sniperSight,
			sight['KA-ZD032 Iron Sight']
		]
	}
}

export default kangArmsX1