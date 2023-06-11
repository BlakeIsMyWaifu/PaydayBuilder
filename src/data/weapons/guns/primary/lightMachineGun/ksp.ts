import content from 'data/source/downloadableContent'

import bipod from '../../modifications/bipod'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const ksp = {
	name: 'KSP',
	image: 'm249',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 45,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 200,
		totalAmmo: 400,
		rateOfFire: 909,
		damage: 80,
		accuracy: 48,
		stability: 28,
		concealment: 1,
		threat: 31,
		reload: 5.62
	},
	extraStats: {
		tacticalReload: 5.62,
		equipDelays: [0.9, 0.9],
		ammoPickup: [10.0, 12.0],
		recoilHorizontal: [-2.3, 3.22],
		recoilVertical: [-0.46, 1.84],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_lmg_m249_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Weapon Pack #02'],
				cost: 50400,
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
				name: 'Railed Foregrip',
				image: 'wpn_fps_lmg_m249_fg_mk46',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Weapon Pack #02'],
				cost: 79200,
				stats: {
					damage: 2,
					stability: -8,
					concealment: -1
				}
			}
		],
		gadget: lightMachineGunGadget,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			{
				name: 'Solid Stock',
				image: 'wpn_fps_lmg_m249_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Weapon Pack #02'],
				cost: 37800,
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		]
	}
} as const satisfies WeaponData

export default ksp