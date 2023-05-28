import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import extra from '../../modifications/extra'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost, specialGadget } from '../commonModifications/specialModifications'

const vulcanMinigun: WeaponData = {
	name: 'Vulcan Minigun',
	image: 'm134',
	source: content['The OVERKILL Pack'],
	inventorySlot: 'primary',
	reputation: 40,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 871e3,
	stats: {
		magazine: 750,
		totalAmmo: 750,
		rateOfFire: 3000,
		damage: 25,
		accuracy: 32,
		stability: 24,
		concealment: 5,
		threat: 31,
		reload: 7.8
	},
	extraStats: {
		tacticalReload: 7.8,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 26.25],
		recoilHorizontal: [-0.36, 0.48],
		recoilVertical: [-0.12, 0.24],
		spread: 4.08,
		damageModifier: null
	},
	modifications: {
		barrel: [
			barrel['Aerial Assault Barrel'],
			barrel['The Stump Barrel']
		],
		boost: specialBoost,
		extra: [
			extra['I\'ll Take Half That Kit']
		],
		gadget: specialGadget
	}
}

export default vulcanMinigun