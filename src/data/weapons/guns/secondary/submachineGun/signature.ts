import source from 'data/source/miscSources'

import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const signature: WeaponData = {
	name: 'Signature',
	image: 'shepheard',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 20,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 441e3,
	stats: {
		magazine: 20,
		totalAmmo: 200,
		rateOfFire: 750,
		damage: 58,
		accuracy: 64,
		stability: 44,
		concealment: 24,
		threat: 10,
		reload: 2.85
	},
	extraStats: {
		tacticalReload: 2.11,
		equipDelays: [0.5, 0.6],
		ammoPickup: [6.0, 11.0],
		recoilHorizontal: [-0.76, 0.76],
		recoilVertical: [1.71, 1.33],
		spread: 2.16,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			foregrip['Short Foregrip (Signature)']
		],
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Magazine (Signature)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['No Stock (Signature)']
		]
	}
}

export default signature