import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const blaster9mm = {
	name: 'Blaster 9mm',
	image: 'tec9',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 32,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 725e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 896,
		damage: 44,
		accuracy: 28,
		stability: 76,
		concealment: 27,
		threat: 12,
		reload: 3.28
	},
	extraStats: {
		tacticalReload: 2.31,
		equipDelays: [0.5, 0.6],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [0.66, 0.88],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_smg_tec9_b_standard',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Hotline Miami'],
				cost: 21e3,
				acquisition: {
					achievement: 'Sounds of Animals Fighting'
				},
				stats: {
					accuracy: -4,
					stability: 4,
					concealment: 3
				}
			},
			{
				name: 'Ghetto Blaster',
				image: 'wpn_fps_smg_tec9_ns_ext',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Hotline Miami'],
				cost: 36e3,
				acquisition: {
					achievement: 'Overdose'
				},
				stats: {
					accuracy: 4,
					stability: -8,
					concealment: -3
				}
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_smg_tec9_m_extended',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Hotline Miami'],
				cost: 28e3,
				acquisition: {
					achievement: 'Overdose'
				},
				stats: {
					magazine: 12,
					stability: 8,
					concealment: -2
				}
			}
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			{
				name: 'Just Bend It',
				image: 'wpn_fps_smg_tec9_s_unfolded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Hotline Miami'],
				cost: 21e3,
				acquisition: {
					achievement: 'Overdose'
				},
				stats: {
					stability: 12,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default blaster9mm