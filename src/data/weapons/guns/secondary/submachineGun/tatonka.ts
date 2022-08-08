import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const tatonka: WeaponData = {
	name: 'Tatonka',
	image: 'coal',
	source: content['Gage Russian Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 42,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 64,
		totalAmmo: 128,
		rateOfFire: 652,
		damage: 99,
		accuracy: 52,
		stability: 60,
		concealment: 24,
		threat: 10,
		reload: 3.27
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.5, 0.6],
		ammoPickup: [1.28, 4.48],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [-0.3, 0.6],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
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
		sight: submachineGunSight
	}
}

export default tatonka