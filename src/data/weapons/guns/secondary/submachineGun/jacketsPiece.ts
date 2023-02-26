import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const jacketsPiece: WeaponData = {
	name: 'Jacket\'s Piece',
	image: 'cobray',
	source: content['Jacket Character Pack'],
	inventorySlot: 'secondary',
	reputation: 12,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 261e3,
	stats: {
		magazine: 32,
		totalAmmo: 160,
		rateOfFire: 1200,
		damage: 57,
		accuracy: 52,
		stability: 68,
		concealment: 25,
		threat: 10,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.5, 0.55],
		ammoPickup: [4.8, 8.8],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [-0.78, 1.56],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Werbell\'s Suppressor'],
			barrelExt['Slotted Barrel Extension']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		sight: submachineGunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		],
		upperReceiver: [
			upperReceiver['80\'s Calling']
		]
	}
}

export default jacketsPiece