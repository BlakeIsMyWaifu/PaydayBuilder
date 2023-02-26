import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadgetMagnifier, sniperSight } from '../commonModifications/sniperModifications'

const desertfox: WeaponData = {
	name: 'Desertfox',
	image: 'desertfox',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 34,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 773e3,
	stats: {
		magazine: 5,
		totalAmmo: 30,
		rateOfFire: 60,
		damage: 480,
		accuracy: 76,
		stability: 12,
		concealment: 19,
		threat: 28,
		reload: 3.86
	},
	extraStats: {
		tacticalReload: 2.72,
		equipDelays: [0.75, 0.45],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 1.44,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Desertfox)'],
			barrel['Silenced Barrel (Desertfox)']
		],
		boost: sniperBoost,
		gadget: sniperGadgetMagnifier,
		sight: sniperSight
	}
}

export default desertfox