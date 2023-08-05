import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const mosconi12G = {
	name: 'Mosconi 12G',
	image: 'huntsman',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Shotgun',
	firingMode: 'Break action',
	cost: 896e3,
	stats: {
		magazine: 2,
		totalAmmo: 32,
		rateOfFire: 500,
		damage: 155,
		accuracy: 60,
		stability: 36,
		concealment: 7,
		threat: 37,
		reload: 2.5
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.32, 1.12],
		recoilHorizontal: [-1.05, 1.05],
		recoilVertical: [6.09, 6.3],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Road Warrior Barrel',
				image: 'wpn_fps_shot_huntsman_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					accuracy: -16,
					stability: -16,
					concealment: 10
				}
			}
		],
		boost: shotgunBoost,
		stock: [
			{
				name: 'Gangsta Special Stock',
				image: 'wpn_fps_shot_huntsman_s_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					accuracy: -16,
					stability: -16,
					concealment: 10
				}
			}
		]
	}
} as const satisfies WeaponData

export default mosconi12G