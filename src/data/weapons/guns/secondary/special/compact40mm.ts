import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { specialAmmunition, specialBoost, specialGadget, specialSight } from '../commonModifications/specialModifications'

const compact40mm: WeaponData = {
	name: 'Compact 40mm',
	image: 'slap',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 20,
	weaponType: 'Special',
	firingMode: 'Break Action',
	cost: 441e3,
	stats: {
		magazine: 1,
		totalAmmo: 6,
		rateOfFire: 30,
		damage: 1300,
		accuracy: 84,
		stability: 84,
		concealment: 22,
		threat: 37,
		reload: 2.5
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.45, 0.45],
		recoilVertical: [2.61, 2.7],
		spread: 0.96,
		damageModifier: null
	},
	modifications: {
		ammunition: specialAmmunition,
		boost: specialBoost,
		gadget: specialGadget,
		sight: specialSight
	}
}

export default compact40mm