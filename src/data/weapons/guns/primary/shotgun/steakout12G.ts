import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const steakout12G: WeaponData = {
	name: 'Steakout 12G',
	image: 'aa12',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: -1,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 8,
		totalAmmo: 72,
		rateOfFire: 300,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 9,
		threat: 28,
		reload: 4.1
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.55, 0.55],
		ammoPickup: [3.6, 5.4],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Long Barrel (Steakout)'],
			barrel['Suppressed Barrel (Steakout)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: shotgunCustom,
		gadget: shotgunGadget,
		magazine: [
			magazine['Drum Mag']
		],
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
}

export default steakout12G