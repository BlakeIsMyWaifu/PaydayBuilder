import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const gewehr3 = {
	name: 'Gewehr 3',
	image: 'g3',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 52,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 30,
		totalAmmo: 100,
		rateOfFire: 652,
		damage: 99,
		accuracy: 68,
		stability: 48,
		concealment: 12,
		threat: 26,
		reload: 2.0
	},
	extraStats: {
		tacticalReload: 1.4,
		equipDelays: [0.65, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.8, 1.8],
		recoilVertical: [1.08, 1.44],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Assault Kit',
				image: 'wpn_fps_ass_g3_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'So Many Choices'
				},
				specialEffect: ['Sets ammo pickup to 6-12.6, is not affected by skills/perks. ammo pickup'],
				stats: {
					totalAmmo: 75,
					damage: -40,
					accuracy: -16,
					stability: 20,
					concealment: 4
				}
			},
			{
				name: 'DMR Kit',
				image: 'wpn_fps_ass_g3_b_sniper',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				specialEffect: [
					'Sets ammo pickup to 0.5-1.75, is not affected by skills/perks.',
					'Doubles amount of damage from barrel extensions'
				],
				stats: {
					totalAmmo: -30,
					magazine: -10,
					damage: 61,
					accuracy: 8,
					stability: -4,
					concealment: -2
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Precision Foregrip',
				image: 'wpn_fps_ass_g3_fg_psg',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 4,
					stability: -4,
					concealment: -1
				}
			},
			{
				name: 'Tactical Foregrip',
				image: 'wpn_fps_ass_g3_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Unusual Suspects'
				},
				stats: {
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Wooden Foregrip',
				image: 'wpn_fps_ass_g3_fg_retro',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Not Today'
				},
				stats: {
					accuracy: -4,
					stability: 12,
					concealment: 2
				}
			},
			{
				name: 'Plastic Foregrip',
				image: 'wpn_fps_ass_g3_fg_retro_plastic',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'So Many Choices'
				},
				stats: {
					accuracy: -4,
					concealment: 4
				}
			}
		],
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'Retro Grip',
				image: 'wpn_fps_ass_g3_g_retro',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Not Today'
				},
				stats: {
					stability: 8
				}
			},
			{
				name: 'Precision Grip',
				image: 'wpn_fps_ass_g3_g_sniper',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 8,
					stability: -4,
					concealment: -1
				}
			}
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Precision Stock',
				image: 'wpn_fps_ass_g3_s_sniper',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Precision Aiming'
				},
				stats: {
					accuracy: 8,
					stability: -4,
					concealment: -1
				}
			},
			{
				name: 'Wooden Stock (Gewehr)',
				image: 'wpn_fps_ass_g3_s_wood',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 14e3,
				acquisition: {
					achievement: 'Not Today'
				},
				stats: {
					stability: 12,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default gewehr3