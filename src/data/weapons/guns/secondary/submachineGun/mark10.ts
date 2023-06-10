import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const mark10 = {
	name: 'Mark 10',
	image: 'mac10',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 58e3,
	stats: {
		magazine: 40,
		totalAmmo: 160,
		rateOfFire: 1000,
		damage: 58,
		accuracy: 48,
		stability: 64,
		concealment: 27,
		threat: 10,
		reload: 2.7
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.8, 8.8],
		recoilHorizontal: [-0.7, 0.7],
		recoilVertical: [0.98, 1.4],
		spread: 3.12,
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
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Slotted Barrel Extension'],
			barrelExt['Werbell\'s Suppressor'],
			barrelExt['Ported Compensator'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		extra: [
			{
				name: 'Railed Handguard',
				image: 'wpn_fps_smg_mac10_body_ris',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		],
		gadget: submachineGunGadget,
		lowerReceiver: [
			{
				name: 'Custom Built Frame',
				image: 'wpn_fps_smg_mac10_body_modern',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					coins: 6
				},
				stats: {}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_mac10_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					magazine: 8,
					stability: 4,
					concealment: -2
				}
			},
			magazine['Speed Pull Magazine']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Skeletal Stock',
				image: 'wpn_fps_smg_mac10_s_skel',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default mark10