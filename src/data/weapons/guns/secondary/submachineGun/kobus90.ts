import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const kobus90: WeaponData = {
	name: 'Kobus 90',
	image: 'p90',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 36,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 822e3,
	stats: {
		magazine: 50,
		totalAmmo: 150,
		rateOfFire: 909,
		damage: 56,
		accuracy: 52,
		stability: 60,
		concealment: 25,
		threat: 12,
		reload: 3.4
	},
	extraStats: {
		tacticalReload: 2.55,
		equipDelays: [0.65, 0.68],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Kobus)'],
			barrel['Civilian Market Barrel'],
			barrel['Mall Ninja Barrel']
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		lowerReceiver: [
			lowerReceiver['Custom Assault Frame']
		],
		magazine: [
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight
	}
}

export default kobus90