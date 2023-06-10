import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const predator12G = {
	name: 'Predator 12G',
	image: 'spas12',
	source: source.Community,
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 6,
		totalAmmo: 66,
		rateOfFire: 300,
		damage: 55,
		accuracy: 28,
		stability: 44,
		concealment: 14,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [3.3, 4.95],
		recoilHorizontal: [-0.95, 1.52],
		recoilVertical: [3.42, 2.85],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Extended Mag',
				image: 'wpn_fps_sho_b_spas12_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source.Community,
				cost: 9e3,
				stats: {
					magazine: 4,
					stability: 4,
					concealment: -1
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight,
		stock: [
			{
				name: 'Folded Stock',
				image: 'wpn_fps_sho_s_spas12_folded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 2
				},
				incompatibleSlot: ['sight']
			},
			{
				name: 'Solid Stock',
				image: 'wpn_fps_sho_s_spas12_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -3
				}
			},
			{
				name: 'No Stock',
				image: 'wpn_fps_sho_s_spas12_nostock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 28e3,
				stats: {
					stability: -12,
					concealment: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default predator12G