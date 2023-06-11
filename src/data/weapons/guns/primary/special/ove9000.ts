import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const ove9000 = {
	name: 'OVE9000',
	image: 'saw',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 400,
		damage: 23,
		accuracy: 8,
		stability: 24,
		concealment: 16,
		threat: 24,
		reload: 3.75
	},
	extraStats: {
		tacticalReload: 3.75,
		equipDelays: [0.8, 0.8],
		ammoPickup: null,
		recoilHorizontal: [-2.4, 2.4],
		recoilVertical: [2.4, -2.4],
		spread: null,
		damageModifier: null
	},
	modifications: {
		boost: specialBoost,
		lowerReceiver: [
			{
				name: 'Silent Motor',
				image: 'wpn_fps_saw_body_silent',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					threat: -16
				}
			},
			{
				name: 'Fast Motor',
				image: 'wpn_fps_saw_body_speed',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 3
				}
			}
		],
		magazine: [
			{
				name: 'Durable Blade',
				image: 'wpn_fps_saw_m_blade_durable',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					totalAmmo: 150,
					magazine: 50
				}
			},
			{
				name: 'Sharp Blade',
				image: 'wpn_fps_saw_m_blade_sharp',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 3
				}
			}
		]
	}
} as const satisfies WeaponData

export default ove9000