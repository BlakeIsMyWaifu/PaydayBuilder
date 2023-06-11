import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost } from '../commonModifications/sniperModifications'

const aranG2 = {
	name: 'Aran G2',
	image: 'contender',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'secondary',
	reputation: 28,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 1,
		totalAmmo: 10,
		rateOfFire: 35,
		damage: 480,
		accuracy: 64,
		stability: 4,
		concealment: 20,
		threat: 10,
		reload: 2.78
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.55, 0.65],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [8.41, 8.7],
		spread: 2.16,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_snp_contender_barrel_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					damage: 12,
					accuracy: 4,
					concealment: -3
				}
			},
			{
				name: 'Short Barrel',
				image: 'wpn_fps_snp_contender_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					stability: -8,
					concealment: 2
				}
			}
		],
		barrelExt: [
			{
				name: 'Phantom Suppressor',
				image: 'wpn_fps_snp_contender_suppressor',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		boost: sniperBoost,
		exclusiveSet: [
			{
				name: 'Perfect Blue',
				image: 'wpn_fps_snp_contender_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					totalAmmo: -1,
					damage: 40,
					accuracy: 8,
					concealment: -8
				}
			}
		],
		foregrip: [
			{
				name: 'Kanden Foregrip',
				image: 'wpn_fps_snp_contender_frontgrip_long',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -1
				}
			}
		],
		grip: [
			{
				name: 'Bounty Grip',
				image: 'wpn_fps_upg_m4_g_contender',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			}
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
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			{
				name: 'Sylux Iron Sight',
				image: 'wpn_fps_upg_contender_o_ironsight',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			sight['Trace Optic x6.25'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			{
				name: 'Bounty Stock',
				image: 'wpn_fps_upg_m4_s_contender',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			},
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
} as const satisfies WeaponData

export default aranG2