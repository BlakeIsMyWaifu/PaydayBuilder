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

const amr16: WeaponData = {
	name: 'AMR-16',
	image: 'm16',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 39,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 896e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 857,
		damage: 94,
		accuracy: 56,
		stability: 32,
		concealment: 17,
		threat: 14,
		reload: 3.73
	},
	extraStats: {
		tacticalReload: 2.75,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-1.32, 1.32],
		recoilVertical: [0.88, 1.32],
		spread: 2.64,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (CAR)'],
			barrel['DMR Kit (CAR)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Tactical Handguard'],
			foregrip['Blast From The Past Handguard'],
			foregrip['Long Ergo Foregrip']
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
			magazine['Milspec Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
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

export default amr16