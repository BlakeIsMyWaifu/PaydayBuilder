import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadgetSmall } from '../commonModifications/submachineGunModifications'

const microUzi: WeaponData = {
	name: 'Micro Uzi',
	image: 'baka',
	source: content['Yakuza Character Pack'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 32,
		totalAmmo: 224,
		rateOfFire: 1200,
		damage: 44,
		accuracy: 28,
		stability: 76,
		concealment: 29,
		threat: 10,
		reload: 2.6
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.5, 0.7],
		ammoPickup: [6.72, 12.32],
		recoilHorizontal: [-1.32, 1.32],
		recoilVertical: [-0.11, 0.66],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrel: [
			barrel['Custom Barrel']
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
			barrelExt['Ported Compensator'],
			barrelExt['Futomaki Suppressor'],
			barrelExt['Maki Suppressor'],
			barrelExt['Spring Suppressor'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadgetSmall,
		stock: [
			stock['No Stock (Micro Uzi)'],
			stock['Unfolded Stock (Micro Uzi)']
		]
	}
}

export default microUzi