import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const akGen21Tactical: WeaponData = {
	name: 'AK Gen 21 Tactical',
	image: 'vityaz',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 134e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 750,
		damage: 72,
		accuracy: 64,
		stability: 68,
		concealment: 23,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-0.65, 0.65],
		recoilVertical: [0.65, 0.91],
		spread: 2.16,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['MG8 Precision Barrel'],
			barrel['BY90 Wide Suppressor']
		],
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['PBS Suppressor']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		sight: submachineGunSight,
		stock: [
			stock['Bull Stock']
		]
	}
}

export default akGen21Tactical