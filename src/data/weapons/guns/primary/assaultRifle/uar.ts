import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import extra from '../../modifications/extra'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const uar: WeaponData = {
	name: 'UAR',
	image: 'aug',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 8,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 176e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 750,
		damage: 65,
		accuracy: 64,
		stability: 40,
		concealment: 20,
		threat: 14,
		reload: 3.3
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-2.0, 2.0],
		recoilVertical: [1.2, 1.6],
		spread: 2.16,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (UAR)'],
			barrel['Long Barrel (UAR)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		extra: [
			extra['A3 Tactical Foregrip']
		],
		gadget: assaultRifleGadget,
		lowerReceiver: [
			lowerReceiver['Raptor Polymer Body']
		],
		magazine: [
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
}

export default uar