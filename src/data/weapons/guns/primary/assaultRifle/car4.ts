import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const car4: WeaponData = {
	name: 'CAR-4',
	image: 'new_m4',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 4,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 95e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 600,
		damage: 62,
		accuracy: 44,
		stability: 60,
		concealment: 20,
		threat: 14,
		reload: 3.34
	},
	extraStats: {
		tacticalReload: 2.67,
		equipDelays: [0.6, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 3.36,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (CAR)'],
			barrel['Short Barrel (CAR)'],
			barrel['Stealth Barrel'],
			barrel['DMR Kit (CAR)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Aftermarket Special Handguard'],
			foregrip['Competition Foregrip'],
			foregrip['Gazelle Rail'],
			foregrip['OVAL Foregrip'],
			foregrip['E.M.O. Foregrip']
		],
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		lowerReceiver: [
			lowerReceiver['THRUST Lower Receiver']
		],
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		],
		upperReceiver: [
			upperReceiver['Exotique Receiver'],
			upperReceiver['LW Upper Receiver'],
			upperReceiver['THRUST Upper Receiver']
		]
	}
}

export default car4