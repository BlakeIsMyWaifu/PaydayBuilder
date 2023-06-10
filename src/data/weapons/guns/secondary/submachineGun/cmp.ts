import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cmp = {
	name: 'CMP',
	image: 'mp9',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 30,
		totalAmmo: 210,
		rateOfFire: 952,
		damage: 50,
		accuracy: 28,
		stability: 76,
		concealment: 26,
		threat: 8,
		reload: 2.48
	},
	extraStats: {
		tacticalReload: 1.51,
		equipDelays: [0.4, 0.5],
		ammoPickup: [6.3, 11.55],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [-1.32, 1.32],
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
			barrelExt['Ported Compensator'],
			{
				name: 'Tactical Suppressor',
				image: 'wpn_fps_smg_mp9_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['The Butcher Mod Pack 2'],
				cost: 28e3,
				specialEffect: ['Silences Weapon'],
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -4,
					threat: -24
				}
			},
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_mp9_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					magazine: 12,
					concealment: -2
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Skeletal Stock',
				image: 'wpn_fps_smg_mp9_s_skel',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default cmp