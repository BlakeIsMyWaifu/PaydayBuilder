import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const lionsRoar = {
	name: 'Lion\'s Roar',
	image: 'vhs',
	source: content['Dragan Character Pack'],
	inventorySlot: 'primary',
	reputation: 28,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 628e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 857,
		damage: 78,
		accuracy: 60,
		stability: 64,
		concealment: 17,
		threat: 12,
		reload: 3.65
	},
	extraStats: {
		tacticalReload: 2.46,
		equipDelays: [0.6, 0.6],
		ammoPickup: [5.4, 9.9],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'CQB Barrel',
				image: 'wpn_fps_ass_vhs_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Dragan Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: 3
				}
			},
			{
				name: 'Precision Barrel',
				image: 'wpn_fps_ass_vhs_b_sniper',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Dragan Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: 8,
					concealment: -2
				}
			},
			{
				name: 'Silenced Barrel',
				image: 'wpn_fps_ass_vhs_b_silenced',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Dragan Character Pack'],
				cost: 14e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -1,
					stability: 12,
					threat: -18
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
} as const satisfies WeaponData

export default lionsRoar