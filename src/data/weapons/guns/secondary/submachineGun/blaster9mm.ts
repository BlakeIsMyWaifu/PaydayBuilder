import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const blaster9mm: WeaponData = {
	name: 'Blaster 9mm',
	image: 'tec9',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 32,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 725e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 896,
		damage: 44,
		accuracy: 28,
		stability: 76,
		concealment: 27,
		threat: 12,
		reload: 3.28
	},
	extraStats: {
		tacticalReload: 2.31,
		equipDelays: [0.5, 0.6],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [0.66, 0.88],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (Blaster)'],
			barrel['Ghetto Blaster']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Mag (Blaster)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Just Bend It']
		]
	}
}

export default blaster9mm