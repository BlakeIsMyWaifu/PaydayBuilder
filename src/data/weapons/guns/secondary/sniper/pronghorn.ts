import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const pronghorn = {
	name: 'Pronghorn',
	image: 'scout',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 334400,
	stats: {
		magazine: 5,
		totalAmmo: 20,
		rateOfFire: 60,
		damage: 246,
		accuracy: 72,
		stability: 12,
		concealment: 18,
		threat: 28,
		reload: 5.3
	},
	extraStats: {
		tacticalReload: 3.4,
		equipDelays: [0.45, 0.4],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 1.68,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			{
				name: 'Longshot Suppressor',
				image: 'wpn_fps_snp_scout_ns_suppressor',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					damage: -2,
					accuracy: 12,
					stability: 4,
					concealment: -2,
					threat: -22
				}
			}
		],
		bolt: [
			{
				name: 'Quickdraw Speedbolt',
				image: 'wpn_fps_snp_scout_bolt_speed',
				icon: 'inv_mod_bolt',
				slot: 'bolt',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					concealment: -1 // TODO reload
				}
			}
		],
		boost: sniperBoost,
		exclusiveSet: [
			{
				name: 'Open Range Sniper',
				image: 'wpn_fps_snp_scout_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 12,
					stability: 16,
					concealment: -2,
					reload: -1.5
				}
			}
		],
		gadget: sniperGadget,
		magazine: [
			{
				name: 'Standoff Extended Magazine',
				image: 'wpn_fps_snp_scout_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					totalAmmo: 2,
					concealment: -1
				}
			}
		],
		secondarySight: sniperSecondarySight,
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
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			{
				name: 'Iron Sights',
				image: 'wpn_fps_snp_scout_o_iron_up',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			sight['Trace Optic x6.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			{
				name: 'Stakeout Stock',
				image: 'wpn_fps_snp_scout_s_pads_none',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Marksman Stock',
				image: 'wpn_fps_snp_scout_s_pads_one',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default pronghorn