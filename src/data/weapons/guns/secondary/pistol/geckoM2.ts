import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const geckoM2 = {
	name: 'Gecko M2',
	image: 'maxim9',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 12,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 208800,
	stats: {
		magazine: 17,
		totalAmmo: 68,
		rateOfFire: 480,
		damage: 100,
		accuracy: 64,
		stability: 44,
		concealment: 29,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.7, 2.38],
		recoilHorizontal: [-0.95, 0.95],
		recoilVertical: [2.28, 3.42],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'UpShot Barrel',
				image: 'wpn_fps_pis_maxim9_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 11200,
				stats: {
					accuracy: 12,
					stability: 8,
					concealment: -3
				}
			},
			{
				name: 'Pinnacle Barrel',
				image: 'wpn_fps_pis_maxim9_b_marksman',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 11200,
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -1
				}
			}
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Flash Hider']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			{
				name: 'Stack S3 Magazine',
				image: 'wpn_fps_pis_maxim9_m_ext',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					magazine: 4,
					concealment: -1
				}
			}
		],
		sight: pistolSight
	}
} as const satisfies WeaponData

export default geckoM2