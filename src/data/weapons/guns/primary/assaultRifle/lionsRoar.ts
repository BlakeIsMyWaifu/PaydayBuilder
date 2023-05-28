import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const lionsRoar: WeaponData = {
	name: 'Lion\'s Roar',
	image: 'vhs',
	source: content['Dragan Character Pack'],
	inventorySlot: 'primary',
	reputation: 28,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 628e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 857,
		damage: 78,
		accuracy: 60,
		stability: 64,
		concealment: 17,
		threat: 12,
		reload: 3.65
	},
	extraStats: {
		tacticalReload: 2.46,
		equipDelays: [0.6, 0.6],
		ammoPickup: [5.4, 9.9],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['CQB Barrel (Lion\'s Roar)'],
			barrel['Precision Barrel'],
			barrel['Silenced Barrel (Lion\'s Roar)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
}

export default lionsRoar