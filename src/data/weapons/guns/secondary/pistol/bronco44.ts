import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoostConcealment } from '../commonModifications/pistolModifications'

const bronco44 = {
	name: 'Bronco .44',
	image: 'new_raging_bull',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 134e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 175,
		accuracy: 76,
		stability: 4,
		concealment: 26,
		threat: 24,
		reload: 2.25
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [3.48, 5.22],
		spread: 1.44,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrelExt: [
			barrelExt['Flash Hider'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoostConcealment,
		extra: [
			{
				name: 'Bronco Scope Mount',
				image: 'wpn_fps_pis_rage_extra',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['Gage Mod Courier'],
				cost: 0,
				acquisition: {
					package: 'Purple Snake'
				},
				stats: {}
			}
		],
		grip: [
			{
				name: 'Ergo Wooden Grip',
				image: 'wpn_fps_pis_rage_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: 4
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
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		slide: [
			{
				name: 'Aggressor Barrel',
				image: 'wpn_fps_pis_rage_b_comp1',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					damage: 2,
					accuracy: 8,
					stability: 8,
					concealment: -3
				}
			},
			{
				name: 'Pocket Surprise Barrel',
				image: 'wpn_fps_pis_rage_b_short',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					accuracy: -8,
					stability: -12,
					concealment: 3
				}
			},
			{
				name: 'Ventilated Barrel',
				image: 'wpn_fps_pis_rage_b_comp2',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					damage: 1,
					accuracy: -4,
					stability: 4,
					concealment: -3,
					threat: 10
				}
			},
			{
				name: 'Overcompensating Barrel',
				image: 'wpn_fps_pis_rage_b_long',
				icon: 'inv_mod_slide',
				slot: 'slide',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: 12,
					stability: 12,
					concealment: -3
				}
			}
		],
		upperReceiver: [
			{
				name: 'Slimline Body',
				image: 'wpn_fps_pis_rage_body_smooth',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 44e3,
				stats: {
					stability: 4,
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default bronco44