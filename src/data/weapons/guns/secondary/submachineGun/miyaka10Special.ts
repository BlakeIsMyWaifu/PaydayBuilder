import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget } from '../commonModifications/submachineGunModifications'

const miyaka10Special: WeaponData = {
	name: 'Miyaka 10 Special',
	image: 'pm9',
	source: content['Jiu Feng Smuggler Pack 2'],
	inventorySlot: 'secondary',
	reputation: 17,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 372e3,
	stats: {
		magazine: 25,
		totalAmmo: 175,
		rateOfFire: 1100,
		damage: 60,
		accuracy: 28,
		stability: 56,
		concealment: 26,
		threat: 10,
		reload: 2.6
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.5, 0.7],
		ammoPickup: [5.25, 9.63],
		recoilHorizontal: [-1.92, 1.92],
		recoilVertical: [-0.16, 0.96],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			barrel['MS10 Short Barrel']
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['The Bigger The Better Suppressor']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		grip: [
			grip['MS10 Comfort Wood Grip']
		],
		magazine: [
			magazine['MS10 Speedmag']
		],
		sight: [
			sight['The Professional\'s Choice Sight'],
			sight['Surgeon Sight'],
			sight['Compact Holosight'],
			sight['Speculator Sight'],
			sight['Compact Profile Sight']
		],
		stock: [
			stock['MS10 Tactical Stock']
		]
	}
}

export default miyaka10Special