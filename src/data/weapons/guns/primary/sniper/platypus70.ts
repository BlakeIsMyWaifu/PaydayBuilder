import source from 'data/source/miscSources'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

const platypus70 = {
	name: 'Platypus 70',
	image: 'model70',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 32,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 725e3,
	stats: {
		magazine: 5,
		totalAmmo: 30,
		rateOfFire: 60,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 6,
		threat: 28,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.35,
		equipDelays: [0.75, 0.45],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrelExt: [
			{
				name: 'Beak Suppressor',
				image: 'wpn_fps_snp_model70_ns_suppressor',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: source['Base Game'],
				cost: 9e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -12,
					stability: 4,
					concealment: -2,
					threat: -22
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		secondarySight: sniperSecondarySight,
		sight: [
			{
				name: 'Iron Sight x1.25',
				image: 'wpn_fps_snp_model70_iron_sight',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: source['Base Game'],
				cost: 0,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: -4,
					concealment: 2
				}
			},
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
		]
	}
} as const satisfies WeaponData

export default platypus70