import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const contractor = {
	name: 'Contractor',
	image: 'packrat',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 581e3,
	stats: {
		magazine: 15,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 60,
		concealment: 29,
		threat: 9,
		reload: 2.32
	},
	extraStats: {
		tacticalReload: 1.52,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			{
				name: 'Contractor Compensator',
				image: 'wpn_fps_pis_packrat_ns_wick',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -1
				}
			},
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_pis_packrat_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					magazine: 10,
					concealment: -1
				}
			}
		],
		sight: [
			sight['Pistol Red Dot Sight x1.5'],
			{
				name: 'Tritium Sights',
				image: 'wpn_fps_pis_packrat_o_expert',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: 4
				}
			},
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		]
	}
} as const satisfies WeaponData

export default contractor