import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const akGen21Tactical = {
	name: 'AK Gen 21 Tactical',
	image: 'vityaz',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 134e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 750,
		damage: 72,
		accuracy: 64,
		stability: 68,
		concealment: 23,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-0.65, 0.65],
		recoilVertical: [0.65, 0.91],
		spread: 2.16,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			{
				name: 'MG8 Precision Barrel',
				image: 'wpn_fps_smg_vityaz_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'BY90 Wide Suppressor',
				image: 'wpn_fps_smg_vityaz_b_supressed', // - wpn_fps_smg_vityaz_b_xxx
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -4,
					concealment: -1,
					threat: -16.8
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
			barrelExt['PBS Suppressor'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Fyodor Muzzle Brake'],
			barrelExt['Federation Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		sight: submachineGunSight,
		stock: [
			{
				name: 'Bull Stock',
				image: 'wpn_fps_smg_vityaz_s_short', // - wpn_fps_smg_vityaz_b_xxx
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					stability: -8,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default akGen21Tactical