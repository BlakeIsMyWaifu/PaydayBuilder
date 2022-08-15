import content from 'data/source/downloadableContent'

import gadget from '../../modifications/gadget'
import { WeaponData } from '../../weaponTypes'
import { specialBoost, specialSight } from '../commonModifications/specialModifications'

const hrl7: WeaponData = {
	name: 'HRL-7',
	image: 'rpg7',
	source: content['The OVERKILL Pack'],
	inventorySlot: 'secondary',
	reputation: 38,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 871e3,
	stats: {
		magazine: 1,
		totalAmmo: 4,
		rateOfFire: 30,
		damage: 12500,
		accuracy: 96,
		stability: 96,
		concealment: 5,
		threat: 37,
		reload: 4.7
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.85, 0.85],
		ammoPickup: null,
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		boost: specialBoost,
		gadget: [
			gadget['Riktpunkt Magnifier Gadget']
		],
		sight: specialSight
	}
}

export default hrl7