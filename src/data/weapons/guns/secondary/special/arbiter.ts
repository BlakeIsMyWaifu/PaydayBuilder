import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialAmmunition, specialBoost, specialGadget, specialSecondarySight, specialSight } from '../commonModifications/specialModifications'

const arbiter = {
	name: 'Arbiter',
	image: 'arbiter',
	source: content['Gage Spec Ops Pack'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Semi-Automatic',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 15,
		rateOfFire: 80,
		damage: 480,
		accuracy: 96,
		stability: 96,
		concealment: 18,
		threat: 37,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.34,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: specialAmmunition,
		barrel: [
			{
				name: 'Bombardier Barrel',
				image: 'wpn_fps_gre_arbiter_b_comp',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Long Barrel',
				image: 'wpn_fps_gre_arbiter_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		boost: specialBoost,
		gadget: specialGadget,
		secondarySight: specialSecondarySight,
		sight: specialSight
	}
} as const satisfies WeaponData

export default arbiter