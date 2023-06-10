import content from 'data/source/downloadableContent'

import boost from '../../modifications/boost'
import { type WeaponData } from '../../weaponTypes'

const flamethrowerMk1 = {
	name: 'Flamethrower Mk.1',
	image: 'flamethrower_mk2',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: 44,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 900,
		totalAmmo: 1800,
		rateOfFire: 2000,
		damage: 7,
		accuracy: 0,
		stability: 0,
		concealment: 7,
		threat: 37,
		reload: 8.5
	},
	extraStats: {
		tacticalReload: 8.5,
		equipDelays: [0.85, 0.85],
		ammoPickup: [4.5, 13.5],
		recoilHorizontal: [0.0, 0.0],
		recoilVertical: [0.0, 0.0],
		spread: 6.0,
		damageModifier: null
	},
	modifications: {
		boost: [
			boost.Concealment,
			boost['Damage (Flamethrower)'],
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost'],
			boost['Total Ammo']
		],
		magazine: [
			{
				name: 'Rare',
				image: 'wpn_fps_fla_mk2_mag_rare',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					totalAmmo: 450,
					damage: -4
				}
			},
			{
				name: 'Well Done',
				image: 'wpn_fps_fla_mk2_mag_welldone',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					totalAmmo: -450,
					damage: 7
				}
			}
		]
	}
} as const satisfies WeaponData

export default flamethrowerMk1