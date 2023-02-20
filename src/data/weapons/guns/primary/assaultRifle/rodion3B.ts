import content from 'data/source/downloadableContent'

import bolt from '../../modifications/bolt'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const rodion3B: WeaponData = {
	name: 'Rodion 3B',
	image: 'tkb',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'primary',
	reputation: 50,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 90,
		totalAmmo: 180,
		rateOfFire: 800,
		damage: 60,
		accuracy: 60,
		stability: 36,
		concealment: 16,
		threat: 24,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [1.0, 0.5],
		ammoPickup: [5.4, 8.1],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		bolt: [
			bolt['Taktika Deluxe Charging Handle']
		],
		boost: assaultRifleBoost,
		// TODO exclusive set
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		lowerReceiver: [
			lowerReceiver['Arkady Ammo Pouch']
		],
		magazine: [
			magazine['Siberian Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Shoulder Pad']
		]
	}
}

export default rodion3B