import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const chicagoTypewriter: WeaponData = {
	name: 'Chicago Typewriter',
	image: 'm1928',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 14,
	weaponType: 'Submachine Gun',
	firingMode: 'Fully automatic',
	cost: 305e3,
	stats: {
		magazine: 50,
		totalAmmo: 150,
		rateOfFire: 723,
		damage: 58,
		accuracy: 48,
		stability: 68,
		concealment: 18,
		threat: 12,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.5,
		equipDelays: [0.75, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.56, 1.56],
		recoilVertical: [0.39, 1.95],
		spread: 3.12,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['Stubby Barrel'],
			barrel['Long Barrel (Chicago Typewriter)']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		foregrip: [
			foregrip['Discrete Foregrip']
		],
		gadget: submachineGunGadget,
		grip: [
			grip['Discrete Grip']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			stock['QD Sling Stock'],
			stock['Discrete Stock (Chicago Typewriter)']
		]
	}
}

export default chicagoTypewriter