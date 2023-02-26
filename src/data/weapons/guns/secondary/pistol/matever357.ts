import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const matever357: WeaponData = {
	name: 'Matever .357',
	image: 'mateba',
	source: content['The Alesso Heist'],
	inventorySlot: 'secondary',
	reputation: 34,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 773e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 180,
		accuracy: 84,
		stability: 12,
		concealment: 20,
		threat: 24,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 3.6,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.35, 1.35],
		recoilVertical: [3.24, 4.86],
		spread: 0.96,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Pesante Barrel'],
			barrel['Medio Barrel'],
			barrel['Pisccolo Barrel']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Noir Grip']
		]
	}
}

export default matever357