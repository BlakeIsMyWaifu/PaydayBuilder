import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const kangArmsModel54 = {
	name: 'Káng Arms Model 54',
	image: 'type54',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'secondary',
	reputation: 24,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 534e3,
	stats: {
		magazine: 10,
		totalAmmo: 60,
		rateOfFire: 480,
		damage: 85,
		accuracy: 64,
		stability: 36,
		concealment: 28,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.05, 1.05],
		recoilVertical: [2.52, 3.78],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'KA54 Barrel Extender',
				image: 'wpn_fps_pis_type54_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 21e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -1
				}
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'KA54 Extended Magazine',
				image: 'wpn_fps_pis_type54_m_ext',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 9e3,
				stats: {
					magazine: 4,
					concealment: -1
				}
			}
		],
		sight: pistolSight,
		underbarrel: [
			{
				name: 'KA54 Bull Stopper Addon',
				image: 'wpn_fps_pis_type54_underbarrel_custom',
				icon: 'inv_mod_ammo_custom',
				slot: 'underbarrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -4
				}
			},
			{
				name: 'Flechette',
				image: 'wpn_fps_upg_a_piercing',
				icon: 'inv_mod_ammo_piercing',
				slot: 'underbarrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -4
				}
			},
			{
				name: 'AP Slug',
				image: 'wpn_fps_upg_a_slug',
				icon: 'inv_mod_ammo_slug',
				slot: 'underbarrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -4
				}
			}
		]
	}
} as const satisfies WeaponData

export default kangArmsModel54