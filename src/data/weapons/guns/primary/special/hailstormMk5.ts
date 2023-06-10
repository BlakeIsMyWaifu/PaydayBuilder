import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const hailstormMk5 = {
	name: 'Hailstorm Mk 5',
	image: 'hailstorm',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 48,
	weaponType: 'Special',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 120,
		totalAmmo: 540,
		rateOfFire: 2000,
		damage: 40,
		accuracy: 72,
		stability: 52,
		concealment: 8,
		threat: 12,
		reload: 4.3
	},
	extraStats: {
		tacticalReload: 3.6,
		equipDelays: [0.55, 0.55],
		ammoPickup: [2.7, 8.1],
		recoilHorizontal: [-1.19, 1.19],
		recoilVertical: [0.68, 0.85],
		spread: 1.68,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			{
				name: 'v1.4 Barrel',
				image: 'wpn_fps_hailstorm_b_extended',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					damage: 1,
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'v3.8 Barrel',
				image: 'wpn_fps_hailstorm_b_ext_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: 8,
					stability: 4,
					concealment: -3,
					threat: -18
				}
			},
			{
				name: 'v2.2 Barrel',
				image: 'wpn_fps_hailstorm_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -1,
					accuracy: 4,
					stability: 4,
					concealment: -2,
					threat: -18
				}
			}
		],
		boost: specialBoost,
		exclusiveSet: [
			{
				name: 'Prototype',
				image: 'wpn_fps_hailstorm_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					totalAmmo: 54,
					stability: 4,
					concealment: -2
				}
			}
		],
		grip: [
			{
				name: 'Whiteout Grip',
				image: 'wpn_fps_hailstorm_g_bubble',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -4
				}
			},
			{
				name: 'Crystalline Grip',
				image: 'wpn_fps_hailstorm_g_crystal',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: 4
				}
			},
			{
				name: 'FZRA Grip',
				image: 'wpn_fps_hailstorm_g_noise',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default hailstormMk5