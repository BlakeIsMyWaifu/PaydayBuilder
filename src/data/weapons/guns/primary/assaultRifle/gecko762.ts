import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const gecko762 = {
	name: 'Gecko 7.62',
	image: 'galil',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 34,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 773e3,
	stats: {
		magazine: 35,
		totalAmmo: 175,
		rateOfFire: 845,
		damage: 67,
		accuracy: 48,
		stability: 68,
		concealment: 15,
		threat: 24,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.14,
		equipDelays: [0.6, 0.6],
		ammoPickup: [5.25, 9.63],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 3.12,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Fabulous Foregrip',
				image: 'wpn_fps_ass_galil_fg_fab',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Rabbit Hunting'
				},
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			},
			{
				name: 'CQB Foregrip',
				image: 'wpn_fps_ass_galil_fg_mar',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Army of One'
				},
				stats: {
					damage: 2,
					accuracy: -4,
					stability: -4,
					concealment: 4
				}
			},
			{
				name: 'Light Foregrip',
				image: 'wpn_fps_ass_galil_fg_sar',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Unusual Suspects'
				},
				stats: {
					damage: 1,
					concealment: 1
				}
			},
			{
				name: 'Sniper Foregrip',
				image: 'wpn_fps_ass_galil_fg_sniper',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 12,
					stability: -4,
					concealment: -2
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'Sniper Grip',
				image: 'wpn_fps_ass_galil_g_sniper',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 4,
					stability: -4,
					concealment: -1
				}
			}
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Fabulous Stock',
				image: 'wpn_fps_ass_galil_s_fab',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Rabbit Hunting'
				},
				stats: {
					accuracy: 4,
					stability: -4,
					concealment: 3
				}
			},
			{
				name: 'Light Stock',
				image: 'wpn_fps_ass_galil_s_light',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'So Many Choices'
				},
				stats: {
					stability: 4,
					concealment: 2
				}
			},
			{
				name: 'Plastic Stock',
				image: 'wpn_fps_ass_galil_s_plastic',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Army of One'
				},
				stats: {
					accuracy: 8,
					stability: -8,
					concealment: 1
				}
			},
			{
				name: 'Skeletal Stock',
				image: 'wpn_fps_ass_galil_s_skeletal',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Rabbit Hunting'
				},
				stats: {
					accuracy: -4,
					stability: 12,
					concealment: 1
				}
			},
			{
				name: 'Sniper Stock',
				image: 'wpn_fps_ass_galil_s_sniper',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 12,
					stability: -12,
					concealment: -2
				}
			},
			{
				name: 'Wooden Stock',
				image: 'wpn_fps_ass_galil_s_wood',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Artillery Barrage'
				},
				stats: {
					stability: 16,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default gecko762