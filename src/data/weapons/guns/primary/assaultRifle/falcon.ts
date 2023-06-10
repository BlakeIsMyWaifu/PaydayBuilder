import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const falcon = {
	name: 'Falcon',
	image: 'fal',
	source: content['The Big Bank Heist'],
	inventorySlot: 'primary',
	reputation: 42,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 20,
		totalAmmo: 100,
		rateOfFire: 698,
		damage: 98,
		accuracy: 68,
		stability: 44,
		concealment: 10,
		threat: 22,
		reload: 3.28
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.6, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'CQB Foregrip',
				image: 'wpn_fps_ass_fal_fg_01',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'Entrapment'
				},
				stats: {
					damage: 1,
					accuracy: -4,
					concealment: 6
				}
			},
			{
				name: 'Retro Foregrip',
				image: 'wpn_fps_ass_fal_fg_03',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'You Owe Me One'
				},
				stats: {
					damage: 1,
					stability: 8,
					concealment: -1
				}
			},
			{
				name: 'Marksman Foregrip',
				image: 'wpn_fps_ass_fal_fg_04',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'Sweet Sixteen'
				},
				stats: {
					damage: 1,
					accuracy: 4,
					stability: -4,
					concealment: -2
				}
			},
			{
				name: 'Wooden Foregrip',
				image: 'wpn_fps_ass_fal_fg_wood',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: '12 Angry Minutes'
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -2
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'Tactical Grip',
				image: 'wpn_fps_ass_fal_g_01',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'It Takes Two to Tango'
				},
				stats: {
					stability: 4,
					concealment: 2
				}
			}
		],
		magazine: [
			{
				name: 'Extended Magazine',
				image: 'wpn_fps_ass_fal_m_01',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'It Takes a Pig to Kill a Pig'
				},
				stats: {
					magazine: 20,
					accuracy: -4,
					stability: 4,
					concealment: -2
				}
			}
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'CQB Stock',
				image: 'wpn_fps_ass_fal_s_01',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'Don\'t Bring the Heat'
				},
				stats: {
					concealment: 5
				}
			},
			{
				name: 'Marksman Stock (Falcon)',
				image: 'wpn_fps_ass_fal_s_03',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'Funding Father'
				},
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			},
			{
				name: 'Wooden Stock (Falcon)',
				image: 'wpn_fps_ass_fal_s_wood',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['The Big Bank Heist'],
				cost: 11200,
				acquisition: {
					achievement: 'Backing Bobblehead Bob'
				},
				stats: {
					stability: 16
				}
			}
		]
	}
} as const satisfies WeaponData

export default falcon