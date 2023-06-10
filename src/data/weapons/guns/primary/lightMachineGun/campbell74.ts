import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const campbell74 = {
	name: 'Campbell 74',
	image: 'kacchainsaw',
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 42,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 1000,
		damage: 68,
		accuracy: 44,
		stability: 24,
		concealment: 9,
		threat: 34,
		reload: 6.0
	},
	extraStats: {
		tacticalReload: 5.0,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.4, 3.36],
		recoilVertical: [-0.48, 1.92],
		spread: 3.36,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Lugosi Barrel',
				image: 'wpn_fps_lmg_kacchainsaw_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 14e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Karloff Barrel',
				image: 'wpn_fps_lmg_kacchainsaw_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 21e3,
				stats: {
					damage: 2,
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			}
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Buckeye Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: lightMachineGunBoost,
		exclusiveSet: [
			{
				name: 'Offworld',
				image: 'wpn_fps_lmg_kacchainsaw_conversionkit',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					magazine: 80,
					totalAmmo: 300,
					damage: -40,
					accuracy: 4,
					stability: 4,
					concealment: 3
				}
			}
		],
		extra: [
			{
				name: 'Moseley Sling',
				image: 'wpn_fps_lmg_kacchainsaw_sling',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: 24,
					stability: 20,
					concealment: -1
				}
			}
		],
		gadget: lightMachineGunGadget,
		magazine: [
			{
				name: 'Perkins Soft Case',
				image: 'wpn_fps_lmg_kacchainsaw_mag_b',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					magazine: 50,
					stability: -8,
					concealment: -2
				}
			}
		],
		underbarrel: [
			{
				name: 'Infernal Flamethrower',
				image: 'wpn_fps_lmg_kacchainsaw_flamethrower',
				icon: 'inv_mod_ammo_dragons_breath',
				slot: 'underbarrel',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					totalAmmo: -60,
					accuracy: -12,
					stability: -8,
					concealment: -8
				}
			}
		]
	}
} as const satisfies WeaponData

export default campbell74