import content from 'data/source/downloadableContent'

import bipod from '../../modifications/bipod'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const brenner21 = {
	name: 'Brenner-21',
	image: 'hk21',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 75,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 723,
		damage: 120,
		accuracy: 36,
		stability: 8,
		concealment: 1,
		threat: 37,
		reload: 6.7
	},
	extraStats: {
		tacticalReload: 4.65,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-1.68, 1.68],
		recoilVertical: [1.12, 2.24],
		spread: 3.84,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_lmg_hk21_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Weapon Pack #02'],
				cost: 28e3,
				stats: {
					damage: -1,
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		foregrip: [
			{
				name: 'Short Foregrip',
				image: 'wpn_fps_lmg_hk21_fg_short',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Weapon Pack #02'],
				cost: 79200,
				stats: {
					damage: 1,
					accuracy: -4,
					concealment: 3
				},
				incompatibleSlot: ['bipod']
			}
		],
		gadget: lightMachineGunGadget,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_lmg_hk21_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Weapon Pack #02'],
				cost: 37800,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default brenner21