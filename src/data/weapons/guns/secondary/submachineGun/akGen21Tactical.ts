import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const akGen21Tactical: WeaponData = {
	name: 'AK Gen 21 Tactical',
	image: 'vityaz',
	source: content['Jiu Feng Smuggler Pack'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 134e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 750,
		damage: 72,
		accuracy: 64,
		stability: 68,
		concealment: 23,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-0.65, 0.65],
		recoilVertical: [0.65, 0.91],
		spread: 2.16,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrel: [
			barrel['MG8 Precision Barrel'],
			barrel['BY90 Wide Suppressor']
		],
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
			barrelExt['PBS Suppressor'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Fyodor Muzzle Brake'],
			barrelExt['Federation Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		sight: submachineGunSight,
		stock: [
			stock['Bull Stock']
		]
	}
}

export default akGen21Tactical