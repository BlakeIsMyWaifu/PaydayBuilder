import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const platypus70: WeaponData = {
	name: 'Platypus 70',
	image: 'model70',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 32,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 725e3,
	stats: {
		magazine: 5,
		totalAmmo: 30,
		rateOfFire: 60,
		damage: 480,
		accuracy: 92,
		stability: 12,
		concealment: 6,
		threat: 28,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.35,
		equipDelays: [0.75, 0.45],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.48,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrelExt: [
			barrelExt['Beak Suppressor']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight
	}
}

export default platypus70