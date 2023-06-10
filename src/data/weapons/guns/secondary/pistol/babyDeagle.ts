import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const babyDeagle = {
	name: 'Baby Deagle',
	image: 'sparrow',
	source: content['The Point Break Heists'],
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
				name: 'Ported Barrel',
				image: 'wpn_fps_pis_sparrow_b_comp',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Point Break Heists'],
				cost: 9e3,
				stats: {
					accuracy: 4
				},
				incompatibleSlot: ['barrelExt']
			},
			{
				name: 'Threaded Barrel',
				image: 'wpn_fps_pis_sparrow_b_threaded',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Point Break Heists'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Spike Grip',
				image: 'wpn_fps_pis_sparrow_g_cowboy',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['The Point Break Heists'],
				cost: 9e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		],
		lowerReceiver: [
			{
				name: 'Spike Kit',
				image: 'wpn_fps_pis_sparrow_body_941',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['The Point Break Heists'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -8,
					concealment: 1
				}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default babyDeagle