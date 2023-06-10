import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const deagle = {
	name: 'Deagle',
	image: 'deagle',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 36,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 822e3,
	stats: {
		magazine: 10,
		totalAmmo: 60,
		rateOfFire: 400,
		damage: 120,
		accuracy: 76,
		stability: 28,
		concealment: 28,
		threat: 24,
		reload: 3.1
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [2.76, 4.14],
		spread: 1.44,
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
			{
				name: 'La Femme Compensator',
				image: 'wpn_fps_pis_deagle_co_short',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 44e3,
				stats: {
					damage: 1,
					stability: 4,
					concealment: -1,
					threat: 13
				}
			},
			{
				name: 'OVERKILL Compensator',
				image: 'wpn_fps_pis_deagle_co_long',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: source.Community,
				cost: 62e3,
				stats: {
					damage: 2,
					stability: 8,
					concealment: -2
				}
			},
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		extra: [
			{
				name: 'Deagle Scope Mount',
				image: 'wpn_fps_pis_deagle_extra',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['Gage Mod Courier'],
				cost: 0,
				acquisition: {
					package: 'Blue Eagle'
				},
				stats: {}
			}
		],
		gadget: pistolGadget,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_pis_deagle_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 44e3,
				stats: {
					accuracy: 4,
					stability: -4,
					concealment: -1
				}
			},
			{
				name: 'Bling Grip',
				image: 'wpn_fps_pis_deagle_g_bling',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					stability: 8,
					concealment: 1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_deagle_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					magazine: 6,
					concealment: -2
				}
			}
		],
		secondarySight: [
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['Signature Magnifier Gadget x6.25']
		],
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Marksman Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Pistol Red Dot Sight x1.5'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		slide: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_pis_deagle_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					damage: 2,
					accuracy: 8,
					concealment: -3
				},
				incompatibleSlot: [] // some barrel extensions
			},
			{
				name: 'Custom Milled Barrel',
				image: 'wpn_fps_pis_deagle_b_modern',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 53e3,
				acquisition: {
					coins: 6
				},
				stats: {},
				incompatibleSlot: [] // suppressors
			}
		]
	}
} as const satisfies WeaponData

export default deagle