import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import underbarrel from '../../modifications/underbarrel'
import { WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ketchnovByk1: WeaponData = {
	name: 'KETCHNOV Byk-1',
	image: 'groza',
	source: content['Jiu Feng Smuggler Pack 2'],
	inventorySlot: 'primary',
	reputation: 12,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 261e3,
	stats: {
		magazine: 20,
		totalAmmo: 80,
		rateOfFire: 698,
		damage: 88,
		accuracy: 72,
		stability: 52,
		concealment: 8,
		threat: 12,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.16,
		equipDelays: [0.55, 0.55],
		ammoPickup: [2.4, 4.4],
		recoilHorizontal: [-1.02, 1.02],
		recoilVertical: [1.19, 1.53],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['K-B100 Suppressor']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		magazine: [
			magazine['K-B1 Speedmag']
		],
		sight: assaultRifleSight,
		underbarrel: [
			underbarrel['Frag Round'],
			underbarrel['Viper Grenade']
		]
	}
}

export default ketchnovByk1