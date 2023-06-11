import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const czech92 = {
	name: 'Czech 92',
	image: 'czech',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 15,
		totalAmmo: 150,
		rateOfFire: 1000,
		damage: 38,
		accuracy: 60,
		stability: 60,
		concealment: 26,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 5.25],
		recoilHorizontal: [-0.75, 0.45],
		recoilVertical: [0.75, 0.6],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Sicario Barrel',
				image: 'wpn_fps_pis_czech_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Federales Weapon Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
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
				name: 'Cartel Grip',
				image: 'wpn_fps_pis_czech_g_luxury',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Federales Weapon Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: 1
				}
			},
			{
				name: 'Sicario Grip',
				image: 'wpn_fps_pis_czech_g_sport',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Federales Weapon Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_czech_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Federales Weapon Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					magazine: 10,
					concealment: -1
				}
			}
		],
		sight: pistolSight,
		stock: [
			{
				name: 'Tirador Stock',
				image: 'wpn_fps_pis_stech_s_standard',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Federales Weapon Pack'],
				cost: 28e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default czech92