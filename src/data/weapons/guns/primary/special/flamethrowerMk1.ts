import content from 'data/source/downloadableContent'

import boost from '../../modifications/boost'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo } from '../commonModifications/specialModifications'

const flamethrowerMk1: WeaponData = {
	name: 'Flamethrower Mk.1',
	image: 'flamethrower_mk2',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: 44,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 900,
		totalAmmo: 1800,
		rateOfFire: 2000,
		damage: 7,
		accuracy: 0,
		stability: 0,
		concealment: 7,
		threat: 37,
		reload: 8.5
	},
	extraStats: {
		tacticalReload: 8.5,
		equipDelays: [0.85, 0.85],
		ammoPickup: [4.5, 13.5],
		recoilHorizontal: [0.0, 0.0],
		recoilVertical: [0.0, 0.0],
		spread: 6.0,
		damageModifier: null
	},
	modifications: {
		boost: [
			...specialBoostTotalAmmo,
			boost['Damage (Flamethrower)']
		],
		magazine: [
			magazine.Rare,
			magazine['Well Done']
		]
	}
}

export default flamethrowerMk1