import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadgetSmall } from '../commonModifications/submachineGunModifications'

const microUzi = {
	name: 'Micro Uzi',
	image: 'baka',
	source: content['Yakuza Character Pack'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 32,
		totalAmmo: 224,
		rateOfFire: 1200,
		damage: 44,
		accuracy: 28,
		stability: 76,
		concealment: 29,
		threat: 10,
		reload: 2.6
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.5, 0.7],
		ammoPickup: [6.72, 12.32],
		recoilHorizontal: [-1.32, 1.32],
		recoilVertical: [-0.11, 0.66],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			{
				name: 'Custom Barrel',
				image: 'wpn_fps_smg_baka_b_comp',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Yakuza Character Pack'],
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
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			{
				name: 'Futomaki Suppressor',
				image: 'wpn_fps_smg_baka_b_longsupp',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Yakuza Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					stability: 20,
					concealment: -1,
					threat: -20
				}
			},
			{
				name: 'Maki Suppressor',
				image: 'wpn_fps_smg_baka_b_midsupp',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Yakuza Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					stability: 8,
					concealment: -2,
					threat: -20
				}
			},
			{
				name: 'Spring Suppressor',
				image: 'wpn_fps_smg_baka_b_smallsupp',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Yakuza Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -4,
					threat: -20
				}
			},
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadgetSmall,
		stock: [
			{
				name: 'No Stock',
				image: 'wpn_fps_smg_baka_s_standard',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Yakuza Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: -8,
					concealment: 1
				}
			},
			{
				name: 'Unfolded Stock',
				image: 'wpn_fps_smg_baka_s_unfolded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Yakuza Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 8,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default microUzi