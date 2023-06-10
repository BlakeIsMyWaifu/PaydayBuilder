import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const breaker12G = {
	name: 'Breaker 12G',
	image: 'boot',
	source: content['Biker Character Pack'],
	inventorySlot: 'primary',
	reputation: 3,
	weaponType: 'Shotgun',
	firingMode: 'Lever Action',
	cost: 76e3,
	stats: {
		magazine: 7,
		totalAmmo: 21,
		rateOfFire: 80,
		damage: 155,
		accuracy: 48,
		stability: 28,
		concealment: 20,
		threat: 28,
		reload: 5.61
	},
	extraStats: {
		tacticalReload: [3.28, 0.33],
		equipDelays: [0.85, 0.55],
		ammoPickup: [0.21, 0.74],
		recoilHorizontal: [-0.46, 0.46],
		recoilVertical: [4.37, 4.6],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Long Barrel (Breaker)',
				image: 'wpn_fps_sho_boot_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Biker Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -3
				}
			},
			{
				name: 'Short Barrel (Breaker)',
				image: 'wpn_fps_sho_boot_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Biker Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 3
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		lowerReceiver: [
			{
				name: 'Treated Body',
				image: 'wpn_fps_sho_boot_body_exotic',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['Biker Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -1
				}
			}
		],
		stock: [
			{
				name: 'Long Stock',
				image: 'wpn_fps_sho_boot_s_long',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Biker Character Pack'],
				cost: 9e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default breaker12G