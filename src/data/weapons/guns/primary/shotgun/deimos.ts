import content from 'data/source/downloadableContent'

import secondarySight from '../../modifications/secondarySight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunSight } from '../commonModifications/shotgunModifications'
import { shotgunBarrelExt } from '../commonModifications/shotgunModifications'
import { shotgunBoost } from '../commonModifications/shotgunModifications'
import { shotgunGadget } from '../commonModifications/shotgunModifications'

const deimos = {
	name: 'Deimos',
	image: 'supernova',
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 5,
		totalAmmo: 25,
		rateOfFire: 100,
		damage: 134,
		accuracy: 40,
		stability: 32,
		concealment: 13,
		threat: 28,
		reload: 6.73
	},
	extraStats: {
		tacticalReload: [3.57, 0.6],
		equipDelays: [0.85, 0.85],
		ammoPickup: [1.25, 1.88],
		recoilHorizontal: [-0.22, 0.22],
		recoilVertical: [4.62, 4.84],
		spread: 3.6,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Metus Barrel',
				image: 'wpn_fps_sho_supernova_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -1
				}
			},
			{
				name: 'Formido Barrel',
				image: 'wpn_fps_sho_supernova_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		exclusiveSet: [
			{
				name: 'Flatline',
				image: 'Wpn_fps_sho_supernova_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					magazine: 2,
					totalAmmo: 5,
					damage: -10,
					accuracy: -8,
					stability: 4,
					concealment: 2
				}
			}
		],
		gadget: shotgunGadget,
		grip: [
			{
				name: 'Advanced Phobos Grip',
				image: 'wpn_fps_sho_supernova_g_adapter',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			},
			{
				name: 'Phobos Grip',
				image: 'wpn_fps_sho_supernova_g_raven',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			},
			{
				name: 'Compact Phobos Grip',
				image: 'wpn_fps_sho_supernova_g_stakeout',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: -8,
					concealment: 2
				}
			}
		],
		magazine: [
			{
				name: 'Eris Magazine Extender',
				image: 'wpn_fps_sho_supernova_m_extender',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 4'],
				cost: 44e3,
				stats: {
					magazine: 2,
					concealment: -2
				}
			}
		],
		secondarySight: [
			secondarySight['Riktpunkt 45 degree Sight'],
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['45 degree red-dot sight'],
			secondarySight['45 Degree Ironsights'],
			secondarySight['Signature Magnifier Gadget x6.25']
		],
		sight: shotgunSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			{
				name: 'Collapsed Ares Stock',
				image: 'wpn_fps_sho_supernova_s_collapsed',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			},
			{
				name: 'Ares Stock',
				image: 'wpn_fps_sho_supernova_s_raven',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			},
			stock['Ursa Minor Stock']
		],
		upperReceiver: [
			{
				name: 'Leonidas Shell Rack',
				image: 'wpn_fps_sho_supernova_shell_rack',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: content['McShay Weapon Pack 4'],
				cost: 9e3,
				stats: {
					totalAmmo: 5,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default deimos