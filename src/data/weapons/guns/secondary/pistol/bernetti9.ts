import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoostConcealment, pistolGadget } from '../commonModifications/pistolModifications'

const bernetti9 = {
	name: 'Bernetti 9',
	image: 'b92fs',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 134e3,
	stats: {
		magazine: 14,
		totalAmmo: 154,
		rateOfFire: 545,
		damage: 53,
		accuracy: 56,
		stability: 60,
		concealment: 30,
		threat: 6,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.85, 5.93],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.64,
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
				name: 'The Competitor Compensator',
				image: 'wpn_fps_pis_beretta_co_co2',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					damage: 2,
					concealment: -1,
					threat: 6
				}
			},
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			{
				name: 'The Professional Compensator',
				image: 'wpn_fps_pis_beretta_co_co1',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					damage: 1,
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			},
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoostConcealment,
		gadget: pistolGadget,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_pis_beretta_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: 4
				}
			},
			{
				name: 'Engraved Bernetti Grips',
				image: 'wpn_fps_pis_beretta_g_engraved',
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
		lowerReceiver: [
			{
				name: 'Custom Titanium Frame',
				image: 'wpn_fps_pis_beretta_body_modern',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					coins: 6
				},
				stats: {}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_beretta_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					magazine: 12,
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
		upperReceiver: [
			{
				name: 'The Elite Slide',
				image: 'wpn_fps_pis_beretta_sl_brigadier',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8
				}
			}
		]
	}
} as const satisfies WeaponData

export default bernetti9