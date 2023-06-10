import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const chicagoTypewriter = {
	name: 'Chicago Typewriter',
	image: 'm1928',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 14,
	weaponType: 'Submachine Gun',
	firingMode: 'Fully automatic',
	cost: 305e3,
	stats: {
		magazine: 50,
		totalAmmo: 150,
		rateOfFire: 723,
		damage: 58,
		accuracy: 48,
		stability: 68,
		concealment: 18,
		threat: 12,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.5,
		equipDelays: [0.75, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.56, 1.56],
		recoilVertical: [0.39, 1.95],
		spread: 3.12,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			{
				name: 'Stubby Barrel',
				image: 'wpn_fps_smg_thompson_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source.Community,
				cost: 14e3,
				stats: {
					accuracy: -4,
					concealment: 3
				}
			},
			{
				name: 'Long Barrel',
				image: 'wpn_fps_smg_thompson_barrel_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source.Community,
				cost: 28e3,
				stats: {
					accuracy: 4,
					concealment: -3
				}
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		foregrip: [
			{
				name: 'Discrete Foregrip',
				image: 'wpn_fps_smg_thompson_foregrip_discrete',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source.Community,
				cost: 14e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		],
		gadget: submachineGunGadget,
		grip: [
			{
				name: 'Discrete Grip',
				image: 'wpn_fps_smg_thompson_grip_discrete',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: source.Community,
				cost: 14e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'QD Sling Stock',
				image: 'wpn_fps_smg_thompson_stock_nostock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 9e3,
				stats: {
					stability: -12,
					concealment: 4
				}
			},
			{
				name: 'Discrete Stock',
				image: 'wpn_fps_smg_thompson_stock_discrete',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source.Community,
				cost: 21e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		]
	}
} as const satisfies WeaponData

export default chicagoTypewriter