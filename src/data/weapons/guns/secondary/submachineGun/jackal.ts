import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const jackal = {
	name: 'Jackal',
	image: 'schakal',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 20,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 441e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 652,
		damage: 99,
		accuracy: 60,
		stability: 52,
		concealment: 24,
		threat: 10,
		reload: 3.62
	},
	extraStats: {
		tacticalReload: 2.36,
		equipDelays: [0.5, 0.6],
		ammoPickup: [0.9, 3.15],
		recoilHorizontal: [-1.7, 1.7],
		recoilVertical: [-0.34, 0.68],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Civilian Barrel',
				image: 'wpn_fps_smg_schakal_b_civil',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
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
				name: 'Silentgear Silencer',
				image: 'wpn_fps_smg_schakal_ns_silencer',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					damage: -3,
					stability: 4,
					concealment: -1,
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
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_schakal_m_long',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					magazine: 20,
					concealment: -2
				}
			},
			{
				name: 'Short Magazine',
				image: 'wpn_fps_smg_schakal_m_short',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					magazine: -10,
					concealment: 2
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Civilian Stock',
				image: 'wpn_fps_smg_schakal_s_civil',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: 4,
					concealment: -1
				}
			},
			{
				name: 'Folded Stock',
				image: 'wpn_fps_smg_schakal_s_folded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: -8,
					concealment: 2
				}
			}
		],
		verticalGrip: [
			{
				name: 'Twinkle Grip',
				image: 'wpn_fps_smg_schakal_vg_surefire',
				icon: 'inv_mod_vertical_grip',
				slot: 'verticalGrip',
				source: content['John Wick Weapon Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Flashlight', 'Laser'],
				stats: {
					stability: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default jackal