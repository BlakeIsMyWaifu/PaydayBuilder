import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const streetSweeper = {
	name: 'Street Sweeper',
	image: 'striker',
	source: content['Gage Shotgun Pack'],
	inventorySlot: 'secondary',
	reputation: 33,
	weaponType: 'Shotgun',
	firingMode: 'Double action',
	cost: 749e3,
	stats: {
		magazine: 12,
		totalAmmo: 72,
		rateOfFire: 429,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 21,
		threat: 28,
		reload: 8.0
	},
	extraStats: {
		tacticalReload: [2.26, 0.52],
		equipDelays: [0.85, 0.6],
		ammoPickup: [3.6, 5.4],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_sho_striker_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Shotgun Pack'],
				cost: 21e3,
				acquisition: {
					achievement: 'Bang for the Buck'
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_sho_striker_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Shotgun Pack'],
				cost: 36e3,
				acquisition: {
					achievement: 'No Heist for Old Man'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: -4,
					stability: 8,
					concealment: -2,
					threat: -22
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
} as const satisfies WeaponData

export default streetSweeper