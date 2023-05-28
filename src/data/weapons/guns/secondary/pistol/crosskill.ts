import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const crosskill: WeaponData = {
	name: 'Crosskill',
	image: 'colt_1911',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 58e3,
	stats: {
		magazine: 10,
		totalAmmo: 90,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.25, 3.15],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
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
			barrelExt['Aggressor Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Punisher Compensator'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Crosskill)'],
			grip['Bling Grip (Crosskill)'],
			grip['Engraved Crosskill Grips']
		],
		magazine: [
			magazine['12rnd Mag.'],
			magazine['Magazine with Ameritude!']
		],
		sight: [
			sight['Marksman Sight x1.25'],
			sight['Pistol Red Dot Sight x1.5'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		],
		slide: [
			slide['Vented Slide'],
			slide['Long Vented Slide']
		]
	}
}

export default crosskill