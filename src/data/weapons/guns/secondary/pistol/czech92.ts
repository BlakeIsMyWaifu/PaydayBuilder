import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const czech92: WeaponData = {
	name: 'Czech 92',
	image: 'czech',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 15,
		totalAmmo: 150,
		rateOfFire: 1000,
		damage: 38,
		accuracy: 60,
		stability: 60,
		concealment: 26,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 5.25],
		recoilHorizontal: [-0.75, 0.45],
		recoilVertical: [0.75, 0.6],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Sicario Barrel']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Cartel Grip (Czech)'],
			grip['Sicario Grip']
		],
		magazine: [
			magazine['Extended Magazine (Czech)']
		],
		sight: pistolSight,
		stock: [
			stock['Tirador Stock']
		]
	}
}

export default czech92