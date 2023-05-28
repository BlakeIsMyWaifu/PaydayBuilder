import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const contractor308: WeaponData = {
	name: 'Contractor .308',
	image: 'tti',
	source: content['John Wick Heists'],
	inventorySlot: 'primary',
	reputation: 34,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 773e3,
	stats: {
		magazine: 20,
		totalAmmo: 40,
		rateOfFire: 150,
		damage: 160,
		accuracy: 60,
		stability: 4,
		concealment: 16,
		threat: 12,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.3,
		equipDelays: [0.9, 0.9],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-0.87, 0.87],
		recoilVertical: [4.35, 5.8],
		spread: 2.4,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrelExt: [
			barrelExt['Contractor Silencer']
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: sniperSecondarySight,
		sight: sniperSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
}

export default contractor308