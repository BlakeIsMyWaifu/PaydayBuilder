import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const crosskillGuard = {
	name: 'Crosskill Guard',
	image: 'shrew',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 27,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 605e3,
	stats: {
		magazine: 17,
		totalAmmo: 153,
		rateOfFire: 545,
		damage: 53,
		accuracy: 64,
		stability: 60,
		concealment: 30,
		threat: 8,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.83, 5.36],
		recoilHorizontal: [0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Blinged Grip',
				image: 'wpn_fps_pis_shrew_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			},
			{
				name: 'Ergonomic Grip',
				image: 'wpn_fps_pis_shrew_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			}
		],
		magazine: [
			{
				name: 'Extended Mag',
				image: 'wpn_fps_pis_shrew_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					magazine: 4,
					concealment: -2
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Milled Slide',
				image: 'wpn_fps_pis_shrew_sl_milled',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default crosskillGuard