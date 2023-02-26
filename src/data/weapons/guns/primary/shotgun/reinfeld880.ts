import source from 'data/source/miscSources'

import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const reinfeld880: WeaponData = {
	name: 'Reinfeld 880',
	image: 'r870',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 8,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 175e3,
	stats: {
		magazine: 6,
		totalAmmo: 42,
		rateOfFire: 104,
		damage: 90,
		accuracy: 40,
		stability: 32,
		concealment: 11,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.44, 0.44],
		recoilVertical: [4.18, 4.4],
		spread: 3.6,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		foregrip: [
			foregrip['Zombie Hunter Pump']
		],
		gadget: shotgunGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		magazine: [
			magazine['Extended Mag. (Reinfeld 880)']
		],
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Short Enough Stock'],
			stock['Tactical Stock (Main)'],
			stock['Short Enough Tactical Stock'],
			stock['Government Issue Tactical Stock'],
			stock['Muldon Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		],
		upperReceiver: [
			upperReceiver['Shell Rack']
		]
	}
}

export default reinfeld880