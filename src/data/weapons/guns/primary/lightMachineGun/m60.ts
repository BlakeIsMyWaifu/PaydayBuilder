import content from 'data/source/downloadableContent'

import bipod from '../../modifications/bipod'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const m60 = {
	name: 'M60',
	image: 'm60',
	source: content['Fugitive Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 749e3,
	stats: {
		magazine: 200,
		totalAmmo: 300,
		rateOfFire: 550,
		damage: 120,
		accuracy: 48,
		stability: 20,
		concealment: 1,
		threat: 34,
		reload: 6.25
	},
	extraStats: {
		tacticalReload: 6.25,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.5, 3.5],
		recoilVertical: [-0.5, 2.0],
		spread: 3.12,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_lmg_m60_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Fugitive Weapon Pack'],
				cost: 21e3,
				stats: {
					accuracy: -4,
					stability: 4
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
				name: 'Modernized Foregrip',
				image: 'wpn_fps_lmg_m60_fg_keymod',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Fugitive Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -8
				}
			},
			{
				name: 'Tactical Foregrip',
				image: 'wpn_fps_lmg_m60_fg_tactical',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Fugitive Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -8
				}
			},
			{
				name: 'Tropical Foregrip',
				image: 'wpn_fps_lmg_m60_fg_tropical',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Fugitive Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: 8,
					threat: 9
				}
			}
		],
		gadget: lightMachineGunGadget
	}
} as const satisfies WeaponData

export default m60