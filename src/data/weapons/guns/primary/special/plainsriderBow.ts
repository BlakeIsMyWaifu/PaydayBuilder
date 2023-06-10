import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import boost from '../../modifications/boost'
import { type WeaponData } from '../../weaponTypes'

const plainsriderBow = {
	name: 'Plainsrider Bow',
	image: 'plainsrider',
	source: content['The Butcher\'s Western Pack'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 327e3,
	stats: {
		magazine: 1,
		totalAmmo: 50,
		rateOfFire: 300,
		damage: 1000,
		accuracy: 96,
		stability: 96,
		concealment: 30,
		threat: 37,
		reload: 0.33
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.55, 0.55],
		ammoPickup: null,
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			{
				name: 'Explosive Arrows',
				image: 'wpn_fps_upg_a_bow_explosion',
				icon: 'inv_mod_ammo_explosive',
				slot: 'ammunition',
				source: content['The Butcher\'s Western Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Explosive', 'Removes Ammo Pickup'],
				stats: {
					damage: -300
				}
			},
			{
				name: 'Poisoned Arrows',
				image: 'wpn_fps_upg_a_bow_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -15,
					damage: -900
				}
			}
		],
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost'],
			boost['Total Ammo'],
			{
				name: 'Total Ammo',
				image: 'wpn_fps_upg_bonus_total_ammo_p3',
				icon: 'inv_mod_bonus_stats',
				slot: 'boost',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					totalAmmo: 8
				}
			}
		]
	}
} as const satisfies WeaponData

export default plainsriderBow