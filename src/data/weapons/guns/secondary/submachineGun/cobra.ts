import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadgetSmall, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cobra = {
	name: 'Cobra',
	image: 'scorpion',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 18,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 395e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 1000,
		damage: 44,
		accuracy: 28,
		stability: 68,
		concealment: 28,
		threat: 6,
		reload: 2.75
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.7],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
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
			{
				name: 'Suppressor',
				image: 'wpn_fps_smg_scorpion_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Hotline Miami'],
				cost: 36e3,
				acquisition: {
					achievement: 'Sounds of Animals Fighting'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: -2,
					threat: -24
				}
			},
			barrelExt['Ported Compensator'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadgetSmall,
		grip: [
			{
				name: 'Ergo Grip',
				image: 'wpn_fps_smg_scorpion_g_ergo',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Phew!'
				},
				stats: {
					stability: 12,
					concealment: 1
				}
			},
			{
				name: 'Wooden Grip',
				image: 'wpn_fps_smg_scorpion_g_wood',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Do You Like Hurting Other People?'
				},
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -1
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_scorpion_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Phew!'
				},
				stats: {
					magazine: 20,
					stability: 8,
					concealment: -3
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'No Stock',
				image: 'wpn_fps_smg_scorpion_s_nostock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Sounds of Animals Fighting'
				},
				stats: {
					stability: -4,
					concealment: 1
				}
			},
			{
				name: 'Unfolded Stock',
				image: 'wpn_fps_smg_scorpion_s_unfolded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Phew!'
				},
				stats: {
					stability: 12,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default cobra