import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoostConcealment, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const chimanoCompact = {
	name: 'Chimano Compact',
	image: 'g26',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 27,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 605e3,
	stats: {
		magazine: 10,
		totalAmmo: 150,
		rateOfFire: 545,
		damage: 53,
		accuracy: 52,
		stability: 60,
		concealment: 30,
		threat: 4,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.75, 5.25],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: pistolBarrelExt,
		boost: pistolBoostConcealment,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip'],
			grip['Platypus Grip']
		],
		lowerReceiver: [
			{
				name: 'Striking Body Kit',
				image: 'wpn_fps_pis_g26_body_custom',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: source.Community,
				cost: 53e3,
				stats: {
					damage: 1,
					stability: 4,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Striking Mag',
				image: 'wpn_fps_pis_g26_m_contour',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source.Community,
				cost: 53e3,
				stats: {
					stability: 8,
					concealment: -1
				}
			},
			magazine['Extended Magazine (Chimano)']
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Striking Slide',
				image: 'wpn_fps_pis_g26_b_custom',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source.Community,
				cost: 28e3,
				stats: {
					damage: 1,
					accuracy: 4,
					stability: -8,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default chimanoCompact