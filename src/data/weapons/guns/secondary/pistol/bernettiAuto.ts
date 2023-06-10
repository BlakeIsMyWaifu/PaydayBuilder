import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const bernettiAuto = {
	name: 'Bernetti Auto',
	image: 'beer',
	source: content['Federales Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 15,
		totalAmmo: 195,
		rateOfFire: 1101,
		damage: 25,
		accuracy: 40,
		stability: 64,
		concealment: 28,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.95, 6.83],
		recoilHorizontal: [-0.28, 0.28],
		recoilVertical: [0.56, 0.7],
		spread: 3.6,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Weller Barrel',
				image: 'wpn_fps_pis_beer_b_robo',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Federales Weapon Pack'],
				cost: 62e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -5,
					threat: 14
				}
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Cartel Grip',
				image: 'wpn_fps_pis_beer_g_lux', // - wpn_fps_pis_beer_g_luxury
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
			},
			{
				name: 'Weller Grip',
				image: 'wpn_fps_pis_beer_g_robo',
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
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_beer_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Federales Weapon Pack'],
				cost: 21e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					magazine: 6,
					concealment: -1
				}
			}
		],
		sight: pistolSight,
		stock: [
			{
				name: 'Federales Stock',
				image: 'wpn_fps_pis_beer_s_std',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Federales Weapon Pack'],
				cost: 53e3,
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

export default bernettiAuto