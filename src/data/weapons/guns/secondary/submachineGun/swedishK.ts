import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const swedishK: WeaponData = {
	name: 'Swedish K',
	image: 'm45',
	source: content['Armored Transport'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Submachine Gun',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: {
		magazine: 40,
		totalAmmo: 80,
		rateOfFire: 600,
		damage: 99,
		accuracy: 68,
		stability: 44,
		concealment: 24,
		threat: 10,
		reload: 3.9
	},
	extraStats: {
		tacticalReload: 2.85,
		equipDelays: [0.6, 0.5],
		ammoPickup: [0.8, 2.8],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [-2.28, 2.28],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Grease Barrel'],
			barrel['Swedish Barrel']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		gadget: submachineGunGadget,
		grip: [
			grip['Ergo Grip (Swedish)'],
			grip['Bling Grip (Swedish)']
		],
		magazine: [
			magazine['Extended Magazine (Swedish)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Folded Stock (Swedish)']
		],
		upperReceiver: [
			upperReceiver['Swedish Body']
		]
	}
}

export default swedishK