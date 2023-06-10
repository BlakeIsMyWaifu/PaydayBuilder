import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const peacemaker45 = {
	name: 'Peacemaker .45',
	image: 'peacemaker',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'secondary',
	reputation: 31,
	weaponType: 'Pistol',
	firingMode: 'Single action',
	cost: 700e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 180,
		accuracy: 84,
		stability: 12,
		concealment: 26,
		threat: 28,
		reload: 7.09
	},
	extraStats: {
		tacticalReload: [3.76, 0.67],
		equipDelays: [0.65, 0.65],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.35, 1.35],
		recoilVertical: [7.83, 8.1],
		spread: 0.96,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		boost: pistolBoost,
		grip: [
			{
				name: 'Grand Grip',
				image: 'wpn_fps_pis_peacemaker_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		],
		slide: [
			{
				name: 'Precision Barrel',
				image: 'wpn_fps_pis_peacemaker_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -2
				}
			},
			{
				name: 'Shootout Barrel',
				image: 'wpn_fps_pis_peacemaker_b_short',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					concealment: 2
				}
			}
		],
		stock: [
			{
				name: 'Ol´ Ben\'s Stock',
				image: 'wpn_fps_pis_peacemaker_s_skeletal',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default peacemaker45