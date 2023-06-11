import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const cavity9mm = {
	name: 'Cavity 9mm',
	image: 'sub2000',
	source: content['The Golden Grin Casino Heist'],
	inventorySlot: 'primary',
	reputation: 15,
	weaponType: 'Assault Rifle',
	firingMode: 'Semi-Automatic',
	cost: 327e3,
	stats: {
		magazine: 33,
		totalAmmo: 66,
		rateOfFire: 706,
		damage: 160,
		accuracy: 72,
		stability: 32,
		concealment: 27,
		threat: 31,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [1.19, 2.64],
		recoilHorizontal: [-2.2, 2.2],
		recoilVertical: [1.32, 1.76],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		foregrip: [
			{
				name: 'Appalachian Foregrip',
				image: 'wpn_fps_ass_sub2000_fg_gen2',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Golden Grin Casino Heist'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 16,
					concealment: 3
				}
			},
			{
				name: 'Delabarre Foregrip',
				image: 'wpn_fps_ass_sub2000_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Golden Grin Casino Heist'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Tooth Fairy Suppressor',
				image: 'wpn_fps_ass_sub2000_fg_suppressed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Golden Grin Casino Heist'],
				cost: 36e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -1,
					accuracy: 4,
					stability: -8,
					concealment: -2,
					threat: -23
				}
			}
		],
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
} as const satisfies WeaponData

export default cavity9mm