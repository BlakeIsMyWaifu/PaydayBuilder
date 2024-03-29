import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialAmmunition, specialBoost } from '../commonModifications/specialModifications'

const chinaPuff40mm = {
	name: 'China Puff 40mm',
	image: 'china',
	source: content['Wolf Pack'],
	inventorySlot: 'secondary',
	reputation: 39,
	weaponType: 'Special',
	firingMode: 'Pump action',
	cost: 896e3,
	stats: {
		magazine: 3,
		totalAmmo: 6,
		rateOfFire: 50,
		damage: 960,
		accuracy: 96,
		stability: 96,
		concealment: 18,
		threat: 37,
		reload: 6.98
	},
	extraStats: {
		tacticalReload: [4.32, 0.83],
		equipDelays: [1.0, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: specialAmmunition,
		boost: specialBoost,
		stock: [
			{
				name: 'Riot Stock',
				image: 'wpn_fps_gre_china_s_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Wolf Pack'],
				cost: 9e3,
				stats: {
					stability: -4,
					concealment: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default chinaPuff40mm