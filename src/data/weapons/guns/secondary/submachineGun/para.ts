import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const para = {
	name: 'Para',
	image: 'olympic',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 25,
		totalAmmo: 150,
		rateOfFire: 682,
		damage: 65,
		accuracy: 44,
		stability: 64,
		concealment: 24,
		threat: 14,
		reload: 3.23
	},
	extraStats: {
		tacticalReload: 2.16,
		equipDelays: [0.5, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 3.36,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			{
				name: 'Medium Barrel',
				image: 'wpn_fps_m4_uupg_b_medium',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -1
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
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			{
				name: 'Railed Handguard',
				image: 'wpn_fps_smg_olympic_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: 4,
					concealment: -1
				}
			},
			{
				name: 'Aftermarket Shorty',
				image: 'wpn_fps_upg_smg_olympic_fg_lr300',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Butcher\'s AK/CAR Mod Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'The Wolf Lures You to Your Grave'
				},
				stats: {
					stability: 8
				}
			}
		],
		gadget: submachineGunGadget,
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
			magazine['Milspec Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine'],
			magazine['Plated AR Magazine']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			{
				name: 'Shorter Than Short Stock',
				image: 'wpn_fps_smg_olympic_s_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
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

export default para