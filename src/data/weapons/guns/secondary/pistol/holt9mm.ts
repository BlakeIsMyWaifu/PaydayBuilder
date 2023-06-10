import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const holt9mm = {
	name: 'HOLT 9mm',
	image: 'holt',
	source: content['Fugitive Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 30,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 676e3,
	stats: {
		magazine: 15,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 60,
		stability: 68,
		concealment: 28,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.65, 0.65],
		recoilVertical: [1.56, 2.34],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Ergonomic Grip',
				image: 'wpn_fps_pis_holt_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Fugitive Weapon Pack'],
				cost: 14e3,
				stats: {
					accuracy: 8
				}
			},
			{
				name: 'Bling Grip',
				image: 'wpn_fps_pis_holt_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Fugitive Weapon Pack'],
				cost: 21e3,
				stats: {
					stability: 8
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_holt_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Fugitive Weapon Pack'],
				cost: 14e3,
				stats: {
					magazine: 10,
					concealment: -1
				}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default holt9mm