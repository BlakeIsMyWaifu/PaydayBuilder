import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const streetSweeper: WeaponData = {
	name: 'Street Sweeper',
	image: 'striker',
	source: content['Gage Shotgun Pack'],
	inventorySlot: 'secondary',
	reputation: 33,
	weaponType: 'Shotgun',
	firingMode: 'Double action',
	cost: 749e3,
	stats: {
		magazine: 12,
		totalAmmo: 72,
		rateOfFire: 429,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 21,
		threat: 28,
		reload: 8.0
	},
	extraStats: {
		tacticalReload: [2.26, 0.52],
		equipDelays: [0.85, 0.6],
		ammoPickup: [3.6, 5.4],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Long Barrel (Street Sweeper)'],
			barrel['Suppressed Barrel (Street Sweeper)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
}

export default streetSweeper