import source from 'data/source/miscSources'

import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const tempest21: WeaponData = {
	name: 'Tempest-21',
	image: 'komodo',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 38,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 871e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 800,
		damage: 62,
		accuracy: 60,
		stability: 52,
		concealment: 26,
		threat: 12,
		reload: 3.35
	},
	extraStats: {
		tacticalReload: 2.35,
		equipDelays: [0.6, 0.65],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.02, 1.02],
		recoilVertical: [0.68, 1.02],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadgetMagnifier,
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight
	}
}

export default tempest21