import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost, specialGadget } from '../commonModifications/specialModifications'

const vulcanMinigun = {
	name: 'Vulcan Minigun',
	image: 'm134',
	source: content['The OVERKILL Pack'],
	inventorySlot: 'primary',
	reputation: 40,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 871e3,
	stats: {
		magazine: 750,
		totalAmmo: 750,
		rateOfFire: 3000,
		damage: 25,
		accuracy: 32,
		stability: 24,
		concealment: 5,
		threat: 31,
		reload: 7.8
	},
	extraStats: {
		tacticalReload: 7.8,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 26.25],
		recoilHorizontal: [-0.36, 0.48],
		recoilVertical: [-0.12, 0.24],
		spread: 4.08,
		damageModifier: null
	},
	modifications: {
		barrel: [
			{
				name: 'Aerial Assault Barrel',
				image: 'wpn_fps_lmg_m134_barrel_extreme',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The OVERKILL Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 4,
					stability: -12,
					concealment: -3
				}
			},
			{
				name: 'The Stump Barrel',
				image: 'wpn_fps_lmg_m134_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The OVERKILL Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: -4,
					stability: 12,
					concealment: 3
				}
			}
		],
		boost: specialBoost,
		extra: [
			{
				name: 'I\'ll Take Half That Kit',
				image: 'wpn_fps_lmg_m134_body_upper_light',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['The OVERKILL Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					totalAmmo: -300,
					accuracy: -4,
					stability: 12,
					concealment: 3
				}
			}
		],
		gadget: specialGadget
	}
} as const satisfies WeaponData

export default vulcanMinigun