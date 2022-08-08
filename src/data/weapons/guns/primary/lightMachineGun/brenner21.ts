import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bipod from '../../modifications/bipod'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const brenner21: WeaponData = {
	name: 'Brenner-21',
	image: 'hk21',
	source: content['Gage Weapon Pack #02'],
	inventorySlot: 'primary',
	reputation: 75,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 723,
		damage: 120,
		accuracy: 36,
		stability: 8,
		concealment: 1,
		threat: 37,
		reload: 6.7
	},
	extraStats: {
		tacticalReload: 4.65,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-1.68, 1.68],
		recoilVertical: [1.12, 2.24],
		spread: 3.84,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Brenner)']
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		foregrip: [
			foregrip['Short Foregrip (Brenner)']
		],
		gadget: lightMachineGunGadget,
		grip: [
			grip['Ergo Grip (Brenner)']
		]
	}
}

export default brenner21