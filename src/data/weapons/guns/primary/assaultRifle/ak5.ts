import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak5: WeaponData = {
	name: 'AK5',
	image: 'ak5',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 749e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 706,
		damage: 66,
		accuracy: 60,
		stability: 60,
		concealment: 18,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['CQB Barrel (AK5)']
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['KS12-A Burst Muzzle'],
			barrelExt['KS12-S Long Silencer'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Karbin Ceres Handguard'],
			foregrip['Belgian Heat Handguard']
		],
		gadget: assaultRifleGadget,
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			stock['Bertil Stock'],
			stock['Caesar Stock']
		]
	}
}

export default ak5