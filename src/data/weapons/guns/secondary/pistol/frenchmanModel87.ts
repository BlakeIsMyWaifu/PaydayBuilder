import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const frenchmanModel87 = {
	name: 'Frenchman Model 87',
	image: 'model3',
	source: content['Gunslinger Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 581e3,
	stats: {
		magazine: 6,
		totalAmmo: 66,
		rateOfFire: 400,
		damage: 130,
		accuracy: 76,
		stability: 28,
		concealment: 26,
		threat: 22,
		reload: 2.47
	},
	extraStats: {
		tacticalReload: 2.47,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.65, 2.31],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [3.68, 2.99],
		spread: 1.44,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Opera Long Barrel',
				image: 'wpn_fps_pis_model3_b_long', // - wpn_fps_pis_model3_bar_xxx
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Napoleon Barrel',
				image: 'wpn_fps_pis_model3_b_short', // - wpn_fps_pis_model3_bar_xxx__
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					concealment: 2
				}
			}
		],
		boost: pistolBoost,
		grip: [
			{
				name: 'Mule Bone Grip',
				image: 'wpn_fps_pis_model3_g_bling', // - wpn_fps_pis_model3_g_xxx
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default frenchmanModel87