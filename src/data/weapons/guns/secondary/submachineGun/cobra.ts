import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cobra: WeaponData = {
	name: 'Cobra',
	image: 'scorpion',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 18,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 395e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 1000,
		damage: 44,
		accuracy: 28,
		stability: 68,
		concealment: 28,
		threat: 6,
		reload: 2.75
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.7],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt.Suppressor
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		grip: [
			grip['Ergo Grip (Cobra)'],
			grip['Wooden Grip (Cobra)']
		],
		magazine: [
			magazine['Extended Mag (Cobra)']
		],
		sight: submachineGunSight,
		stock: [
			stock['No Stock (Cobra)'],
			stock['Unfolded Stock (Cobra)']
		]
	}
}

export default cobra