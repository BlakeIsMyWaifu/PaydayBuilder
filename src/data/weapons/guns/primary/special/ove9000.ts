import source from 'data/source/miscSources'

import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const ove9000: WeaponData = {
	name: 'OVE9000',
	image: 'saw',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 400,
		damage: 23,
		accuracy: 8,
		stability: 24,
		concealment: 16,
		threat: 24,
		reload: 3.75
	},
	extraStats: {
		tacticalReload: 3.75,
		equipDelays: [0.8, 0.8],
		ammoPickup: null,
		recoilHorizontal: [-2.4, 2.4],
		recoilVertical: [2.4, -2.4],
		spread: null,
		damageModifier: null
	},
	modifications: {
		boost: specialBoostTotalAmmo,
		lowerReceiver: [
			lowerReceiver['Silent Motor'],
			lowerReceiver['Fast Motor']
		],
		magazine: [
			magazine['Durable Blade'],
			magazine['Sharp Blade']
		]
	}
}

export default ove9000