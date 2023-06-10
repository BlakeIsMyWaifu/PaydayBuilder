import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const m308 = {
	name: 'M308',
	image: 'new_m14',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 581e3,
	stats: {
		magazine: 10,
		totalAmmo: 70,
		rateOfFire: 706,
		damage: 160,
		accuracy: 84,
		stability: 36,
		concealment: 8,
		threat: 31,
		reload: 3.15
	},
	extraStats: {
		tacticalReload: 2.65,
		equipDelays: [0.55, 0.6],
		ammoPickup: [1.26, 2.8],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 0.96,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		extra: [
			{
				name: 'Scope Mount',
				image: 'wpn_fps_upg_o_m14_scopemount',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					concealment: -1
				}
			}
		],
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Abraham Body',
				image: 'wpn_fps_ass_m14_body_ebr',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 44e3,
				stats: {
					stability: 8,
					concealment: 2
				}
			},
			{
				name: 'Jaeger Body',
				image: 'wpn_fps_ass_m14_body_jae',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -2
				}
			},
			{
				name: 'B-Team Stock',
				image: 'wpn_fps_ass_m14_body_ruger',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 0,
				stats: {
					accuracy: -4,
					stability: -12,
					concealment: 19
				}
			}
		]
	}
} as const satisfies WeaponData

export default m308