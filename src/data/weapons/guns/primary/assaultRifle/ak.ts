import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak: WeaponData = {
	name: 'AK',
	image: 'ak74',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 1,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 652,
		damage: 63,
		accuracy: 48,
		stability: 60,
		concealment: 16,
		threat: 14,
		reload: 3.87
	},
	extraStats: {
		tacticalReload: 2.8,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 3.12,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['AK Slavic Dragon Barrel'],
			barrel['Modern Barrel'],
			barrel['DMR Kit (AK)']
		],
		barrelExt: [
			...assaultRifleBarrelExt,
			barrelExt['PBS Suppressor']
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		extra: [
			extra['Scope Mount (AK)']
		],
		foregrip: [
			foregrip['Railed Wooden Grip'],
			foregrip['The Tactical Russian Handguard'],
			foregrip['Battleproven Handguard'],
			foregrip['Lightweight Rail'],
			foregrip['Crabs Rail'],
			foregrip['Keymod Rail']
		],
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		magazine: [
			magazine['AK Quadstacked Mag'],
			magazine['Low Drag Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wooden Sniper Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default ak