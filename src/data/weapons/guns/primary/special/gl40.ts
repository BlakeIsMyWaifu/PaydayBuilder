import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import boost from '../../modifications/boost'
import { type WeaponData } from '../../weaponTypes'

const gl40 = {
	name: 'GL40',
	image: 'gre_m79',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 46,
	weaponType: 'Special',
	firingMode: 'Break action',
	cost: 920e3,
	stats: {
		magazine: 1,
		totalAmmo: 6,
		rateOfFire: 30,
		damage: 1300,
		accuracy: 96,
		stability: 96,
		concealment: 18,
		threat: 37,
		reload: 3.1
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Sting Grenade'],
			ammunition['Incendiary Round'],
			ammunition['X1-a Tactical ZAPper'],
			ammunition['Viper Grenade']
		],
		barrel: [
			{
				name: 'Pirate Barrel',
				image: 'wpn_fps_gre_m79_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Gage Assault Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Artillery Barrage'
				},
				specialEffect: ['Removes flip-up sight.'],
				stats: {
					accuracy: -8,
					concealment: 4
				}
			}
		],
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost']
		],
		stock: [
			{
				name: 'Sawed-off Stock',
				image: 'wpn_fps_gre_m79_stock_short',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Gage Assault Pack'],
				cost: 9e3,
				acquisition: {
					achievement: 'Big Bada Boom'
				},
				stats: {
					stability: -4,
					concealment: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default gl40