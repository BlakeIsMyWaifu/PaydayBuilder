import source from 'data/source/miscSources'

import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const compact5: WeaponData = {
	name: 'Compact-5',
	image: 'new_mp5',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 13,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 283e3,
	stats: {
		magazine: 30,
		totalAmmo: 210,
		rateOfFire: 750,
		damage: 44,
		accuracy: 44,
		stability: 80,
		concealment: 24,
		threat: 6,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 2.4,
		equipDelays: [0.6, 0.6],
		ammoPickup: [6.3, 11.55],
		recoilHorizontal: [-1.0, 1.0],
		recoilVertical: [0.6, 0.8],
		spread: 3.36,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		foregrip: [
			foregrip['Sehr Kurze Barrel'],
			foregrip['Polizei Tactical Barrel'],
			foregrip['The Ninja Barrel'],
			foregrip['Enlightened Foregrip']
		],
		gadget: submachineGunGadget,
		magazine: [
			magazine['Straight Magazine']
		],
		sight: submachineGunSight,
		stock: [
			stock['Adjustable Stock'],
			stock['Bare Essentials Stock'],
			stock['Spartan Stock']
		]
	}
}

export default compact5