import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const claire12G = {
	name: 'Claire 12G',
	image: 'coach',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 43,
	weaponType: 'Shotgun',
	firingMode: 'Single action',
	cost: 920e3,
	stats: {
		magazine: 2,
		totalAmmo: 44,
		rateOfFire: 500,
		damage: 155,
		accuracy: 56,
		stability: 44,
		concealment: 10,
		threat: 28,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.4, 0.6],
		ammoPickup: [0.22, 0.66],
		recoilHorizontal: [-0.76, 0.57],
		recoilVertical: [3.23, 3.42],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Sawed-Off Barrel',
				image: 'wpn_fps_sho_coach_b_short', // - wpn_fps_shot_coach_b_short
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source.Community,
				cost: 9e3,
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
				name: 'Deadman\'s Stock',
				image: 'wpn_fps_sho_coach_s_short', // - wpn_fps_shot_coach_s_short
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					accuracy: -16,
					stability: -16,
					concealment: 10
				}
			}
		]
	}
} as const satisfies WeaponData

export default claire12G