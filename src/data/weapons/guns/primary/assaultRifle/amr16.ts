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

const amr16 = {
	name: 'AMR-16',
	image: 'm16',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 896e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 857,
		damage: 94,
		accuracy: 56,
		stability: 32,
		concealment: 17,
		threat: 14,
		reload: 3.73
	},
	extraStats: {
		tacticalReload: 2.75,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-1.32, 1.32],
		recoilVertical: [0.88, 1.32],
		spread: 2.64,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (CAR / AMR)'],
			barrel['DMR Kit (CAR / AMR)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Tactical Handguard',
				image: 'wpn_fps_m16_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Blast From The Past Handguard',
				image: 'wpn_fps_m16_fg_vietnam',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					stability: 4,
					concealment: 2
				}
			},
			{
				name: 'Long Ergo Foregrip',
				image: 'wpn_fps_upg_ass_m16_fg_stag',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['The Butcher\'s AK/CAR Mod Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'OVE SAW 72000'
				},
				stats: {
					stability: 8,
					concealment: -3
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
			magazine['Milspec Mag.'],
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

export default amr16