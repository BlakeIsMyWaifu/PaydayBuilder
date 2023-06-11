import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const northStar = {
	name: 'North Star',
	image: 'victor',
	source: content['A Criminal Carol'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 773e3,
	stats: {
		magazine: 10,
		totalAmmo: 20,
		rateOfFire: 150,
		damage: 160,
		accuracy: 52,
		stability: 8,
		concealment: 16,
		threat: 26,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.9, 0.9],
		ammoPickup: [1.0, 1.5],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [7.0, 5.6],
		spread: 2.88,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrelExt: [
			{
				name: 'Tiwaz Silencer',
				image: 'wpn_fps_snp_victor_ns_omega',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['A Criminal Carol'],
				cost: 9e3,
				stats: {
					damage: -2,
					accuracy: 8,
					stability: -4,
					concealment: -2,
					threat: -22
				}
			}
		],
		boost: sniperBoost,
		exclusiveSet: [
			{
				name: 'Celestial Assault',
				image: 'wpn_fps_snp_victor_sbr_kit',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['A Criminal Carol'],
				cost: 9e3,
				acquisition: {
					sideJob: 'Diamonds In The Sky'
				},
				stats: {
					damage: -2,
					accuracy: 8,
					stability: 8,
					concealment: 3
				}
			}
		],
		gadget: sniperGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Titanium Skeleton Grip'],
			grip['Ursa Minor Grip']
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
				name: 'Cynosura Iron Sights',
				image: 'wpn_fps_snp_victor_o_standard',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['A Criminal Carol'],
				cost: 9e3,
				acquisition: {
					sideJob: 'Constellation Prize'
				},
				stats: {
					concealment: 2
				}
			},
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
} as const satisfies WeaponData

export default northStar