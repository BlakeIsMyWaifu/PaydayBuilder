import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const broomstick = {
	name: 'Broomstick',
	image: 'c96',
	source: content['Gage Historical Pack'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 510e3,
	stats: {
		magazine: 10,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 80,
		stability: 60,
		concealment: 28,
		threat: 10,
		reload: 4.17
	},
	extraStats: {
		tacticalReload: 4.0,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 1.2,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			{
				name: 'Damper.L 44 Nozzle',
				image: 'wpn_fps_pis_c96_nozzle',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					damage: 2,
					accuracy: -4,
					stability: 8,
					concealment: -1
				}
			},
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'High Capacity Mag',
				image: 'wpn_fps_pis_c96_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'So Uncivilized'
				},
				stats: {
					magazine: 10,
					concealment: -2
				}
			}
		],
		sight: [
			sight['Pistol Red Dot Sight x1.5'],
			{
				name: 'Barrel Sight 44',
				image: 'wpn_fps_pis_c96_sight',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Special Operations Execution'
				},
				stats: {
					concealment: -2
				}
			},
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		],
		slide: [
			{
				name: 'Precision Barrel',
				image: 'wpn_fps_pis_c96_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					totalAmmo: -45,
					damage: 110,
					accuracy: -8,
					stability: -8,
					concealment: -3
				}
			}
		],
		stock: [
			{
				name: 'Holster Stock',
				image: 'wpn_fps_pis_c96_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'So Uncivilized'
				},
				stats: {
					stability: 16,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default broomstick