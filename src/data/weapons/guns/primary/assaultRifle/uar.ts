import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const uar = {
	name: 'UAR',
	image: 'aug',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 8,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 176e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 750,
		damage: 65,
		accuracy: 64,
		stability: 40,
		concealment: 20,
		threat: 14,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-2.0, 2.0],
		recoilVertical: [1.2, 1.6],
		spread: 2.16,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_aug_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: -4,
					stability: 8,
					concealment: 2
				}
			},
			{
				name: 'Long Barrel (UAR)',
				image: 'wpn_fps_aug_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					damage: 1,
					accuracy: 4,
					stability: 4,
					concealment: -3
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		extra: [
			{
				name: 'A3 Tactical Foregrip',
				image: 'wpn_fps_aug_fg_a3',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					damage: 1,
					stability: 8,
					concealment: -2
				}
			}
		],
		gadget: assaultRifleGadget,
		lowerReceiver: [
			{
				name: 'Raptor Polymer Body',
				image: 'wpn_fps_aug_body_f90',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 2,
					accuracy: 4,
					stability: 8,
					concealment: -2
				}
			}
		],
		magazine: [
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
} as const satisfies WeaponData

export default uar