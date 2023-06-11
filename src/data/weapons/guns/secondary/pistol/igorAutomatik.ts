import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const igorAutomatik = {
	name: 'Igor Automatik',
	image: 'stech',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 20,
		totalAmmo: 80,
		rateOfFire: 750,
		damage: 65,
		accuracy: 56,
		stability: 28,
		concealment: 25,
		threat: 8,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.35, 0.5],
		ammoPickup: [0.8, 2.8],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [0.69, 0.92],
		spread: 2.64,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Tirador Barrel',
				image: 'wpn_fps_pis_stech_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Federales Weapon Pack'],
				cost: 36e3,
				stats: {
					accuracy: 4,
					concealment: -2,
					threat: 2
				}
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Federales Grip',
				image: 'wpn_fps_pis_stech_g_tactical',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Federales Weapon Pack'],
				cost: 21e3,
				stats: {
					stability: 4,
					concealment: 1
				}
			},
			{
				name: 'Cartel Grip',
				image: 'wpn_fps_pis_stech_g_luxury',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Federales Weapon Pack'],
				cost: 28e3,
				stats: {
					accuracy: 4,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_stech_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Federales Weapon Pack'],
				cost: 36e3,
				stats: {
					magazine: 14,
					concealment: -2
				}
			}
		],
		sight: pistolSight,
		stock: [
			{
				name: 'Federales Stock',
				image: 'wpn_fps_pis_stech_s_standard',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Federales Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: 12,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default igorAutomatik