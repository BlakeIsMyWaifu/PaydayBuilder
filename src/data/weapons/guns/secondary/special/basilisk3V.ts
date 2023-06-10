import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialAmmunition, specialBoost, specialGadget, specialSight } from '../commonModifications/specialModifications'

const basilisk3V = {
	name: 'Basilisk 3V',
	image: 'ms3gl',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Break Action',
	cost: 736e3,
	stats: {
		magazine: 3,
		totalAmmo: 9,
		rateOfFire: 182,
		damage: 320,
		accuracy: 36,
		stability: 76,
		concealment: 21,
		threat: 37,
		reload: 7.33
	},
	extraStats: {
		tacticalReload: [5.33, 1.0],
		equipDelays: [1.0, 0.6],
		ammoPickup: [0.55, 0.65],
		recoilHorizontal: [-0.55, 0.55],
		recoilVertical: [3.19, 3.3],
		spread: 3.84,
		damageModifier: null
	},
	modifications: {
		ammunition: specialAmmunition,
		barrel: [
			{
				name: 'Fang Barrel',
				image: 'wpn_fps_gre_ms3gl_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 28,
					stability: 20,
					concealment: -2
				}
			}
		],
		boost: specialBoost,
		exclusiveSet: [
			{
				name: 'Venomous',
				image: 'wpn_fps_gre_ms3gl_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					magazine: -1,
					totalAmmo: -1,
					damage: 160,
					accuracy: 56,
					concealment: -1
				}
			}
		],
		gadget: specialGadget,
		receiver: [
			{
				name: 'Serpent',
				image: 'wpn_fps_gre_ms3gl_body_modern',
				icon: 'inv_mod_receiver',
				slot: 'receiver',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		],
		sight: specialSight,
		stock: [
			{
				name: 'Copperhead Recoil Pad',
				image: 'wpn_fps_gre_ms3gl_s_modern',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default basilisk3V