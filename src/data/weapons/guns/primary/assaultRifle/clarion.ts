import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const clarion = {
	name: 'Clarion',
	image: 'famas',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 27,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 605e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 1000,
		damage: 51,
		accuracy: 36,
		stability: 68,
		concealment: 24,
		threat: 14,
		reload: 3.78
	},
	extraStats: {
		tacticalReload: 2.72,
		equipDelays: [0.6, 0.55],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 3.84,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_ass_famas_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Unusual Suspects'
				},
				stats: {
					damage: 1,
					stability: 4,
					concealment: -1
				}
			},
			{
				name: 'Short Barrel',
				image: 'wpn_fps_ass_famas_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'So Many Choices'
				},
				stats: {
					damage: 3,
					accuracy: -4,
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Sniper Barrel',
				image: 'wpn_fps_ass_famas_b_sniper',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					damage: 1,
					accuracy: 4,
					stability: -4,
					concealment: -2
				}
			},
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_ass_famas_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 28e3,
				acquisition: {
					achievement: 'Tour de Clarion'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: 8,
					concealment: -1,
					threat: -16.8
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'G2 Grip',
				image: 'wpn_fps_ass_famas_g_retro',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Tour de Clarion'
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -1
				}
			}
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
} as const satisfies WeaponData

export default clarion