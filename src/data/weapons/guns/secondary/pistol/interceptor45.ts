import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const interceptor45 = {
	name: 'Interceptor .45',
	image: 'usp',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 13,
		totalAmmo: 91,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 8,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.27, 3.19],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			{
				name: 'Ventilated .45',
				image: 'wpn_fps_pis_usp_co_comp_1',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 28e3,
				stats: {
					damage: 2,
					accuracy: -4,
					concealment: -1,
					threat: 5
				}
			},
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			{
				name: 'Velocity .45',
				image: 'wpn_fps_pis_usp_co_comp_2',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 36e3,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -1
				}
			},
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_usp_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source.Community,
				cost: 14e3,
				stats: {
					magazine: 8,
					concealment: -1
				}
			},
			{
				name: 'I want more Magazine!',
				image: 'wpn_fps_pis_usp_m_big',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Spec Ops Pack'],
				cost: 14e3,
				acquisition: {
					infinite: true
				},
				stats: {
					magazine: 12,
					stability: 8,
					concealment: -2
				}
			}
		],
		sight: pistolSight,
		slide: [
			{
				name: 'Expert Slide',
				image: 'wpn_fps_pis_usp_b_expert',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source.Community,
				cost: 14e3,
				stats: {
					accuracy: 12,
					concealment: -1
				}
			},
			{
				name: 'Match Slide',
				image: 'wpn_fps_pis_usp_b_match',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source.Community,
				cost: 14e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default interceptor45