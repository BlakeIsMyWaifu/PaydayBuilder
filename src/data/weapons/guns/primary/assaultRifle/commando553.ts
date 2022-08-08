import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const commando553: WeaponData = {
	name: 'Commando 553',
	image: 's552',
	source: content['Armored Transport'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 714,
		damage: 52,
		accuracy: 36,
		stability: 56,
		concealment: 22,
		threat: 12,
		reload: 2.4
	},
	extraStats: {
		tacticalReload: 1.65,
		equipDelays: [0.7, 0.55],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.6, 1.6],
		recoilVertical: [0.96, 1.28],
		spread: 3.84,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Commando)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Enhanced Foregrip'],
			foregrip['Railed Foregrip (Commando)']
		],
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Enhanced Grip']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Enhanced Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		],
		upperReceiver: [
			upperReceiver['Heat Treated Body']
		]
	}
}

export default commando553