import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost } from '../commonModifications/sniperModifications'

const repeater1874 = {
	name: 'Repeater 1874',
	image: 'winchester1874',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'primary',
	reputation: 36,
	weaponType: 'Sniper',
	firingMode: 'Lever action',
	cost: 822e3,
	stats: {
		magazine: 15,
		totalAmmo: 45,
		rateOfFire: 86,
		damage: 246,
		accuracy: 92,
		stability: 20,
		concealment: 12,
		threat: 28,
		reload: 10.57
	},
	extraStats: {
		tacticalReload: [2.27, 0.57],
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.25, 3.38],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [7.5, 12.0],
		spread: 0.48,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Range Barrel',
				image: 'wpn_fps_snp_winchester_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					concealment: -2
				}
			},
			{
				name: 'Outlaw\'s Silenced Barrel',
				image: 'wpn_fps_snp_winchester_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['The Butcher\'s Western Pack'],
				cost: 44e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -6,
					accuracy: -4,
					stability: 12,
					concealment: -2,
					threat: -22
				}
			}
		],
		boost: sniperBoost,
		sight: [
			{
				name: 'A5 Scope', // TODO scope level
				image: 'wpn_fps_snp_winchester_sniper_scope',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['The Butcher\'s Western Pack'],
				cost: 0,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 4,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default repeater1874