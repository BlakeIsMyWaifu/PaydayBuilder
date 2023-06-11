import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const nagant = {
	name: 'Nagant',
	image: 'mosin',
	source: content['Gage Historical Pack'],
	inventorySlot: 'primary',
	reputation: 54,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 25,
		rateOfFire: 60,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 6,
		threat: 28,
		reload: 3.85
	},
	extraStats: {
		tacticalReload: 3.85,
		equipDelays: [0.5, 0.6],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_snp_mosin_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					accuracy: -4,
					concealment: 3
				}
			},
			{
				name: 'Long Barrel',
				image: 'wpn_fps_snp_mosin_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Death From Below'
				},
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Silenced Barrel',
				image: 'wpn_fps_snp_mosin_b_sniper',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 44e3,
				acquisition: {
					achievement: 'Death From Below'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -16,
					accuracy: -4,
					stability: 4,
					concealment: -2,
					threat: -22
				}
			}
		],
		bayonet: [
			{
				name: 'Nagant Bayonet',
				image: 'wpn_fps_snp_mosin_ns_bayonet',
				icon: 'inv_mod_bayonet',
				slot: 'bayonet',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Modifies Weapon Butt'],
				stats: {
					concealment: -2
				}
			}
		],
		boost: sniperBoost,
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
			{
				name: 'Iron Sight x1.25',
				image: 'wpn_fps_snp_mosin_iron_sight',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['Gage Historical Pack'],
				cost: 0,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
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
				name: 'Discrete Stock',
				image: 'wpn_fps_snp_mosin_body_standard_black',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					stability: -4,
					concealment: 3
				}
			}
		]
	}
} as const satisfies WeaponData

export default nagant