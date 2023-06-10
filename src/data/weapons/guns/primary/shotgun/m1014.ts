import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const m1014 = {
	name: 'M1014',
	image: 'benelli',
	source: content['Gage Shotgun Pack'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 8,
		totalAmmo: 64,
		rateOfFire: 429,
		damage: 55,
		accuracy: 28,
		stability: 44,
		concealment: 12,
		threat: 26,
		reload: 6.13
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.2, 4.8],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_sho_ben_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Shotgun Pack'],
				cost: 36e3,
				acquisition: {
					achievement: 'Seven Eleven'
				},
				stats: {
					magazine: -2,
					damage: 2,
					accuracy: -8,
					stability: -8,
					concealment: 6
				}
			},
			{
				name: 'Long Barrel',
				image: 'wpn_fps_sho_ben_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Shotgun Pack'],
				cost: 62e3,
				acquisition: {
					achievement: 'Shotguns 101'
				},
				stats: {
					magazine: 2,
					accuracy: 8,
					stability: 4,
					concealment: -2
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight,
		stock: [
			{
				name: 'Collapsed Stock',
				image: 'wpn_fps_sho_ben_s_collapsed',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Shotgun Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Knock, Knock'
				},
				stats: {
					stability: -12,
					concealment: 6
				}
			},
			{
				name: 'Tactical Stock',
				image: 'wpn_fps_sho_ben_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Shotgun Pack'],
				cost: 36e3,
				acquisition: {
					achievement: 'Shock and Awe'
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

export default m1014