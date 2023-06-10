import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialGadget } from '../commonModifications/specialModifications'

const ma17Flamethrower = {
	name: 'MA-17 Flamethrower',
	image: 'system',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 700,
		totalAmmo: 1400,
		rateOfFire: 2000,
		damage: 7,
		accuracy: 0,
		stability: 0,
		concealment: 15,
		threat: 37,
		reload: 8.5
	},
	extraStats: {
		tacticalReload: 8.5,
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.5, 10.5],
		recoilHorizontal: [0.0, 0.0],
		recoilVertical: [0.0, 0.0],
		spread: 6.0,
		damageModifier: null
	},
	modifications: {
		barrel: [
			{
				name: 'Merlin Nozzle',
				image: 'wpn_fps_fla_system_b_wtf',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					totalAmmo: -350,
					concealment: 5
				}
			}
		],
		boost: specialBoostTotalAmmo, // TODO check damage boost
		gadget: specialGadget,
		magazine: [
			{
				name: 'High Temperature Mixture',
				image: 'wpn_fps_fla_system_m_high',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					totalAmmo: -350,
					damage: 7
				}
			},
			{
				name: 'Low Temperature Mixture',
				image: 'wpn_fps_fla_system_m_low',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					totalAmmo: 350,
					damage: -4
				}
			}
		]
	}
} as const satisfies WeaponData

export default ma17Flamethrower