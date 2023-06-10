import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolSight } from '../commonModifications/pistolModifications'

const parabellum = {
	name: 'Parabellum',
	image: 'breech',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 25,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 557e3,
	stats: {
		magazine: 8,
		totalAmmo: 56,
		rateOfFire: 400,
		damage: 180,
		accuracy: 76,
		stability: 24,
		concealment: 29,
		threat: 9,
		reload: 2.1
	},
	extraStats: {
		tacticalReload: 1.33,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.4, 1.96],
		recoilHorizontal: [-1.2, 1.2],
		recoilVertical: [2.88, 4.32],
		spread: 1.44,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Reinforced Barrel',
				image: 'wpn_fps_pis_breech_b_reinforced',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8
				}
			},
			{
				name: 'Short Barrel',
				image: 'wpn_fps_pis_breech_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		],
		boost: pistolBoost,
		grip: [
			{
				name: 'Engraved Grip',
				image: 'wpn_fps_pis_breech_g_custom',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default parabellum