import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const r93 = {
	name: 'R93',
	image: 'r93',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 35,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 798e3,
	stats: {
		magazine: 6,
		totalAmmo: 30,
		rateOfFire: 50,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 5,
		threat: 31,
		reload: 3.82
	},
	extraStats: {
		tacticalReload: 2.82,
		equipDelays: [0.65, 0.7],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.27, 0.27],
		recoilVertical: [8.1, 10.26],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_snp_r93_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 7200,
				acquisition: {
					achievement: 'Maximum Penetration'
				},
				stats: {
					accuracy: -8,
					stability: 8,
					concealment: 3
				}
			},
			{
				name: 'Compensated Suppressor',
				image: 'wpn_fps_snp_r93_b_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 22400,
				acquisition: {
					achievement: 'Last Action Villain'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -16,
					accuracy: -4,
					stability: 4,
					concealment: -1,
					threat: -23
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		secondarySight: sniperSecondarySight,
		sight: sniperSight,
		stock: [
			{
				name: 'Wooden Body',
				image: 'wpn_fps_snp_r93_body_wood',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Sniper Pack'],
				cost: 42400,
				acquisition: {
					achievement: 'You Can\'t Hide'
				},
				stats: {
					stability: 8,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default r93