import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const lebensauger308 = {
	name: 'Lebensauger .308',
	image: 'wa2000',
	source: content['Gage Ninja Pack'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 749e3,
	stats: {
		magazine: 15,
		totalAmmo: 60,
		rateOfFire: 150,
		damage: 160,
		accuracy: 92,
		stability: 20,
		concealment: 16,
		threat: 12,
		reload: 4.13
	},
	extraStats: {
		tacticalReload: 3.09,
		equipDelays: [0.9, 0.9],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-0.5, 0.5],
		recoilVertical: [5.0, 6.25],
		spread: 0.48,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			{
				name: 'Langer Barrel',
				image: 'wpn_fps_snp_wa2000_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -3
				}
			},
			{
				name: 'Gedämpfter Barrel',
				image: 'wpn_fps_snp_wa2000_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Ninja Pack'],
				cost: 44e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -4,
					accuracy: -4,
					stability: 8,
					concealment: -2,
					threat: -18
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		grip: [
			{
				name: 'Leichter Grip',
				image: 'wpn_fps_snp_wa2000_g_light',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'Subtiler Grip',
				image: 'wpn_fps_snp_wa2000_g_stealth',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Walnuss Grip',
				image: 'wpn_fps_snp_wa2000_g_walnut',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Ninja Pack'],
				cost: 439e3,
				stats: {
					stability: 4,
					concealment: -2
				}
			}
		],
		secondarySight: sniperSecondarySight,
		sight: sniperSight
	}
} as const satisfies WeaponData

export default lebensauger308