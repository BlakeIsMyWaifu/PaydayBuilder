import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const lightCrossbow = {
	name: 'Light Crossbow',
	image: 'frankish',
	source: content['Gage Chivalry Pack'],
	inventorySlot: 'primary',
	reputation: 17,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 372e3,
	stats: {
		magazine: 1,
		totalAmmo: 50,
		rateOfFire: 40,
		damage: 750,
		accuracy: 96,
		stability: 96,
		concealment: 29,
		threat: 10,
		reload: 1.5
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
				image: 'wpn_fps_bow_frankish_m_explosive',
				icon: 'inv_mod_ammo_explosive',
				slot: 'ammunition',
				source: content['Gage Chivalry Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Explosive', 'Removes Ammo Pickup'],
				stats: {
					damage: -50
				}
			},
			{
				name: 'Poison Bolt',
				image: 'wpn_fps_bow_frankish_m_poison',
				icon: 'inv_mod_ammo_poison',
				slot: 'ammunition',
				source: content['Gage Chivalry Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['100% chance to poison target'],
				stats: {
					totalAmmo: -15,
					damage: -650
				}
			}
		],
		boost: specialBoost
	}
} as const satisfies WeaponData

export default lightCrossbow