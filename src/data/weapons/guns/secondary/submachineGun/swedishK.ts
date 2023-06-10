import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const swedishK = {
	name: 'Swedish K',
	image: 'm45',
	source: content['Armored Transport'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Submachine Gun',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 40,
		totalAmmo: 80,
		rateOfFire: 600,
		damage: 99,
		accuracy: 68,
		stability: 44,
		concealment: 24,
		threat: 10,
		reload: 3.9
	},
	extraStats: {
		tacticalReload: 2.85,
		equipDelays: [0.6, 0.5],
		ammoPickup: [0.8, 2.8],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [-2.28, 2.28],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Grease Barrel',
				image: 'wpn_fps_smg_m45_b_small',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Armored Transport'],
				cost: 16800,
				stats: {
					accuracy: -8,
					concealment: 3
				}
			},
			{
				name: 'Swedish Barrel',
				image: 'wpn_fps_smg_m45_b_green',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Armored Transport'],
				cost: 25200,
				stats: {
					accuracy: 4,
					concealment: -1
				}
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		gadget: submachineGunGadget,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_smg_m45_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Armored Transport'],
				cost: 16800,
				stats: {
					accuracy: 4,
					stability: 4
				}
			},
			{
				name: 'Bling Grip',
				image: 'wpn_fps_smg_m45_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Armored Transport'],
				cost: 16800,
				stats: {
					stability: 8,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_m45_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Armored Transport'],
				cost: 33600,
				stats: {
					magazine: 12,
					concealment: -2
				}
			}
		],
		sight: submachineGunSight,
		stock: [
			{
				name: 'Folded Stock',
				image: 'wpn_fps_smg_m45_s_folded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Armored Transport'],
				cost: 16800,
				stats: {
					stability: -8,
					concealment: 3
				}
			}
		],
		upperReceiver: [
			{
				name: 'Swedish Body',
				image: 'wpn_fps_smg_m45_body_green',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: content['Armored Transport'],
				cost: 25200,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default swedishK