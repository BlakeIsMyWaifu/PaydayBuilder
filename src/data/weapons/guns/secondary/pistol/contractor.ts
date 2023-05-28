import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const contractor: WeaponData = {
	name: 'Contractor',
	image: 'packrat',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 581e3,
	stats: {
		magazine: 15,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 60,
		concealment: 29,
		threat: 9,
		reload: 2.32
	},
	extraStats: {
		tacticalReload: 1.52,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Contractor Compensator'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Extended Magazine (Contractor)']
		],
		sight: [
			sight['Pistol Red Dot Sight x1.5'],
			sight['Tritium Sights'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		]
	}
}

export default contractor