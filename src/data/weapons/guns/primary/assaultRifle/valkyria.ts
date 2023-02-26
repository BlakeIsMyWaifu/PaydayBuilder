import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const valkyria: WeaponData = {
	name: 'Valkyria',
	image: 'asval',
	source: content['Sokol Character Pack'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 30,
		totalAmmo: 220,
		rateOfFire: 896,
		damage: 50,
		accuracy: 56,
		stability: 64,
		concealment: 26,
		threat: 0,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 2.6,
		equipDelays: [0.5, 0.5],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 2.64,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Prototype Barrel (Valkyria)']
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		sight: assaultRifleSight,
		stock: [
			stock['Solid Stock (Valkyria)']
		]
	}
}

export default valkyria