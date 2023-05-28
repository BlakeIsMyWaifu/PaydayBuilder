import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const lightCrossbow: WeaponData = {
	name: 'Light Crossbow',
	image: 'frankish',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 17,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 372e3,
	stats: {
		magazine: 1,
		totalAmmo: 50,
		rateOfFire: 40,
		damage: 750,
		accuracy: 96,
		stability: 96,
		concealment: 29,
		threat: 10,
		reload: 1.5
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.5, 0.7],
		ammoPickup: null,
		recoilHorizontal: [-0.6, 0.6],
		recoilVertical: [-0.12, 0.24],
		spread: 0.17,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Explosive Bolt (Light Crossbow)'],
			ammunition['Poison Bolt (Light Crossbow)']
		],
		boost: specialBoost
	}
}

export default lightCrossbow