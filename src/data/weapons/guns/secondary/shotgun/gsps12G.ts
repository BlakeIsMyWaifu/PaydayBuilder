import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const gsps12G = {
	name: 'GSPS 12G',
	image: 'm37',
	source: content['The Goat Simulator Heist'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 510e3,
	stats: {
		magazine: 7,
		totalAmmo: 28,
		rateOfFire: 104,
		damage: 155,
		accuracy: 44,
		stability: 52,
		concealment: 22,
		threat: 28,
		reload: 6.75
	},
	extraStats: {
		tacticalReload: [2.45, 0.65],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.7, 0.98],
		recoilHorizontal: [-0.34, 0.34],
		recoilVertical: [3.23, 3.4],
		spread: 3.36,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Riot Barrel',
				image: 'wpn_fps_shot_m37_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Goat Simulator Heist'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		stock: [
			{
				name: 'Stakeout Stock',
				image: 'wpn_fps_shot_m37_s_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Goat Simulator Heist'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default gsps12G