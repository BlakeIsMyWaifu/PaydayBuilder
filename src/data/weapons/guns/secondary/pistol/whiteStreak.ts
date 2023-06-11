import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const whiteStreak = {
	name: 'White Streak',
	image: 'pl14',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 14,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 305e3,
	stats: {
		magazine: 12,
		totalAmmo: 60,
		rateOfFire: 400,
		damage: 120,
		accuracy: 68,
		stability: 32,
		concealment: 29,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [2.64, 3.96],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Prototype Barrel',
				image: 'wpn_fps_pis_pl14_b_comp',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					concealment: -1
				},
				incompatibleSlot: [] // Suppressors
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_pl14_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					magazine: 2,
					concealment: -1
				}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default whiteStreak