import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import bipod from '../../modifications/bipod'
import chargingHandle from '../../modifications/chargingHandle'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const rpk = {
	name: 'RPK',
	image: 'rpk',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 100,
		totalAmmo: 300,
		rateOfFire: 750,
		damage: 120,
		accuracy: 28,
		stability: 8,
		concealment: 5,
		threat: 22,
		reload: 4.56
	},
	extraStats: {
		tacticalReload: 3.4,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.8, 3.92],
		recoilVertical: [-0.56, 2.24],
		spread: 4.32,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
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
			barrelExt['PBS Suppressor'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Fyodor Muzzle Brake'],
			barrelExt['Federation Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		chargingHandle: [
			chargingHandle['Taktika Charging Handle']
		],
		foregrip: [
			{
				name: 'Tactical Foregrip',
				image: 'wpn_fps_lmg_rpk_fg_standard',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Weapon Pack #02'],
				cost: 64800,
				stats: {
					damage: 1,
					accuracy: -4,
					stability: -4,
					concealment: 1
				}
			}
		],
		gadget: lightMachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			{
				name: 'Plastic Stock',
				image: 'wpn_fps_lmg_rpk_s_standard',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Weapon Pack #02'],
				cost: 37800,
				stats: {
					stability: 8,
					concealment: 1
				}
			},
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['Taktika Telescopic Stock'],
			stock['VD-12 Stock']
		]
	}
} as const satisfies WeaponData

export default rpk