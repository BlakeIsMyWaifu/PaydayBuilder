import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const car4 = {
	name: 'CAR-4',
	image: 'new_m4',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 4,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 95e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 600,
		damage: 62,
		accuracy: 44,
		stability: 60,
		concealment: 20,
		threat: 14,
		reload: 3.34
	},
	extraStats: {
		tacticalReload: 2.67,
		equipDelays: [0.6, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 3.36,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (CAR / AMR)'],
			{
				name: 'Short Barrel',
				image: 'wpn_fps_m4_uupg_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: -4,
					concealment: 2
				}
			},
			{
				name: 'Stealth Barrel',
				image: 'wpn_fps_m4_uupg_b_sd',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 44e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: -4,
					stability: 4,
					concealment: 1,
					threat: -16.8
				},
				incompatibleSlot: ['barrelExt']
			},
			barrel['DMR Kit (CAR / AMR)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		exclusiveSet: [
			{
				name: 'Longbore',
				image: 'wpn_fps_m4_upg_fg_mk12', // - wpn_fps_m4_upg_mk12
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: source['Chinese New Year 2022'],
				cost: 28e3,
				stats: {
					damage: 2,
					accuracy: 12,
					stability: 8,
					concealment: -4,
					threat: -16.8
				}
			}
		],
		foregrip: [
			{
				name: 'Aftermarket Special Handguard',
				image: 'wpn_fps_m4_uupg_fg_lr300',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					stability: 4,
					concealment: 1
				}
			},
			{
				name: 'Competition Foregrip',
				image: 'wpn_fps_upg_fg_jp',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Mod Courier'],
				cost: 0,
				acquisition: {
					package: 'Purple Snake'
				},
				stats: {
					damage: 1,
					accuracy: 8,
					stability: 12,
					concealment: 2
				}
			},
			{
				name: 'Gazelle Rail',
				image: 'wpn_fps_upg_fg_smr',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Mod Courier'],
				cost: 0,
				acquisition: {
					package: 'Red Spider'
				},
				stats: {
					damage: 2,
					accuracy: -4,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'OVAL Foregrip',
				image: 'wpn_fps_upg_ass_m4_fg_lvoa',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Butcher\'s AK/CAR Mod Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'The Wolf Lures You to Your Grave'
				},
				stats: {
					damage: 2,
					accuracy: -8,
					stability: 16
				}
			},
			{
				name: 'E.M.O. Foregrip',
				image: 'wpn_fps_upg_ass_m4_fg_moe',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Butcher\'s AK/CAR Mod Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'The Wolf Lures You to Your Grave'
				},
				stats: {
					damage: 1,
					accuracy: 4,
					stability: 8,
					concealment: 2
				}
			},
			foregrip['Orthogon Foregrip']
		],
		gadget: assaultRifleGadget,
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
		lowerReceiver: [
			lowerReceiver['THRUST Lower Receiver'],
			lowerReceiver['Orthogon Lower Receiver']
		],
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine'],
			magazine['Plated AR Magazine']
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
		],
		upperReceiver: [
			upperReceiver['Exotique Receiver'],
			upperReceiver['LW Upper Receiver'],
			upperReceiver['THRUST Upper Receiver'],
			upperReceiver['Orthogon Upper Receiver']
		]
	}
} as const satisfies WeaponData

export default car4