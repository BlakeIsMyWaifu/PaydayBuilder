import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ks12Urban = {
	name: 'KS12 Urban',
	image: 'shak12',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'primary',
	reputation: 40,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 736e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 500,
		damage: 115,
		accuracy: 44,
		stability: 28,
		concealment: 16,
		threat: 10,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-2.3, 2.3],
		recoilVertical: [1.38, 1.84],
		spread: 3.36,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		extra: [
			{
				name: 'KS12-S Carry Handle',
				image: 'wpn_fps_ass_groza_fl_adapter', // ! missing image
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 9e3,
				stats: {}
			}
		],
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		upperReceiver: [
			{
				name: 'KS12 DMR kit',
				image: 'wpn_fps_ass_shak12_body_vks',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: content['Jiu Feng Smuggler Pack 3'],
				cost: 28e3,
				stats: {
					magazine: -10,
					totalAmmo: -31,
					damage: 85,
					accuracy: 8,
					stability: -4,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default ks12Urban