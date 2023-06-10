import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost } from '../commonModifications/shotgunModifications'

const jocelineOU12G = {
	name: 'Joceline O/U 12G',
	image: 'b682',
	source: source.Community,
	inventorySlot: 'primary',
	reputation: 43,
	weaponType: 'Shotgun',
	firingMode: 'Break Action',
	cost: 920e3,
	stats: {
		magazine: 2,
		totalAmmo: 28,
		rateOfFire: 500,
		damage: 155,
		accuracy: 60,
		stability: 28,
		concealment: 5,
		threat: 37,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.55, 0.55],
		ammoPickup: [0.28, 0.98],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [6.67, 6.9],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Sawed Off Barrel',
				image: 'wpn_fps_shot_b682_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source.Community,
				cost: 9e3,
				stats: {
					accuracy: -16,
					stability: -12,
					concealment: 10
				}
			}
		],
		boost: shotgunBoost,
		stock: [
			{
				name: 'Luxurious Ammo Pouch',
				image: 'wpn_fps_shot_b682_s_ammopouch',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					totalAmmo: 8
				}
			},
			{
				name: 'Wrist Wrecker Stock',
				image: 'wpn_fps_shot_b682_s_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					accuracy: -16,
					stability: -12,
					concealment: 6
				}
			}
		]
	}
} as const satisfies WeaponData

export default jocelineOU12G