import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const englishLongbow = {
	name: 'English Longbow',
	image: 'long',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Special',
	firingMode: 'Single shot',
	cost: 652e3,
	stats: {
		magazine: 1,
		totalAmmo: 35,
		rateOfFire: 300,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 29,
		threat: 37,
		reload: 1.5
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.85, 0.85],
		ammoPickup: null,
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			{
				name: 'Explosive Arrow',
				image: 'wpn_fps_bow_long_m_explosive',
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
				name: 'Poison Arrow',
				image: 'wpn_fps_bow_long_m_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: content['Gage Chivalry Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -10,
					damage: -1700
				}
			}
		],
		boost: specialBoost
	}
} as const satisfies WeaponData

export default englishLongbow