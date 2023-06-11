import content from 'data/source/downloadableContent'

import bipod from '../../modifications/bipod'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const buzzsaw42 = {
	name: 'Buzzsaw 42',
	image: 'mg42',
	source: content['Gage Historical Pack'],
	inventorySlot: 'primary',
	reputation: 71,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 150,
		totalAmmo: 450,
		rateOfFire: 1200,
		damage: 80,
		accuracy: 48,
		stability: 28,
		concealment: 1,
		threat: 31,
		reload: 6.5
	},
	extraStats: {
		tacticalReload: 6.5,
		equipDelays: [0.9, 0.9],
		ammoPickup: [11.25, 13.5],
		recoilHorizontal: [-2.3, 3.22],
		recoilVertical: [-0.46, 1.84],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Light Barrel',
				image: 'wpn_fps_lmg_mg42_b_mg34',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Bullet Hell'
				},
				stats: {
					damage: -1,
					accuracy: 8,
					stability: 8
				}
			},
			{
				name: 'Heatsinked Suppressed Barrel',
				image: 'wpn_fps_lmg_mg42_b_vg38',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Historical Pack'],
				cost: 28e3,
				acquisition: {
					achievement: 'Wind of Change'
				},
				stats: {
					accuracy: -4,
					stability: 4,
					threat: -23
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		gadget: lightMachineGunGadget
	}
} as const satisfies WeaponData

export default buzzsaw42