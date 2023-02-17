import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import boost from '../../modifications/boost'
import custom from '../../modifications/custom'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import { WeaponData } from '../../weaponTypes'
import { akimboShotgunAmmunition, akimboShotgunBarrelExt, akimboShotgunGadget } from '../commonModifications/akimboShotgunModifications'

const akimboVd12: WeaponData = {
	name: 'Akimbo VD-12',
	image: 'x_sko12', // TODO image
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Akimbo Shotgun',
	firingMode: 'Selective firing',
	cost: 747600,
	stats: {
		magazine: 20,
		totalAmmo: 60,
		rateOfFire: 273,
		damage: 50,
		accuracy: 28,
		stability: 36,
		concealment: 15,
		threat: 28,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [4.2, 3.6],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: akimboShotgunAmmunition,
		barrel: [
			barrel['Long Barrel (VD-12)'],
			barrel['Short Barrel (VD-12)']
		],
		barrelExt: akimboShotgunBarrelExt,
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost']
		],
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		// TODO exclusive set
		foregrip: [
			foregrip['Front Mounting Rail']
		],
		gadget: akimboShotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip']
		]
	}
}

export default akimboVd12