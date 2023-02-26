import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadgetMagnifier, shotgunSight } from '../commonModifications/shotgunModifications'

const goliath12G: WeaponData = {
	name: 'Goliath 12G',
	image: 'rota',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Shotgun',
	firingMode: 'Double action',
	cost: 510e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 333,
		damage: 42,
		accuracy: 56,
		stability: 44,
		concealment: 13,
		threat: 28,
		reload: 2.55
	},
	extraStats: {
		tacticalReload: 2.55,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Short Barrel (Goliath)'],
			barrel['Silenced Barrel (Goliath)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadgetMagnifier,
		sight: shotgunSight
	}
}

export default goliath12G