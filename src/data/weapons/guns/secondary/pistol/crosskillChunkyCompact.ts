import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const crosskillChunkyCompact = {
	name: 'Crosskill Chunky Compact',
	image: 'm1911',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 134e3,
	stats: {
		magazine: 12,
		totalAmmo: 60,
		rateOfFire: 480,
		damage: 110,
		accuracy: 64,
		stability: 32,
		concealment: 28,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-0.88, 0.88],
		recoilVertical: [3.52, 3.96],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Crosskill Long Mag',
				image: 'wpn_fps_pis_m1911_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					magazine: 2,
					concealment: -1
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Chunky Hunter Barrel',
				image: 'wpn_fps_pis_m1911_sl_hardballer', // - wpn_fps_pis_m1911_b_xxx
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					concealment: -2
				}
			},
			{
				name: 'Crosskill Platinum Bull Slide',
				image: 'wpn_fps_pis_m1911_sl_match', // - wpn_fps_pis_m1911_b_xxx__
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default crosskillChunkyCompact