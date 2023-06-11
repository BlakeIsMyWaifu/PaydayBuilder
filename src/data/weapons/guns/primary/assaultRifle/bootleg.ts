import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const bootleg = {
	name: 'Bootleg',
	image: 'tecci',
	source: content['Sydney Character Pack'],
	inventorySlot: 'primary',
	reputation: 21,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 464e3,
	stats: {
		magazine: 100,
		totalAmmo: 200,
		rateOfFire: 667,
		damage: 70,
		accuracy: 24,
		stability: 52,
		concealment: 14,
		threat: 14,
		reload: 3.92
	},
	extraStats: {
		tacticalReload: 3.17,
		equipDelays: [0.6, 0.6],
		ammoPickup: [6, 11],
		recoilHorizontal: [-1.7, 1.7],
		recoilVertical: [1.02, 1.36],
		spread: 4.56,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'AML Barrel',
				image: 'wpn_fps_ass_tecci_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Sydney Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					stability: 12,
					concealment: -3
				}
			}
		],
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
			barrelExt['Ported Compensator'],
			{
				name: 'Bootstrap Compensator',
				image: 'wpn_fps_ass_tecci_ns_special',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['Sydney Character Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 2,
					accuracy: 4,
					stability: 12,
					concealment: -2,
					threat: 6
				}
			},
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['KS12-A Burst Muzzle'],
			barrelExt['KS12-S Long Silencer'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
} as const satisfies WeaponData

export default bootleg