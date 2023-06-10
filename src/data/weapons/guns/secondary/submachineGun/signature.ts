import source from 'data/source/miscSources'

import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const signature = {
	name: 'Signature',
	image: 'shepheard',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 20,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 441e3,
	stats: {
		magazine: 20,
		totalAmmo: 200,
		rateOfFire: 750,
		damage: 58,
		accuracy: 64,
		stability: 44,
		concealment: 24,
		threat: 10,
		reload: 2.85
	},
	extraStats: {
		tacticalReload: 2.11,
		equipDelays: [0.5, 0.6],
		ammoPickup: [6.0, 11.0],
		recoilHorizontal: [-0.76, 0.76],
		recoilVertical: [1.71, 1.33],
		spread: 2.16,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			{
				name: 'Short Foregrip',
				image: 'wpn_fps_smg_shepheard_body_short',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 2
				}
			}
		],
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_shepheard_mag_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					magazine: 30
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'No Stock',
				image: 'wpn_fps_smg_shepheard_s_no',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: -8,
					concealment: 2
				}
			},
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['VD-12 Stock']
		]
	}
} as const satisfies WeaponData

export default signature