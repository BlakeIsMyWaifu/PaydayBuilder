import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import extra from '../../modifications/extra'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const goldenAk762: WeaponData = {
	name: 'Golden AK.762',
	image: 'akm_gold',
	source: source.Community,
	inventorySlot: 'primary',
	reputation: 17,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 372e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 561,
		damage: 97,
		accuracy: 60,
		stability: 44,
		concealment: 11,
		threat: 22,
		reload: 3.87
	},
	extraStats: {
		tacticalReload: 2.8,
		equipDelays: [0.5, 0.5],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['AK Slavic Dragon Barrel'],
			barrel['Modern Barrel'],
			barrel['DMR Kit (AK)']
		],
		barrelExt: assaultRifleBarrelExt,
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
		gadget: assaultRifleGadget,
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

export default goldenAk762