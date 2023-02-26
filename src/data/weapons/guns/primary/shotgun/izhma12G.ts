import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import extra from '../../modifications/extra'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSight } from '../commonModifications/shotgunModifications'

const izhma12G: WeaponData = {
	name: 'IZHMA 12G',
	image: 'saiga',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 26,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 581e3,
	stats: {
		magazine: 7,
		totalAmmo: 70,
		rateOfFire: 333,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 13,
		threat: 28,
		reload: 3.95
	},
	extraStats: {
		tacticalReload: 2.65,
		equipDelays: [0.6, 0.6],
		ammoPickup: [3.5, 5.25],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Short Barrel (IZHMA)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: shotgunCustom,
		extra: [
			extra['Scope Mount (AK)']
		],
		foregrip: [
			foregrip['The Tactical Russian Rail'],
			foregrip['Hollow Handle']
		],
		gadget: shotgunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip']
		],
		magazine: [
			magazine['Big Brother Magazine']
		],
		sight: shotgunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Skeletal Stock (Main)'],
			stock['Wooden Sniper Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['Classic Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default izhma12G