import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import boost from '../../modifications/boost'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const kobus90 = {
	name: 'Kobus 90',
	image: 'p90',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 36,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 822e3,
	stats: {
		magazine: 50,
		totalAmmo: 150,
		rateOfFire: 909,
		damage: 56,
		accuracy: 52,
		stability: 60,
		concealment: 25,
		threat: 12,
		reload: 3.4
	},
	extraStats: {
		tacticalReload: 2.55,
		equipDelays: [0.65, 0.68],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_smg_p90_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 62e3,
				stats: {
					damage: 2,
					accuracy: 4,
					stability: 12,
					concealment: -2
				}
			},
			{
				name: 'Civilian Market Barrel',
				image: 'wpn_fps_smg_p90_b_civilian',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 2,
					accuracy: 8,
					stability: -8,
					concealment: -4
				}
			},
			{
				name: 'Mall Ninja Barrel',
				image: 'wpn_fps_smg_p90_b_ninja',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher Mod Pack 2'],
				cost: 14e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: -1,
					stability: 12,
					threat: -18
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: [
			boost.Concealment,
			boost['Concealment (Extra)'],
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost']
		],
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		lowerReceiver: [
			{
				name: 'Custom Assault Frame',
				image: 'wpn_fps_smg_p90_body_boxy',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: source['Base Game'],
				cost: 9e3,
				acquisition: {
					coins: 6
				},
				stats: {}
			}
		],
		magazine: [
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight
	}
} as const satisfies WeaponData

export default kobus90