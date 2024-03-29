import content from 'data/source/downloadableContent'

import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const thanatos50Cal = {
	name: 'Thanatos .50 cal',
	image: 'm95',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 65,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 15,
		rateOfFire: 40,
		damage: 3500,
		accuracy: 92,
		stability: 4,
		concealment: 1,
		threat: 37,
		reload: 5.23
	},
	extraStats: {
		tacticalReload: 3.96,
		equipDelays: [0.9, 0.9],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [8.7, 11.02],
		spread: 0.48,
		damageModifier: [1.0, 1.3]
	},
	modifications: {
		barrel: [
			{
				name: 'Tank Buster Barrel',
				image: 'wpn_fps_snp_m95_barrel_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 7200,
				acquisition: {
					achievement: 'Far, Far Away'
				},
				stats: {
					accuracy: 8,
					concealment: -4,
					threat: 60
				}
			},
			{
				name: 'CQB Barrel',
				image: 'wpn_fps_snp_m95_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 7200,
				acquisition: {
					achievement: 'Surprise Motherfucker'
				},
				stats: {
					accuracy: -12,
					concealment: 3
				}
			},
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_snp_m95_barrel_suppressed',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Gage Sniper Pack'],
				cost: 35200,
				acquisition: {
					achievement: 'Dodge This'
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -80,
					stability: 8,
					threat: -27
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: sniperSecondarySight,
		sight: sniperSight
	}
} as const satisfies WeaponData

export default thanatos50Cal