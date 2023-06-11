import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const reinfeld880 = {
	name: 'Reinfeld 880',
	image: 'r870',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 8,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 175e3,
	stats: {
		magazine: 6,
		totalAmmo: 42,
		rateOfFire: 104,
		damage: 90,
		accuracy: 40,
		stability: 32,
		concealment: 11,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.44, 0.44],
		recoilVertical: [4.18, 4.4],
		spread: 3.6,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		foregrip: [
			{
				name: 'Zombie Hunter Pump',
				image: 'wpn_fps_shot_r870_fg_wood',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: 4
				}
			}
		],
		gadget: shotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['Skeletonized AR Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_shot_r870_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 44e3,
				stats: {
					magazine: 2,
					concealment: -1
				}
			}
		],
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			{
				name: 'Short Enough Stock',
				image: 'wpn_fps_shot_r870_s_nostock',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: -12,
					concealment: 3
				}
			},
			stock['Tactical Stock (Main)'],
			{
				name: 'Short Enough Tactical Stock',
				image: 'wpn_fps_shot_r870_s_nostock_big',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: -12,
					concealment: 1
				}
			},
			{
				name: 'Government Issue Tactical Stock',
				image: 'wpn_fps_shot_r870_s_solid_big',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			stock['Muldon Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Ursa Minor Stock']
		],
		upperReceiver: [
			upperReceiver['Shell Rack']
		]
	}
} as const satisfies WeaponData

export default reinfeld880