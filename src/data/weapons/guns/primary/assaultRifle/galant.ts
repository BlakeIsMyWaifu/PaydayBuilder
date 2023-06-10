import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const galant = {
	name: 'Galant',
	image: 'ching',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 25,
	weaponType: 'Assault Rifle',
	firingMode: 'Semi-Automatic',
	cost: 557e3,
	stats: {
		magazine: 8,
		totalAmmo: 72,
		rateOfFire: 600,
		damage: 160,
		accuracy: 84,
		stability: 36,
		concealment: 20,
		threat: 31,
		reload: 1.52
	},
	extraStats: {
		tacticalReload: 2.56,
		equipDelays: [0.55, 0.6],
		ammoPickup: [1.3, 2.88],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 0.96,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Tanker Barrel',
				image: 'wpn_fps_ass_ching_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: -16,
					concealment: 4
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		foregrip: [
			{
				name: 'Custom Foregrip',
				image: 'wpn_fps_ass_ching_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		],
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Magpouch Stock',
				image: 'wpn_fps_ass_ching_s_pouch',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['WW2 Weapon Pack'],
				cost: 9e3,
				stats: {
					totalAmmo: 11
				}
			}
		]
	}
} as const satisfies WeaponData

export default galant