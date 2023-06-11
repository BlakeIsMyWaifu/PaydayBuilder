import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSight } from '../commonModifications/shotgunModifications'

const mosconi12GTactical = {
	name: 'Mosconi 12G Tactical',
	image: 'm590',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 261e3,
	stats: {
		magazine: 7,
		totalAmmo: 42,
		rateOfFire: 150,
		damage: 110,
		accuracy: 36,
		stability: 32,
		concealment: 19,
		threat: 28,
		reload: 3.98
	},
	extraStats: {
		tacticalReload: [1.26, 0.4],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.22, 0.22],
		recoilVertical: [4.62, 4.84],
		spread: 3.84,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'CE Extender',
				image: 'wpn_fps_sho_m590_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					magazine: 4,
					accuracy: 4,
					stability: 4,
					concealment: -1
				}
			},
			{
				name: 'CE Muffler',
				image: 'wpn_fps_sho_m590_b_suppressor',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -8,
					concealment: -1,
					threat: -22
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Titanium Skeleton Grip'],
			grip['Skeletonized AR Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		lowerReceiver: [
			{
				name: 'CE Rail Stabilizer',
				image: 'wpn_fps_sho_m590_body_rail',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['Jiu Feng Smuggler Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -2
				}
			}
		],
		sight: shotgunSight
	}
} as const satisfies WeaponData

export default mosconi12GTactical