import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const thanatos50Cal: WeaponData = {
	name: 'Thanatos .50 cal',
	image: 'm95',
	source: content['Gage Sniper Pack'],
	inventorySlot: 'primary',
	reputation: 65,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 15,
		rateOfFire: 40,
		damage: 3500,
		accuracy: 92,
		stability: 4,
		concealment: 1,
		threat: 37,
		reload: 5.23
	},
	extraStats: {
		tacticalReload: 3.96,
		equipDelays: [0.9, 0.9],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [8.7, 11.02],
		spread: 0.48,
		damageModifier: [1.0, 1.3]
	},
	modifications: {
		barrel: [
			barrel['Tank Buster Barrel'],
			barrel['CQB Barrel (Thanatos)'],
			barrel['Suppressed Barrel (Thanatos)']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip']
		],
		sight: sniperSight
	}
}

export default thanatos50Cal