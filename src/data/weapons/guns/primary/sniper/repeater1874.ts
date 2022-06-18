import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import sight from '../../modifications/sight'
import { WeaponData } from '../../weaponTypes'
import { sniperBoost } from '../commonModifications/sniperModifications'

const repeater1874: WeaponData = {
	name: 'Repeater 1874',
	image: 'winchester1874',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'primary',
	reputation: 36,
	weaponType: 'Sniper',
	firingMode: 'Lever Action',
	cost: 822e3,
	stats: {
		magazine: 15,
		totalAmmo: 45,
		rateOfFire: 86,
		damage: 246,
		accuracy: 92,
		stability: 20,
		concealment: 12,
		threat: 28,
		reload: 10.57
	},
	extraStats: {
		tacticalReload: [2.27, 0.57],
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.25, 3.38],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [7.5, 12.0],
		spread: 0.48,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			barrel['Long Range Barrel'],
			barrel['Outlaw\'s Silenced Barrel']
		],
		boost: sniperBoost,
		sight: [
			sight['A5 Scope']
		]
	}
}

export default repeater1874