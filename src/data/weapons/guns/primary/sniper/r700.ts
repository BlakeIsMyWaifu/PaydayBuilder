import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const r700 = {
	name: 'R700',
	image: 'r700',
	source: content['Fugitive Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 23,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 510e3,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 75,
		damage: 246,
		accuracy: 92,
		stability: 28,
		concealment: 10,
		threat: 28,
		reload: 4.7
	},
	extraStats: {
		tacticalReload: 3.35,
		equipDelays: [0.75, 0.45],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.69, 0.69],
		recoilVertical: [6.9, 11.04],
		spread: 0.48,
		damageModifier: [1.0, 1.5]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_snp_r700_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Fugitive Weapon Pack'],
				cost: 14e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 3
				}
			},
			{
				name: 'Medium Barrel',
				image: 'wpn_fps_snp_r700_b_medium',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Fugitive Weapon Pack'],
				cost: 44e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -8,
					stability: 8,
					concealment: -1,
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
				name: 'Military Stock',
				image: 'wpn_fps_snp_r700_s_tactical',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Fugitive Weapon Pack'],
				cost: 21e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 8
				}
			},
			{
				name: 'Tactical Stock',
				image: 'wpn_fps_snp_r700_s_military',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Fugitive Weapon Pack'],
				cost: 21e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					stability: 8
				}
			}
		]
	}
} as const satisfies WeaponData

export default r700