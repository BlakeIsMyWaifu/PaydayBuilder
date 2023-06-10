import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const eagleHeavy = {
	name: 'Eagle Heavy',
	image: 'scar',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 100,
		rateOfFire: 612,
		damage: 98,
		accuracy: 72,
		stability: 44,
		concealment: 8,
		threat: 22,
		reload: 3.15
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.5, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_ass_scar_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Weapon Pack #01'],
				cost: 29400,
				stats: {
					damage: 1,
					accuracy: -4,
					concealment: 3,
					threat: 4
				}
			},
			{
				name: 'Long Barrel',
				image: 'wpn_fps_ass_scar_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				stats: {
					accuracy: 8,
					concealment: -3
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Rail Extension',
				image: 'wpn_fps_ass_scar_fg_railext',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				stats: {
					stability: 4,
					concealment: -1
				}
			}
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Sniper Stock',
				image: 'wpn_fps_ass_scar_s_sniper',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Weapon Pack #01'],
				cost: 39200,
				stats: {
					stability: 8,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default eagleHeavy