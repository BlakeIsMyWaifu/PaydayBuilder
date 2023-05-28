import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoostConcealment, pistolGadget } from '../commonModifications/pistolModifications'

const bernetti9: WeaponData = {
	name: 'Bernetti 9',
	image: 'b92fs',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 134e3,
	stats: {
		magazine: 14,
		totalAmmo: 154,
		rateOfFire: 545,
		damage: 53,
		accuracy: 56,
		stability: 60,
		concealment: 30,
		threat: 6,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [3.85, 5.93],
		recoilHorizontal: [-0.75, 0.75],
		recoilVertical: [1.8, 2.7],
		spread: 2.64,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['The Competitor Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['The Professional Compensator'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoostConcealment,
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Bernetti 9)'],
			grip['Engraved Bernetti Grips']
		],
		lowerReceiver: [
			lowerReceiver['Custom Titanium Frame']
		],
		magazine: [
			magazine['Extended Magazine (Bernetti 9)']
		],
		sight: [
			sight['Marksman Sight x1.25'],
			sight['Pistol Red Dot Sight x1.5'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5']
		],
		upperReceiver: [
			upperReceiver['The Elite Slide']
		]
	}
}

export default bernetti9