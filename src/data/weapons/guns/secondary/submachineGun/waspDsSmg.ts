import content from 'data/source/downloadableContent'

import extra from '../../modifications/extra'
import gadget from '../../modifications/gadget'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost } from '../commonModifications/submachineGunModifications'

const waspDsSmg: WeaponData = {
	name: 'Wasp-DS SMG',
	image: 'fmg9',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 15,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 261600,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 1333,
		damage: 40,
		accuracy: 64,
		stability: 36,
		concealment: 29,
		threat: 22,
		reload: 2.48
	},
	extraStats: {
		tacticalReload: 1.51,
		equipDelays: [0.5, 1.8],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [-1.68, 3.78],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		extra: [
			extra['Rake Ultra Grip']
		],
		gadget: [
			gadget['Tactical Pistol Light'],
			gadget['Pocket Laser']
		],
		magazine: [
			magazine['Celerity X9 Magazine']
		],
		stock: [
			stock['Bounce Slate RX Stock']
		]
	}
}

export default waspDsSmg