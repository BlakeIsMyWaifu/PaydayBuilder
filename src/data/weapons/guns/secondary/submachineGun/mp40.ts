import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const mp40 = {
	name: 'MP40',
	image: 'erma',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 25,
	weaponType: 'Submachine Gun',
	firingMode: 'Fully automatic',
	cost: 557e3,
	stats: {
		magazine: 40,
		totalAmmo: 80,
		rateOfFire: 600,
		damage: 99,
		accuracy: 68,
		stability: 44,
		concealment: 24,
		threat: 10,
		reload: 3.05
	},
	extraStats: {
		tacticalReload: 1.90,
		equipDelays: [0.6, 0.5],
		ammoPickup: [0.8, 2.8],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [-2.28, 2.28],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		gadget: submachineGunGadget,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Folded Stock',
				image: 'wpn_fps_smg_erma_s_folded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -8,
					concealment: 3
				}
			}
		]
	}
} as const satisfies WeaponData

export default mp40