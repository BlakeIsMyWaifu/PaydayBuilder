import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoostConcealment, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const gruberKurz = {
	name: 'Gruber Kurz',
	image: 'ppk',
	source: content['Armored Transport'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 14,
		totalAmmo: 154,
		rateOfFire: 545,
		damage: 53,
		accuracy: 44,
		stability: 60,
		concealment: 30,
		threat: 4,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.55,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.85, 5.39],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 3.36,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoostConcealment,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Laser Grip',
				image: 'wpn_fps_pis_ppk_g_laser',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Armored Transport'],
				cost: 10800,
				stats: {
					accuracy: 8
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Long Slide',
				image: 'wpn_fps_pis_ppk_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Armored Transport'],
				cost: 25200,
				stats: {
					damage: 1,
					accuracy: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default gruberKurz