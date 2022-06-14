import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const pistolCrossbow: WeaponData = {
	name: 'Pistol Crossbow',
	image: 'hunter',
	source: content['Gage Ninja Pack'],
	inventorySlot: 'secondary',
	reputation: 16,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 349e3,
	stats: {
		magazine: 1,
		totalAmmo: 25,
		rateOfFire: 50,
		damage: 350,
		accuracy: 96,
		stability: 96,
		concealment: 26,
		threat: 10,
		reload: 1.2
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.5, 0.55],
		ammoPickup: null,
		recoilHorizontal: [-0.6, 0.6],
		recoilVertical: [-0.12, 0.24],
		spread: 0.17,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Explosive Bolts (Pistol Crossbow)'],
			ammunition['Poisoned Bolts (Pistol Crossbow)']
		],
		barrel: [
			barrel['Carbon Limb'],
			barrel['Skeletal Limb']
		],
		boost: specialBoostTotalAmmo,
		grip: [
			grip['Camo Grip'],
			grip['Walnut Grip']
		],
		sight: [
			sight['Pistol Red Dot Sight'],
			sight['SKOLD Micro Reflex Sight'],
			sight['Riktpunkt Holosight']
		]
	}
}

export default pistolCrossbow