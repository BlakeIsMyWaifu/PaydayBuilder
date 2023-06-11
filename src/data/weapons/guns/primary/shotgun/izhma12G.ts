import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import chargingHandle from '../../modifications/chargingHandle'
import extra from '../../modifications/extra'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSight } from '../commonModifications/shotgunModifications'

const izhma12G = {
	name: 'IZHMA 12G',
	image: 'saiga',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 581e3,
	stats: {
		magazine: 7,
		totalAmmo: 70,
		rateOfFire: 333,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 13,
		threat: 28,
		reload: 3.95
	},
	extraStats: {
		tacticalReload: 2.65,
		equipDelays: [0.6, 0.6],
		ammoPickup: [3.5, 5.25],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_sho_saiga_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 4
				}
			}
		],
		barrelExt: [
			barrelExt['Shark Teeth Nozzle'],
			barrelExt['The Silent Killer Suppressor'],
			barrelExt['King\'s Crown Compensator'],
			barrelExt['Shh!'],
			barrelExt['Donald\'s Horizontal Leveller'],
			barrelExt['Taktika Muzzle Brake']
		],
		boost: shotgunBoost,
		custom: shotgunCustom,
		chargingHandle: [
			chargingHandle['Taktika Charging Handle']
		],
		extra: [
			extra['Scope Mount']
		],
		foregrip: [
			{
				name: 'The Tactical Russian Rail',
				image: 'wpn_upg_saiga_fg_lowerrail',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Hollow Handle',
				image: 'wpn_fps_sho_saiga_fg_holy',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					concealment: 4
				}
			}
		],
		gadget: shotgunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		magazine: [
			magazine['Big Brother Magazine']
		],
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Skeletal Stock (Main)'],
			stock['Wooden Sniper Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['Taktika Telescopic Stock'],
			stock['VD-12 Stock']
		],
		upperReceiver: [
			upperReceiver['Taktika Railed Cover']
		]
	}
} as const satisfies WeaponData

export default izhma12G