import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const signature40 = {
	name: 'Signature .40',
	image: 'p226',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 12,
		totalAmmo: 84,
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
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.1, 2.94],
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
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			{
				name: 'Ventilated .40',
				image: 'wpn_fps_pis_p226_co_comp_1',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				stats: {
					damage: 2,
					accuracy: -4,
					concealment: -1,
					threat: 5
				}
			},
			{
				name: 'Velocity .40',
				image: 'wpn_fps_pis_p226_co_comp_2',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['Gage Weapon Pack #01'],
				cost: 50400,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -1
				}
			},
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_pis_p226_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Weapon Pack #01'],
				cost: 12600,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_p226_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Weapon Pack #01'],
				cost: 14e3,
				stats: {
					magazine: 8
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Two Tone Slide',
				image: 'wpn_fps_pis_p226_b_equinox',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				stats: {
					damage: 2,
					stability: 4,
					threat: 2
				}
			},
			{
				name: 'Long Slide',
				image: 'wpn_fps_pis_p226_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: content['Gage Weapon Pack #01'],
				cost: 61e3,
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

export default signature40