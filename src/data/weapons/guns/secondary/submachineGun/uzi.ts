import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import foregrip from '../../modifications/foregrip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const uzi: WeaponData = {
	name: 'Uzi',
	image: 'uzi',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 55,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 40,
		totalAmmo: 200,
		rateOfFire: 698,
		damage: 44,
		accuracy: 52,
		stability: 68,
		concealment: 24,
		threat: 12,
		reload: 3.52
	},
	extraStats: {
		tacticalReload: 2.45,
		equipDelays: [0.6, 0.55],
		ammoPickup: [3.6, 6.6],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 2.88,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Silent Death']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			foregrip['Tactical Foregrip (Uzi)']
		],
		gadget: submachineGunGadget,
		sight: submachineGunSight,
		stock: [
			stock['Ergonomic Stock'],
			stock['Solid Stock (Uzi)'],
			stock['Folded Stock (Uzi)']
		]
	}
}

export default uzi