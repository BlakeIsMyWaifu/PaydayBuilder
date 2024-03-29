import source from 'data/source/miscSources'

import bipod from '../../modifications/bipod'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const ksp58 = {
	name: 'KSP 58',
	image: 'par',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 23,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 510e3,
	stats: {
		magazine: 200,
		totalAmmo: 400,
		rateOfFire: 909,
		damage: 80,
		accuracy: 52,
		stability: 28,
		concealment: 1,
		threat: 31,
		reload: 6.5
	},
	extraStats: {
		tacticalReload: 6.5,
		equipDelays: [0.9, 0.9],
		ammoPickup: [10.0, 12.0],
		recoilHorizontal: [-2.3, 3.91],
		recoilVertical: [-0.46, 1.84],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_lmg_par_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 0,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: 2
				}
			}
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		gadget: lightMachineGunGadget,
		stock: [
			{
				name: 'Plastic Stock',
				image: 'wpn_fps_lmg_par_s_plastic',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 0,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 4,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default ksp58