import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const amaroq900 = {
	name: 'Amaroq 900',
	image: 'awp',
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 28,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 7,
		totalAmmo: 14,
		rateOfFire: 40,
		damage: 1050,
		accuracy: 88,
		stability: 12,
		concealment: 10,
		threat: 26,
		reload: 4.0
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.7, 0.6],
		ammoPickup: [0.45, 0.65],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.72,
		damageModifier: [1.0, 1.3]
	},
	modifications: {
		barrel: [
			{
				name: 'Qanuk Barrel',
				image: 'wpn_fps_snp_awp_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			},
			{
				name: 'Pirta Barrel',
				image: 'wpn_fps_snp_awp_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 1
				}
			}
		],
		barrelExt: [
			{
				name: 'Ijiraq Muzzle Brake',
				image: 'wpn_fps_snp_awp_ns_muzzle',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['McShay Weapon Pack 4'],
				cost: 36e3,
				stats: {
					damage: 18,
					accuracy: 4,
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Ice Cap Suppressor',
				image: 'wpn_fps_snp_awp_ns_suppressor',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['McShay Weapon Pack 4'],
				cost: 36e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -24,
					accuracy: -4,
					stability: 12,
					concealment: -2,
					threat: -22
				}
			}
		],
		bolt: [
			{
				name: 'Dire Speedbolt',
				image: 'wpn_fps_snp_awp_dh_speed',
				icon: 'inv_mod_bolt',
				slot: 'bolt',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					// TODO rate of fire
					concealment: -1
				}
			}
		],
		boost: sniperBoost,
		exclusiveSet: [
			{
				name: 'Dragon Lore',
				image: 'wpn_fps_snp_awp_conversion_dragonlore',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 4'],
				cost: 62e3,
				stats: {
					magazine: -2,
					totalAmmo: 1,
					// TODO rateOfFire: 1,
					damage: 210,
					accuracy: 8,
					stability: 8,
					concealment: -6
				}
			},
			{
				name: 'Badlands',
				image: 'wpn_fps_snp_awp_conversion_wildlands',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 4'],
				cost: 62e3,
				stats: {
					totalAmmo: 7,
					damage: -210,
					accuracy: -8,
					stability: 16,
					concealment: 2
				}
			}
		],
		extra: [
			{
				name: 'Snowbound Shell Rack',
				image: 'wpn_fps_snp_awp_ext_shellrack',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					totalAmmo: 6,
					accuracy: -4,
					stability: -4
				}
			}
		],
		gadget: sniperGadget,
		grip: [ // TODO grip require stock to be equipped
			{
				name: 'Lupa Grip',
				image: 'wpn_fps_snp_awp_g_grainy',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: 1
				}
			},
			{
				name: 'Fenrir Grip',
				image: 'wpn_fps_snp_awp_g_granulated',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4
				}
			},
			{
				name: 'Raiju Grip',
				image: 'wpn_fps_snp_awp_g_perforated',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Akhlut Magazine',
				image: 'wpn_fps_snp_awp_m_speed',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					magazine: -2,
					accuracy: -4,
					stability: -4,
					concealment: -1,
					reload: -0.7
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
			sight['Trace Optic x6.25'],
			{
				name: 'Keelut Ironsights x1.25',
				image: 'wpn_fps_snp_awp_o_irons',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['McShay Weapon Pack 4'],
				cost: 21e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			{
				name: 'Moonlight Stock',
				image: 'wpn_fps_snp_awp_stock_lightweight',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack 4'],
				cost: 62e3,
				stats: {
					accuracy: -4,
					stability: -8,
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default amaroq900