import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const lebensauger308: WeaponData = {
	name: 'Lebensauger .308',
	image: 'wa2000',
	source: content['Gage Ninja Pack'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 749e3,
	stats: {
		magazine: 15,
		totalAmmo: 60,
		rateOfFire: 150,
		damage: 160,
		accuracy: 92,
		stability: 20,
		concealment: 16,
		threat: 12,
		reload: 4.13
	},
	extraStats: {
		tacticalReload: 3.09,
		equipDelays: [0.9, 0.9],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-0.5, 0.5],
		recoilVertical: [5.0, 6.25],
		spread: 0.48,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrel: [
			barrel['Langer Barrel'],
			barrel['Gedämpfter Barrel']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		grip: [
			grip['Leichter Grip'],
			grip['Subtiler Grip'],
			grip['Walnuss Grip']
		],
		sight: sniperSight
	}
}

export default lebensauger308