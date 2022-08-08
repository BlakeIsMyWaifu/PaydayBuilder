import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import verticalGrip from '../../modifications/verticalGrip'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const jackal: WeaponData = {
	name: 'Jackal',
	image: 'schakal',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 20,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 441e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 652,
		damage: 99,
		accuracy: 60,
		stability: 52,
		concealment: 24,
		threat: 10,
		reload: 3.62
	},
	extraStats: {
		tacticalReload: 2.36,
		equipDelays: [0.5, 0.6],
		ammoPickup: [0.9, 3.15],
		recoilHorizontal: [-1.7, 1.7],
		recoilVertical: [-0.34, 0.68],
		spread: 2.4,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['Civilian Barrel']
		],
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Silentgear Silencer']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Magazine (Jackal)'],
			magazine['Short Magazine (Jackal)']
		],
		sight: submachineGunSight,
		stock: [
			stock['Civilian Stock'],
			stock['Folded Stock (Jackal)']
		],
		verticalGrip: [
			verticalGrip['Twinkle Grip']
		]
	}
}

export default jackal