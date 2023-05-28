import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const eagleHeavy: WeaponData = {
	name: 'Eagle Heavy',
	image: 'scar',
	source: content['Gage Weapon Pack #01'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 100,
		rateOfFire: 612,
		damage: 98,
		accuracy: 72,
		stability: 44,
		concealment: 8,
		threat: 22,
		reload: 3.15
	},
	extraStats: {
		tacticalReload: 2.2,
		equipDelays: [0.5, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (Eagle Heavy)'],
			barrel['Long Barrel (Eagle Heavy)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Rail Extension']
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			stock['Sniper Stock (Eagle Heavy)']
		]
	}
}

export default eagleHeavy