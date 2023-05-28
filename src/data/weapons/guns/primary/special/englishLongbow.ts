import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const englishLongbow: WeaponData = {
	name: 'English Longbow',
	image: 'long',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 652e3,
	stats: {
		magazine: 1,
		totalAmmo: 35,
		rateOfFire: 300,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 29,
		threat: 37,
		reload: 1.5
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
		ammunition: [
			ammunition['Explosive Arrow (English Longbow)'],
			ammunition['Poison Arrow (English Longbow)']
		],
		boost: specialBoost
	}
}

export default englishLongbow