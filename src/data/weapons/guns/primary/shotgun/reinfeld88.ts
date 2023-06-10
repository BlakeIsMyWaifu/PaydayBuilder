import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const reinfeld88 = {
	name: 'Reinfeld 88',
	image: 'm1897',
	source: content['Gunslinger Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 581e3,
	stats: {
		magazine: 7,
		totalAmmo: 35,
		rateOfFire: 120,
		damage: 120,
		accuracy: 40,
		stability: 36,
		concealment: 17,
		threat: 28,
		reload: 6.75
	},
	extraStats: {
		tacticalReload: [2.45, 0.65],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.35, 1.23],
		recoilHorizontal: [-0.21, 0.21],
		recoilVertical: [4.41, 4.62],
		spread: 3.6,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Huntsman Barrel',
				image: 'wpn_fps_shot_m1897_b_long', // - wpn_fps_sho_m1897_b_long
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'Ventilated Barrel',
				image: 'wpn_fps_shot_m1897_b_short', // - wpn_fps_sho_m1897_b_short
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		stock: [
			{
				name: 'Artisan Stock',
				image: 'wpn_fps_shot_m1897_s_short', // - wpn_fps_sho_m1897_s_xxx
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default reinfeld88