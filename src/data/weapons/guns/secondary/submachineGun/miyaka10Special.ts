import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadgetSmall } from '../commonModifications/submachineGunModifications'

const miyaka10Special = {
	name: 'Miyaka 10 Special',
	image: 'pm9',
	source: content['Jiu Feng Smuggler Pack 2'],
	inventorySlot: 'secondary',
	reputation: 17,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 372e3,
	stats: {
		magazine: 25,
		totalAmmo: 175,
		rateOfFire: 1100,
		damage: 60,
		accuracy: 28,
		stability: 56,
		concealment: 26,
		threat: 10,
		reload: 2.6
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.5, 0.7],
		ammoPickup: [5.25, 9.63],
		recoilHorizontal: [-1.92, 1.92],
		recoilVertical: [-0.16, 0.96],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			{
				name: 'MS10 Short Barrel',
				image: 'wpn_fps_smg_pm9_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 2'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: -8,
					concealment: 2
				}
			}
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['The Bigger The Better Suppressor']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadgetSmall,
		grip: [
			{
				name: 'MS10 Comfort Wood Grip',
				image: 'wpn_fps_smg_pm9_g_wood',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Jiu Feng Smuggler Pack 2'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		],
		magazine: [
			{
				name: 'MS10 Speedmag',
				image: 'wpn_fps_smg_pm9_m_quick',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Jiu Feng Smuggler Pack 2'],
				cost: 14e3,
				stats: {
					concealment: -1,
					reload: -1
				}
			}
		],
		sight: [
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Biometric Analyzer x1.25']
		],
		stock: [
			{
				name: 'MS10 Tactical Stock',
				image: 'wpn_fps_smg_pm9_s_tactical',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Jiu Feng Smuggler Pack 2'],
				cost: 9e3,
				stats: {
					stability: 12,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default miyaka10Special