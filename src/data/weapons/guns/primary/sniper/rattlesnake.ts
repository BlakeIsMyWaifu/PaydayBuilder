import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const rattlesnake = {
	name: 'Rattlesnake',
	image: 'msr',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 327e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 60,
		damage: 246,
		accuracy: 88,
		stability: 28,
		concealment: 5,
		threat: 26,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 2.6,
		equipDelays: [0.7, 0.6],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [6.9, 11.04],
		spread: 0.72,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_snp_msr_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 7200,
				acquisition: {
					achievement: 'Public Enemy No. 1'
				},
				stats: {
					accuracy: 4,
					concealment: -3
				}
			}
		],
		barrelExt: [
			{
				name: 'Sniper Suppressor',
				image: 'wpn_fps_snp_msr_ns_suppressor',
				icon: 'inv_mod_silencer',
				slot: 'barrelExt',
				source: content['Gage Sniper Pack'],
				cost: 28e3,
				acquisition: {
					achievement: 'Double Kill'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -8,
					accuracy: -4,
					stability: 12,
					concealment: -2,
					threat: -22
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		secondarySight: sniperSecondarySight,
		sight: sniperSight,
		stock: [
			{
				name: 'Tactical Aluminium Body',
				image: 'wpn_fps_snp_msr_body_msr',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Sniper Pack'],
				cost: 49600,
				acquisition: {
					achievement: 'A Taste of Their Own Medicine'
				},
				stats: {
					stability: 8,
					concealment: 5
				}
			}
		]
	}
} as const satisfies WeaponData

export default rattlesnake