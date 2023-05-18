import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunSight } from '../commonModifications/shotgunModifications'
import { shotgunBarrelExt } from '../commonModifications/shotgunModifications'
import { shotgunBoost } from '../commonModifications/shotgunModifications'
import { shotgunGadget } from '../commonModifications/shotgunModifications'

const Deimos: WeaponData = {
	name: 'Deimos',
	image: 'supernova', // TODO image
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 5,
		totalAmmo: 25,
		rateOfFire: 100,
		damage: 134,
		accuracy: 40,
		stability: 32,
		concealment: 13,
		threat: 28,
		reload: 6.73
	},
	extraStats: {
		tacticalReload: [3.57, 0.6],
		equipDelays: [0.85, 0.85],
		ammoPickup: [1.25, 1.88],
		recoilHorizontal: [-0.22, 0.22],
		recoilVertical: [4.62, 4.84],
		spread: 3.6,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Metus Barrel'],
			barrel['Formido Barrel']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		// exclusive set
		gadget: shotgunGadget,
		grip: [
			grip['Advanced Phobos Grip'],
			grip['Phobos Grip'],
			grip['Compact Phobos Grip']
		],
		magazine: [
			magazine['Eris Magazine Extender']
		],
		// secondary sight
		sight: shotgunSight,
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Collapsed Ares Stock'],
			stock['Ares Stock'],
			stock['Ursa Minor Stock']
		],
		upperReceiver: [
			upperReceiver['Leonidas Shell Rack']
		]
	}
}

export default Deimos