import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const bernettiRangehitter = {
	name: 'Bernetti Rangehitter',
	image: 'sbl',
	source: content['Gunslinger Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Sniper',
	firingMode: 'Lever action',
	cost: 581e3,
	stats: {
		magazine: 10,
		totalAmmo: 50,
		rateOfFire: 120,
		damage: 196,
		accuracy: 68,
		stability: 20,
		concealment: 19,
		threat: 28,
		reload: 7.73
	},
	extraStats: {
		tacticalReload: [2.27, 0.57],
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.5, 3.75],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [5.0, 7.5],
		spread: 1.92,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			{
				name: 'Deep Range Barrel',
				image: 'wpn_fps_snp_sbl_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 12,
					stability: 4,
					concealment: -3
				}
			},
			{
				name: 'Wind Whistler Barrel',
				image: 'wpn_fps_snp_sbl_b_short',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gunslinger Weapon Pack'],
				cost: 44e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -6,
					accuracy: -4,
					stability: 12,
					concealment: -1,
					threat: -22
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
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
			{
				name: 'Iron Sight x1',
				image: 'wpn_fps_snp_sbl_o_standard',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: source['Christmas 2020 Update'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
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
				name: 'Club Stock',
				image: 'wpn_fps_snp_sbl_s_saddle', // - wpn_fps_snp_sbl_s_xxx
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gunslinger Weapon Pack'],
				cost: 9e3,
				stats: {
					totalAmmo: 3
				}
			}
		]
	}
} as const satisfies WeaponData

export default bernettiRangehitter