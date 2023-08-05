import content from 'data/source/downloadableContent'

import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const pistolCrossbow = {
	name: 'Pistol Crossbow',
	image: 'hunter',
	source: content['Gage Ninja Pack'],
	inventorySlot: 'secondary',
	reputation: 16,
	weaponType: 'Special',
	firingMode: 'Single shot',
	cost: 349e3,
	stats: {
		magazine: 1,
		totalAmmo: 25,
		rateOfFire: 50,
		damage: 350,
		accuracy: 96,
		stability: 96,
		concealment: 26,
		threat: 10,
		reload: 1.2
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.5, 0.55],
		ammoPickup: null,
		recoilHorizontal: [-0.6, 0.6],
		recoilVertical: [-0.12, 0.24],
		spread: 0.17,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			{
				name: 'Explosive Bolts',
				image: 'wpn_fps_upg_a_crossbow_explosion',
				icon: 'inv_mod_ammo_explosive',
				slot: 'ammunition',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Explosive', 'Removes Ammo Pickup'],
				stats: {
					damage: -50
				}
			},
			{
				name: 'Poisoned Bolts',
				image: 'wpn_fps_upg_a_crossbow_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -8,
					damage: -250
				}
			}
		],
		barrel: [
			{
				name: 'Carbon Limb',
				image: 'wpn_fps_shot_m37_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: 1
				}
			},
			{
				name: 'Skeletal Limb',
				image: 'wpn_fps_bow_hunter_b_skeletal',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: 1
				}
			}
		],
		boost: specialBoostTotalAmmo,
		grip: [
			{
				name: 'Camo Grip',
				image: 'wpn_fps_bow_hunter_g_camo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: 1
				}
			},
			{
				name: 'Walnut Grip',
				image: 'wpn_fps_bow_hunter_g_walnut',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Ninja Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					concealment: -1
				}
			}
		],
		sight: [
			sight['Pistol Red Dot Sight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5'],
			sight['Riktpunkt Holosight x1.5']
		]
	}
} as const satisfies WeaponData

export default pistolCrossbow