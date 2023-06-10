import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const matever357 = {
	name: 'Matever .357',
	image: 'mateba',
	source: content['The Alesso Heist'],
	inventorySlot: 'secondary',
	reputation: 34,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 773e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 180,
		accuracy: 84,
		stability: 12,
		concealment: 20,
		threat: 24,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 3.6,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.35, 1.35],
		recoilVertical: [3.24, 4.86],
		spread: 0.96,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Pesante Barrel',
				image: 'wpn_fps_pis_2006m_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Alesso Heist'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -2
				}
			},
			{
				name: 'Medio Barrel',
				image: 'wpn_fps_pis_2006m_b_medium',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Alesso Heist'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					concealment: 2
				}
			},
			{
				name: 'Pisccolo Barrel',
				image: 'wpn_fps_pis_2006m_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Alesso Heist'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 4
				}
			}
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Noir Grip',
				image: 'wpn_fps_pis_2006m_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['The Alesso Heist'],
				cost: 9e3,
				stats: {
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default matever357