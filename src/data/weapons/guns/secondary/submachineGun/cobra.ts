import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadgetSmall, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cobra: WeaponData = {
	name: 'Cobra',
	image: 'scorpion',
	source: content['Hotline Miami'],
	inventorySlot: 'secondary',
	reputation: 18,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 395e3,
	stats: {
		magazine: 20,
		totalAmmo: 220,
		rateOfFire: 1000,
		damage: 44,
		accuracy: 28,
		stability: 68,
		concealment: 28,
		threat: 6,
		reload: 2.75
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.7],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt.Suppressor,
			barrelExt['Ported Compensator'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadgetSmall,
		grip: [
			grip['Ergo Grip (Cobra)'],
			grip['Wooden Grip (Cobra)']
		],
		magazine: [
			magazine['Extended Magazine (Cobra)']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			stock['No Stock (Cobra)'],
			stock['Unfolded Stock (Cobra)']
		]
	}
}

export default cobra