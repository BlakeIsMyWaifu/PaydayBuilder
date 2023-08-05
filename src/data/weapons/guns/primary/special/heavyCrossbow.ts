import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const heavyCrossbow = {
	name: 'Heavy Crossbow',
	image: 'arblast',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 38,
	weaponType: 'Special',
	firingMode: 'Single shot',
	cost: 871e3,
	stats: {
		magazine: 1,
		totalAmmo: 35,
		rateOfFire: 21,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 28,
		threat: 10,
		reload: 2.5
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.5, 0.7],
		ammoPickup: null,
		recoilHorizontal: [-0.6, 0.6],
		recoilVertical: [-0.12, 0.24],
		spread: 0.17,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			{
				name: 'Explosive Bolt',
				image: 'wpn_fps_bow_arblast_m_explosive',
				icon: 'inv_mod_ammo_explosive',
				slot: 'ammunition',
				source: content['Gage Chivalry Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Explosive', 'Removes Ammo Pickup'],
				stats: {
					damage: -600
				}
			},
			{
				name: 'Poison Bolt',
				image: 'wpn_fps_bow_arblast_m_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: content['Gage Chivalry Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -100,
					damage: -1700
				}
			}
		],
		boost: specialBoost
	}
} as const satisfies WeaponData

export default heavyCrossbow