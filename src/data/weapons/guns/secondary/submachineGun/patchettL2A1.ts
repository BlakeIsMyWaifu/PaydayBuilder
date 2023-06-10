import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const patchettL2A1 = {
	name: 'Patchett L2A1',
	image: 'sterling',
	source: content['Gage Historical Pack'],
	inventorySlot: 'secondary',
	reputation: 51,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 24,
		totalAmmo: 96,
		rateOfFire: 545,
		damage: 99,
		accuracy: 52,
		stability: 76,
		concealment: 20,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.65, 0.55],
		ammoPickup: [2.88, 5.28],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [0.66, 0.88],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_smg_sterling_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					damage: 1,
					accuracy: 4,
					stability: -4,
					concealment: -2
				}
			},
			{
				name: 'Short Barrel',
				image: 'wpn_fps_smg_sterling_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					damage: 2,
					accuracy: -4,
					stability: 4,
					concealment: 1
				}
			},
			{
				name: 'Heatsinked Suppressed Barrel',
				image: 'wpn_fps_smg_sterling_b_e11',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 28e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: -1,
					threat: -18
				},
				incompatibleSlot: ['barrelExt']
			},
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_smg_sterling_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 28e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: -2,
					threat: -18
				}
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_sterling_m_long',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					magazine: 10,
					concealment: -2
				}
			},
			{
				name: 'Short Mag',
				image: 'wpn_fps_smg_sterling_m_short',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					magazine: -10,
					concealment: 2
				}
			}
		],
		sight: submachineGunSight,
		stock: [
			{
				name: 'Folded Stock',
				image: 'wpn_fps_smg_sterling_s_folded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					stability: -8,
					concealment: 2
				}
			},
			{
				name: 'No Stock',
				image: 'wpn_fps_smg_sterling_s_nostock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					accuracy: -4,
					stability: -8,
					concealment: 4
				}
			},
			{
				name: 'Solid Stock',
				image: 'wpn_fps_smg_sterling_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default patchettL2A1