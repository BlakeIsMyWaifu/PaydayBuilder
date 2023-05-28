import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import chargingHandle from '../../modifications/chargingHandle'
import extra from '../../modifications/extra'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import secondarySight from '../../modifications/secondarySight'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExtPlus, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak762: WeaponData = {
	name: 'AK.762',
	image: 'akm',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 16,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 349e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 561,
		damage: 97,
		accuracy: 60,
		stability: 44,
		concealment: 13,
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
		barrelExt: assaultRifleBarrelExtPlus,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		chargingHandle: [
			chargingHandle['Taktika Charging Handle']
		],
		extra: [
			extra['Scope Mount (AK)']
		],
		foregrip: [
			foregrip['Railed Wooden Grip'],
			foregrip['The Tactical Russian Handguard'],
			foregrip['Battleproven Handguard'],
			foregrip['Lightweight Rail'],
			foregrip['Crabs Rail'],
			foregrip['Keymod Rail'],
			foregrip['Taktika Handguard Kit']
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		magazine: [
			magazine['AK Quadstacked Mag'],
			magazine['Low Drag Magazine'],
			magazine['Speed Pull Magazine']
		],
		secondarySight: [
			secondarySight['Riktpunkt 45 degree Sight'],
			secondarySight['45 degree red-dot sight'],
			secondarySight['45 Degree Ironsights']
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
			stock['Contractor Stock'],
			stock['Taktika Telescopic Stock'],
			stock['VD-12 Stock']
		],
		upperReceiver: [
			upperReceiver['Taktika Railed Cover']
		]
	}
}

export default ak762