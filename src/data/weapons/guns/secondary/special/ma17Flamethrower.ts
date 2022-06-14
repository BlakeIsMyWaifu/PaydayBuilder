import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialGadget } from '../commonModifications/specialModifications'

const ma17Flamethrower: WeaponData = {
	name: 'MA-17 Flamethrower',
	image: 'system',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 700,
		totalAmmo: 1400,
		rateOfFire: 2000,
		damage: 7,
		accuracy: 0,
		stability: 0,
		concealment: 15,
		threat: 37,
		reload: 8.5
	},
	extraStats: {
		tacticalReload: 8.5,
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.5, 10.5],
		recoilHorizontal: [0.0, 0.0],
		recoilVertical: [0.0, 0.0],
		spread: 6.0,
		damageModifier: null
	},
	modifications: {
		barrel: [
			barrel['Merlin Nozzle']
		],
		boost: specialBoostTotalAmmo,
		gadget: specialGadget,
		magazine: [
			magazine['High Temperature Mixture'],
			magazine['Low Temperature Mixture']
		]
	}
}

export default ma17Flamethrower