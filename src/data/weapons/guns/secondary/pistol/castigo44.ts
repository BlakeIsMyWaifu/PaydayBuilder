import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const castigo44 = {
	name: 'Castigo .44',
	image: 'chinchilla',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 581e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 180,
		accuracy: 76,
		stability: 4,
		concealment: 28,
		threat: 24,
		reload: 2.97
	},
	extraStats: {
		tacticalReload: 2.97,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [3.48, 5.22],
		spread: 1.44,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Diablo Barrel',
				image: 'wpn_fps_pis_chinchilla_b_satan',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 8
				}
			}
		],
		boost: pistolBoost,
		grip: [
			{
				name: 'Carnival Grip',
				image: 'wpn_fps_pis_chinchilla_g_black',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			},
			{
				name: 'Cruz Grip',
				image: 'wpn_fps_pis_chinchilla_g_death',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			}
		]
	}
} as const satisfies WeaponData

export default castigo44