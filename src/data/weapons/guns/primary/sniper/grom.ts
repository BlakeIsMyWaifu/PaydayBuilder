import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const grom = {
	name: 'Grom',
	image: 'siltstone',
	source: content['Gage Russian Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 46,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 920e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 150,
		damage: 160,
		accuracy: 72,
		stability: 4,
		concealment: 16,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-1.16, 1.16],
		recoilVertical: [4.35, 5.8],
		spread: 1.68,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			{
				name: 'Grievky Compensator',
				image: 'wpn_fps_snp_siltstone_ns_variation_b',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Russian Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					stability: 8
				}
			},
			{
				name: 'Tikho Barrel',
				image: 'wpn_fps_snp_siltstone_b_silenced',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Russian Weapon Pack'],
				cost: 44e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: -4,
					stability: 4,
					threat: -18
				}
			}
		],
		boost: sniperBoost,
		foregrip: [
			{
				name: 'Lightweight Foregrip',
				image: 'wpn_fps_snp_siltstone_fg_polymer',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Russian Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -8,
					concealment: 3
				}
			}
		],
		gadget: sniperGadget,
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
			{
				name: 'Iron Sight (Grom)', // TODO scope level
				image: 'wpn_fps_snp_siltstone_iron_sight',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['Gage Russian Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			sight['CASSIAN Iron Sights x1'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Trace Optic x6.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			{
				name: 'Lightweight Stock',
				image: 'wpn_fps_snp_siltstone_s_polymer',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Russian Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -8,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default grom