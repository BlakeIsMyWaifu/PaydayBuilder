import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const broomstick: WeaponData = {
	name: 'Broomstick',
	image: 'c96',
	source: content['Gage Historical Pack'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 510e3,
	stats: {
		magazine: 10,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 80,
		stability: 60,
		concealment: 28,
		threat: 10,
		reload: 4.17
	},
	extraStats: {
		tacticalReload: 4.0,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 1.2,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Damper.L 44 Nozzle'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['High Capacity Mag']
		],
		sight: [
			sight['Pistol Red Dot Sight x1.5'],
			sight['Barrel Sight 44'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		],
		slide: [
			slide['Precision Barrel (Broomstick)']
		],
		stock: [
			stock['Holster Stock']
		]
	}
}

export default broomstick