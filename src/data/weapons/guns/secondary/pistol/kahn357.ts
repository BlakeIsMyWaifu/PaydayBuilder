import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const kahn357 = {
	name: 'Kahn .357',
	image: 'korth',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Pistol',
	firingMode: 'Single action',
	cost: 418e3,
	stats: {
		magazine: 8,
		totalAmmo: 56,
		rateOfFire: 480,
		damage: 120,
		accuracy: 80,
		stability: 40,
		concealment: 27,
		threat: 24,
		reload: 2.75
	},
	extraStats: {
		tacticalReload: 2.75,
		equipDelays: [0.45, 0.5],
		ammoPickup: [3.0, 2.0],
		recoilHorizontal: [-1.0, 1.0],
		recoilVertical: [2.4, 3.6],
		spread: 1.2,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Railed Barrel',
				image: 'wpn_fps_pis_korth_b_railed',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					damage: 4,
					accuracy: 4,
					stability: 8,
					concealment: -2
				}
			}
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Flash Hider'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		exclusiveSet: [
			{
				name: 'Electric Dream',
				image: 'wpn_fps_pis_korth_conversionkit',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					damage: 2,
					accuracy: 8,
					stability: 8,
					concealment: -3
				}
			}
		],
		gadget: pistolGadget,
		grip: [
			{
				name: 'Ergogrip',
				image: 'wpn_fps_pis_korth_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 2'],
				cost: 14e3,
				stats: {
					accuracy: -4,
					stability: 8
				}
			},
			{
				name: 'Overmold Grip',
				image: 'wpn_fps_pis_korth_g_hogue',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 2'],
				cost: 21e3,
				stats: {
					stability: 4
				}
			}
		],
		magazine: [
			{
				name: 'Hex Cylinder',
				image: 'wpn_fps_pis_korth_m_6',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 2'],
				cost: 9e3,
				stats: {
					magazine: -2,
					damage: 40,
					accuracy: -16,
					stability: -12,
					concealment: -2
				}
			}
		],
		sight: [
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['CASSIAN Sharp Sight x3.25']
		]
	}
} as const satisfies WeaponData

export default kahn357