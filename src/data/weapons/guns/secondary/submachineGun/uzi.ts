import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const uzi = {
	name: 'Uzi',
	image: 'uzi',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 55,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 40,
		totalAmmo: 200,
		rateOfFire: 698,
		damage: 44,
		accuracy: 52,
		stability: 68,
		concealment: 24,
		threat: 12,
		reload: 3.52
	},
	extraStats: {
		tacticalReload: 2.45,
		equipDelays: [0.6, 0.55],
		ammoPickup: [3.6, 6.6],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 2.88,
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
				name: 'Silent Death',
				image: 'wpn_fps_smg_uzi_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Hotline Miami'],
				cost: 36e3,
				specialEffect: ['Silences Weapon'],
				acquisition: {
					achievement: 'Sounds of Animals Fighting'
				},
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: -2,
					threat: -18
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
		foregrip: [
			{
				name: 'Tactical Foregrip',
				image: 'wpn_fps_smg_uzi_fg_rail',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Walk Faster'
				},
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		gadget: submachineGunGadget,
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Ergonomic Stock',
				image: 'wpn_fps_smg_uzi_s_leather',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Walk Faster'
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'Solid Stock',
				image: 'wpn_fps_smg_uzi_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Do You Like Hurting Other People?'
				},
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -2
				}
			},
			{
				name: 'Folded Stock',
				image: 'wpn_fps_smg_uzi_s_standard',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 9e3,
				acquisition: {
					achievement: 'Sounds of Animals Fighting'
				},
				stats: {
					stability: -12,
					concealment: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default uzi