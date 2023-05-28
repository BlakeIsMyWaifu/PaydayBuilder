import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const patchettL2A1: WeaponData = {
	name: 'Patchett L2A1',
	image: 'sterling',
	source: content['Gage Historical Pack'],
	inventorySlot: 'secondary',
	reputation: 51,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 24,
		totalAmmo: 96,
		rateOfFire: 545,
		damage: 99,
		accuracy: 52,
		stability: 76,
		concealment: 20,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.65, 0.55],
		ammoPickup: [2.88, 5.28],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [0.66, 0.88],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Patchett)'],
			barrel['Short Barrel (Patchett)'],
			barrel['Heatsinked Suppressed Barrel (Patchett)'],
			barrel['Suppressed Barrel (Patchett)']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Magazine (Patchett)'],
			magazine['Short Mag (Patchett)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Folded Stock (Patchett)'],
			stock['No Stock (Patchett)'],
			stock['Solid Stock (Patchett)']
		]
	}
}

export default patchettL2A1