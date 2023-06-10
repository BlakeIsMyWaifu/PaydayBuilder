import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const chimanoCustom = {
	name: 'Chimano Custom',
	image: 'g22c',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 22,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 487e3,
	stats: {
		magazine: 16,
		totalAmmo: 96,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 9,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.4, 3.36],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Ventilated Compensator'],
			barrelExt['Velocity Compensator'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip'],
			grip['Platypus Grip'],
			grip['Ergo Grip (STRYK / Chimano Custom)']
		],
		magazine: [
			magazine['Extended Magazine (Chimano)']
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Long Slide',
				image: 'wpn_fps_pis_g22c_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source.Community,
				cost: 36e3,
				stats: {
					damage: 1,
					accuracy: -4,
					stability: 4,
					threat: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default chimanoCustom