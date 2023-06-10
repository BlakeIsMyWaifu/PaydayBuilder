import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const rus12AngryTiger = {
	name: 'RUS-12 Angry Tiger',
	image: 'rsh12',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 581e3,
	stats: {
		magazine: 5,
		totalAmmo: 20,
		rateOfFire: 400,
		damage: 210,
		accuracy: 52,
		stability: 20,
		concealment: 25,
		threat: 28,
		reload: 2.25
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.45, 0.5],
		ammoPickup: [0.75, 0.25],
		recoilHorizontal: [-1.25, 1.25],
		recoilVertical: [7.25, 7.5],
		spread: 2.88,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'RUS-J Long Valley Barrel and Stabilizer',
				image: 'wpn_fps_pis_rsh12_b_comp',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 32e3,
				stats: {
					damage: 4,
					accuracy: 12,
					stability: 4,
					concealment: -3
				}
			},
			{
				name: 'RUS-K Tactical Short Barrel',
				image: 'wpn_fps_pis_rsh12_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 21e3,
				stats: {
					accuracy: -8,
					stability: -8,
					concealment: 2
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
		gadget: pistolGadget,
		grip: [
			{
				name: 'RUS Custom Wood Grip',
				image: 'wpn_fps_pis_rsh12_g_wood',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 21e3,
				stats: {
					stability: 24
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
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		]
	}
} as const satisfies WeaponData

export default rus12AngryTiger