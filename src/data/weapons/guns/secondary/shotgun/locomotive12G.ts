import source from 'data/source/miscSources'

import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const locomotive12G: WeaponData = {
	name: 'Locomotive 12G',
	image: 'serbu',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 13,
	weaponType: 'Shotgun',
	firingMode: 'Pump action',
	cost: 283e3,
	stats: {
		magazine: 6,
		totalAmmo: 42,
		rateOfFire: 160,
		damage: 90,
		accuracy: 48,
		stability: 36,
		concealment: 23,
		threat: 28,
		reload: 5.0
	},
	extraStats: {
		tacticalReload: [1.77, 0.57],
		equipDelays: [0.6, 0.7],
		ammoPickup: [0.42, 1.47],
		recoilHorizontal: [-0.42, 0.42],
		recoilVertical: [3.99, 4.2],
		spread: 3.12,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		magazine: [
			magazine['Extended Mag. (Locomotive)']
		],
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Standard Stock (Locomotive)'],
			stock['Police Shorty Stock'],
			stock['Tactical Stock (Main)'],
			stock['Tactical Shorty Stock'],
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

export default locomotive12G