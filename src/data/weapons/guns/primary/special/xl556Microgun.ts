import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost, specialGadget } from '../commonModifications/specialModifications'

const xl556Microgun = {
	name: 'XL 5.56 Microgun',
	image: 'shuno',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 30,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 676e3,
	stats: {
		magazine: 750,
		totalAmmo: 750,
		rateOfFire: 2000,
		damage: 35,
		accuracy: 32,
		stability: 24,
		concealment: 5,
		threat: 31,
		reload: 7.8
	},
	extraStats: {
		tacticalReload: 7.8,
		equipDelays: [0.9, 1.5],
		ammoPickup: [7.5, 26.25],
		recoilHorizontal: [-0.36, 0.48],
		recoilVertical: [-0.12, 0.24],
		spread: 4.08,
		damageModifier: null
	},
	modifications: {
		boost: specialBoost,
		gadget: specialGadget,
		upperReceiver: [
			{
				name: 'Heat Sink Barrel',
				image: 'wpn_fps_lmg_shuno_b_heat_long',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					stability: -8,
					concealment: -2
				}
			},
			{
				name: 'XS Heat Sink Barrel',
				image: 'wpn_fps_lmg_shuno_b_heat_short',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					stability: 8,
					concealment: 2
				}
			},
			{
				name: 'XS Barrel',
				image: 'wpn_fps_lmg_shuno_b_short',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					stability: 16,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default xl556Microgun