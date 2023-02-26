import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const igorAutomatik: WeaponData = {
	name: 'Igor Automatik',
	image: 'stech',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 20,
		totalAmmo: 80,
		rateOfFire: 750,
		damage: 65,
		accuracy: 56,
		stability: 28,
		concealment: 25,
		threat: 8,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.35, 0.5],
		ammoPickup: [0.8, 2.8],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [0.69, 0.92],
		spread: 2.64,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Tirador Barrel']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Federales Grip'],
			grip['Cartel Grip (Igor)']
		],
		magazine: [
			magazine['Extended Magazine (Igor)']
		],
		sight: pistolSight,
		stock: [
			stock['Federales Stock (Igor)']
		]
	}
}

export default igorAutomatik