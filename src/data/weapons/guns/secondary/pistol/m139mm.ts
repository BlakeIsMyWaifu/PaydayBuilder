import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolSight } from '../commonModifications/pistolModifications'

const m139mm = {
	name: 'M13 9mm',
	image: 'legacy',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 15,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 13,
		totalAmmo: 156,
		rateOfFire: 545,
		damage: 53,
		accuracy: 44,
		stability: 48,
		concealment: 30,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.9, 5.46],
		recoilHorizontal: [-0.9, 0.9],
		recoilVertical: [2.16, 3.24],
		spread: 3.36,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Threaded Barrel',
				image: 'wpn_fps_pis_legacy_b_threaded',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -4,
					concealment: -1
				}
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		grip: [
			{
				name: 'Wooden Grip',
				image: 'wpn_fps_pis_legacy_g_wood',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default m139mm