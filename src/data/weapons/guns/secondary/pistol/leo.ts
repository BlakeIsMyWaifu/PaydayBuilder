import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const leo = {
	name: 'LEO',
	image: 'hs2000',
	source: content['The Bomb Heists'],
	inventorySlot: 'secondary',
	reputation: 28,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 628e3,
	stats: {
		magazine: 19,
		totalAmmo: 95,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 9,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.5, 0.5],
		ammoPickup: [2.38, 3.33],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Extended Mag',
				image: 'wpn_fps_pis_hs2000_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Bomb Heists'],
				cost: 9e3,
				acquisition: {
					achievement: 'Breaking Dead' // also from drops
				},
				stats: {
					magazine: 8
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Custom Slide',
				image: 'wpn_fps_pis_hs2000_sl_custom',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['The Bomb Heists'],
				cost: 28e3,
				acquisition: {
					achievement: 'Done in 60 Seconds' // also from drops
				},
				stats: {
					damage: 2,
					stability: 4,
					threat: 2
				}
			},
			{
				name: 'Long Slide',
				image: 'wpn_fps_pis_hs2000_sl_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['The Bomb Heists'],
				cost: 44e3,
				acquisition: {
					achievement: 'I\'ve Got the Power' // also from drops
				},
				stats: {
					damage: 1,
					accuracy: 8,
					stability: 4,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default leo