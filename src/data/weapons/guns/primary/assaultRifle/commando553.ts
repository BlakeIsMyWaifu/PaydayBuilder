import content from 'data/source/downloadableContent'

import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const commando553 = {
	name: 'Commando 553',
	image: 's552',
	source: content['Armored Transport'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 714,
		damage: 52,
		accuracy: 36,
		stability: 56,
		concealment: 22,
		threat: 12,
		reload: 2.4
	},
	extraStats: {
		tacticalReload: 1.65,
		equipDelays: [0.7, 0.55],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.6, 1.6],
		recoilVertical: [0.96, 1.28],
		spread: 3.84,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_ass_s552_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Armored Transport'],
				cost: 52800,
				stats: {
					damage: 1,
					accuracy: 4,
					concealment: -4
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Enhanced Foregrip',
				image: 'wpn_fps_ass_s552_fg_standard_green',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Armored Transport'],
				cost: 10800,
				stats: {
					accuracy: 4,
					concealment: -4
				}
			},
			{
				name: 'Railed Foregrip',
				image: 'wpn_fps_ass_s552_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Armored Transport'],
				cost: 63600,
				stats: {
					stability: 20,
					concealment: -2
				}
			}
		],
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'Enhanced Grip',
				image: 'wpn_fps_ass_s552_g_standard_green',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Armored Transport'],
				cost: 33600,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			{
				name: 'Enhanced Stock',
				image: 'wpn_fps_ass_s552_g_standard_green',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Armored Transport'],
				cost: 33600,
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		],
		upperReceiver: [
			{
				name: 'Heat Treated Body',
				image: 'wpn_fps_ass_s552_body_standard_black',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: content['Armored Transport'],
				cost: 21e3,
				stats: {
					damage: 1,
					accuracy: -4,
					concealment: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default commando553