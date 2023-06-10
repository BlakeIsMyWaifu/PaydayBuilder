import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const locomotive12G = {
	name: 'Locomotive 12G',
	image: 'serbu',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 13,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 283e3,
	stats: {
		magazine: 6,
		totalAmmo: 42,
		rateOfFire: 160,
		damage: 90,
		accuracy: 48,
		stability: 36,
		concealment: 23,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.6, 0.7],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.42, 0.42],
		recoilVertical: [3.99, 4.2],
		spread: 3.12,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
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
				image: 'wpn_fps_shot_shorty_m_extended_short',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					magazine: 2
				}
			}
		],
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			{
				name: 'Standard Stock',
				image: 'wpn_fps_shot_r870_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 14e3,
				stats: {
					stability: 4,
					concealment: -1
				}
			},
			{
				name: 'Police Shorty Stock',
				image: 'wpn_fps_shot_shorty_s_solid_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 21e3,
				stats: {
					stability: 8,
					concealment: -3
				}
			},
			stock['Tactical Stock (Main)'],
			{
				name: 'Tactical Shorty Stock',
				image: 'wpn_fps_shot_shorty_s_nostock_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: -16,
					concealment: 3
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

export default locomotive12G