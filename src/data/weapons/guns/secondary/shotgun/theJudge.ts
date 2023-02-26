import source from 'data/source/miscSources'

import lowerReceiver from '../../modifications/lowerReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const theJudge: WeaponData = {
	name: 'The Judge',
	image: 'judge',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 35,
	weaponType: 'Shotgun',
	firingMode: 'Double action',
	cost: 798e3,
	stats: {
		magazine: 5,
		totalAmmo: 35,
		rateOfFire: 500,
		damage: 155,
		accuracy: 52,
		stability: 28,
		concealment: 29,
		threat: 28,
		reload: 2.25
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.45, 0.5],
		ammoPickup: [0.18, 0.53],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [6.67, 6.9],
		spread: 2.88,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		sight: shotgunSight,
		lowerReceiver: [
			lowerReceiver['Custom Reinforced Frame']
		]
	}
}

export default theJudge