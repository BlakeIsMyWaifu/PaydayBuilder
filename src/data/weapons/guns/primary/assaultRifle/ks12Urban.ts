import content from 'data/source/downloadableContent'

import extra from '../../modifications/extra'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ks12Urban: WeaponData = {
	name: 'KS12 Urban',
	image: 'shak12',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'primary',
	reputation: 40,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 736e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 500,
		damage: 115,
		accuracy: 44,
		stability: 28,
		concealment: 16,
		threat: 10,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-2.3, 2.3],
		recoilVertical: [1.38, 1.84],
		spread: 3.36,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		extra: [
			extra['KS12-S Carry Handle']
		],
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		upperReceiver: [
			upperReceiver['KS12 DMR kit']
		]
	}
}

export default ks12Urban