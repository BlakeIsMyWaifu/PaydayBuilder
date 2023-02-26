import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const bernettiAuto: WeaponData = {
	name: 'Bernetti Auto',
	image: 'beer',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 15,
		totalAmmo: 195,
		rateOfFire: 1101,
		damage: 25,
		accuracy: 40,
		stability: 64,
		concealment: 28,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.95, 6.83],
		recoilHorizontal: [-0.28, 0.28],
		recoilVertical: [0.56, 0.7],
		spread: 3.6,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Weller Barrel']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Cartel Grip (Bernetti Auto)'],
			grip['Weller Grip']
		],
		magazine: [
			magazine['Extended Magazine (Bernetti Auto)']
		],
		sight: pistolSight,
		stock: [
			stock['Federales Stock (Bernetti Auto)']
		]
	}
}

export default bernettiAuto