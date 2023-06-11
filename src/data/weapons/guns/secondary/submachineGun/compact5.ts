import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const compact5 = {
	name: 'Compact-5',
	image: 'new_mp5',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 13,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 283e3,
	stats: {
		magazine: 30,
		totalAmmo: 210,
		rateOfFire: 750,
		damage: 44,
		accuracy: 44,
		stability: 80,
		concealment: 24,
		threat: 6,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 2.4,
		equipDelays: [0.6, 0.6],
		ammoPickup: [6.3, 11.55],
		recoilHorizontal: [-1.0, 1.0],
		recoilVertical: [0.6, 0.8],
		spread: 3.36,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			{
				name: 'Sehr Kurze Barrel',
				image: 'wpn_fps_smg_mp5_fg_m5k',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: -12,
					concealment: 3
				}
			},
			{
				name: 'Polizei Tactical Barrel',
				image: 'wpn_fps_smg_mp5_fg_mp5a5',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					stability: 8,
					concealment: -3
				}
			},
			{
				name: 'The Ninja Barrel',
				image: 'wpn_fps_smg_mp5_fg_mp5sd',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					damage: -4,
					stability: 12,
					concealment: 1,
					threat: -24
				},
				incompatibleSlot: ['barrelExt']
			},
			{
				name: 'Enlightened Foregrip',
				image: 'wpn_fps_smg_mp5_fg_flash',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Flashlight'],
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Straight Magazine',
				image: 'wpn_fps_smg_mp5_m_straight',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 8,
					concealment: -1
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Adjustable Stock',
				image: 'wpn_fps_smg_mp5_s_adjust',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					concealment: 3
				}
			},
			{
				name: 'Bare Essentials Stock',
				image: 'wpn_fps_smg_mp5_s_ring',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					stability: -12,
					concealment: 4
				}
			},
			{
				name: 'Spartan Stock',
				image: 'wpn_fps_smg_mp5_s_folding',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default compact5