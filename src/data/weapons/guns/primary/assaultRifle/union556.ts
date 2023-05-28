import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const union556: WeaponData = {
	name: 'Union 5.56',
	image: 'corgi',
	source: source['Reservoir Dogs'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 857,
		damage: 59,
		accuracy: 68,
		stability: 68,
		concealment: 20,
		threat: 12,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (Union)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		lowerReceiver: [
			lowerReceiver['Dunes Tactical Receiver']
		],
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
}

export default union556