import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const crosskill = {
	name: 'Crosskill',
	image: 'colt_1911',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 58e3,
	stats: {
		magazine: 10,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
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
			{
				name: 'Aggressor Compensator',
				image: 'wpn_fps_pis_1911_co_2',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 14e3,
				stats: {
					damage: 2,
					stability: 8,
					concealment: -1,
					threat: 1
				}
			},
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			{
				name: 'Punisher Compensator',
				image: 'wpn_fps_pis_1911_co_1',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 36e3,
				stats: {
					damage: 1,
					stability: 4,
					concealment: -1,
					threat: 10
				}
			},
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
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_pis_1911_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: 4
				}
			},
			{
				name: 'Bling Grip',
				image: 'wpn_fps_pis_1911_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					accuracy: 4,
					stability: -4
				}
			},
			{
				name: 'Engraved Crosskill Grips',
				image: 'wpn_fps_pis_1911_g_engraved',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 4
				}
			}
		],
		magazine: [
			{
				name: '12rnd Mag.',
				image: 'wpn_fps_pis_1911_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					magazine: 6,
					concealment: -1
				}
			},
			{
				name: 'Magazine with Ameritude!',
				image: 'wpn_fps_pis_1911_m_big',
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
		sight: [
			sight['Marksman Sight x1.25'],
			sight['Pistol Red Dot Sight x1.5'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		],
		slide: [
			{
				name: 'Vented Slide',
				image: 'wpn_fps_pis_1911_b_vented',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					damage: 1,
					accuracy: -4,
					stability: 8,
					threat: 2
				}
			},
			{
				name: 'Long Vented Slide',
				image: 'wpn_fps_pis_1911_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					damage: 1,
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default crosskill