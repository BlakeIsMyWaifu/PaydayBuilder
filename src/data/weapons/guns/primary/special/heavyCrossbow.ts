import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const heavyCrossbow: WeaponData = {
	name: 'Heavy Crossbow',
	image: 'arblast',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 38,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 871e3,
	stats: {
		magazine: 1,
		totalAmmo: 35,
		rateOfFire: 21,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 28,
		threat: 10,
		reload: 2.5
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
			ammunition['Explosive Bolt (Heavy Crossbow)'],
			ammunition['Poison Bolt (Heavy Crossbow)']
		],
		boost: specialBoostTotalAmmo
	}
}

export default heavyCrossbow