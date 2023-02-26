import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const heather: WeaponData = {
	name: 'Heather',
	image: 'sr2',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 25,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 557e3,
	stats: {
		magazine: 32,
		totalAmmo: 160,
		rateOfFire: 750,
		damage: 58,
		accuracy: 52,
		stability: 68,
		concealment: 28,
		threat: 10,
		reload: 4.0
	},
	extraStats: {
		tacticalReload: 2.07,
		equipDelays: [0.5, 0.55],
		ammoPickup: [4.8, 8.8],
		recoilHorizontal: [-0.65, 0.65],
		recoilVertical: [-0.39, 0.78],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['Tishina Suppressor']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Speed Pull Magazine']
		],
		sight: submachineGunSight,
		stock: [
			stock['Unfolded Stock (Heather)']
		]
	}
}

export default heather