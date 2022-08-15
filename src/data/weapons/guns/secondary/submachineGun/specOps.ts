import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const specOps: WeaponData = {
	name: 'SpecOps',
	image: 'mp7',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 20,
		totalAmmo: 140,
		rateOfFire: 952,
		damage: 70,
		accuracy: 64,
		stability: 68,
		concealment: 23,
		threat: 8,
		reload: 2.45
	},
	extraStats: {
		tacticalReload: 1.96,
		equipDelays: [0.5, 0.6],
		ammoPickup: [4.2, 7.7],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 2.16,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Suppressed Barrel']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Mag. (SpecOps)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Unfolded Stock (SpecOps)']
		]
	}
}

export default specOps