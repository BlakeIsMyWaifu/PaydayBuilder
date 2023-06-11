import source from 'data/source/miscSources'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const decaTechnologiesCompoundBow = {
	name: 'DECA Technologies Compound Bow',
	image: 'elastic',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 749e3,
	stats: {
		magazine: 1,
		totalAmmo: 30,
		rateOfFire: 300,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 27,
		threat: 37,
		reload: 1.3
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.85, 0.85],
		ammoPickup: null,
		recoilHorizontal: [-0.12, 0.12],
		recoilVertical: [1.08, 1.2],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			{
				name: 'Explosive Arrow',
				image: 'wpn_fps_bow_elastic_m_explosive',
				icon: 'inv_mod_ammo_explosive',
				slot: 'ammunition',
				source: source['Base Game'],
				cost: 9e3,
				specialEffect: ['Explosive', 'Removes Ammo Pickup'],
				stats: {
					damage: -600
				}
			},
			{
				name: 'Poison Arrow',
				image: 'wpn_fps_bow_elastic_m_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: source['Base Game'],
				cost: 9e3,
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -9,
					damage: -1700 // TODO adds damage now?
				}
			}
		],
		boost: specialBoost,
		grip: [
			{
				name: 'Wooden Grip',
				image: 'wpn_fps_bow_elastic_g_2', // - wpn_fps_bow_elastic_g_wood
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 8
				}
			},
			{
				name: 'Ergonomic Grip',
				image: 'wpn_fps_bow_elastic_g_3', // - wpn_fps_bow_elastic_g_ergo
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: 1
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
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		upperReceiver: [
			{
				name: 'Tactical Frame',
				image: 'wpn_fps_bow_elastic_body_tactic',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default decaTechnologiesCompoundBow