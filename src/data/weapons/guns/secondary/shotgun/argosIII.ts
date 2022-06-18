import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSight } from '../commonModifications/shotgunModifications'

const argosIII: WeaponData = {
	name: 'Argos III',
	image: 'ultima',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 34,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 618400,
	stats: {
		magazine: 7,
		totalAmmo: 35,
		rateOfFire: 270,
		damage: 110,
		accuracy: 48,
		stability: 40,
		concealment: 24,
		threat: 28,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: [3.4, 0.57],
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.88, 1.23],
		recoilHorizontal: [-0.4, 0.4],
		recoilVertical: [3.8, 4.0],
		spread: 3.12,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: [
			...shotgunBarrelExt,
			barrelExt['Try-Core Compensator']
		],
		boost: shotgunBoost,
		extra: [
			extra['ShellSwitch M8 Ammo Cache']
		],
		gadget: shotgunGadget,
		sight: shotgunSight,
		stock: [
			stock['Flak Frame Null Stock']
		]
	}
}

export default argosIII