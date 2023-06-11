import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const specOps = {
	name: 'SpecOps',
	image: 'mp7',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 20,
		totalAmmo: 140,
		rateOfFire: 952,
		damage: 70,
		accuracy: 64,
		stability: 68,
		concealment: 23,
		threat: 8,
		reload: 2.45
	},
	extraStats: {
		tacticalReload: 1.96,
		equipDelays: [0.5, 0.6],
		ammoPickup: [4.2, 7.7],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 2.16,
		damageModifier: [1.0, 0.6]
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
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_smg_mp7_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -1,
					accuracy: 4,
					stability: 12,
					concealment: -2,
					threat: -24
				}
			},
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
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
				image: 'wpn_fps_smg_mp7_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Gage Weapon Pack #01'],
				cost: 12600,
				stats: {
					magazine: 12,
					concealment: -3
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Unfolded Stock',
				image: 'wpn_fps_smg_mp7_s_long',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Weapon Pack #01'],
				cost: 12600,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default specOps