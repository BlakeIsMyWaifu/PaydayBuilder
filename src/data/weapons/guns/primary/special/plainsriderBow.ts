import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import boost from '../../modifications/boost'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const plainsriderBow: WeaponData = {
	name: 'Plainsrider Bow',
	image: 'plainsrider',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 327e3,
	stats: {
		magazine: 1,
		totalAmmo: 50,
		rateOfFire: 300,
		damage: 1000,
		accuracy: 96,
		stability: 96,
		concealment: 30,
		threat: 37,
		reload: 0.33
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.55, 0.55],
		ammoPickup: null,
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Poisoned Arrows (Plainsrider)'],
			ammunition['Explosive Arrows (Plainsrider)']
		],
		boost: [
			...specialBoost,
			boost['Total Ammo (Plainsrider)']
		]
	}
}

export default plainsriderBow