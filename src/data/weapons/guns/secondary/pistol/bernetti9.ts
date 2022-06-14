import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

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
			...pistolBarrelExt,
			barrelExt['The Competitor Compensator'],
			barrelExt['The Professional Compensator']
		],
		boost: [
			...pistolBoost,
			boost['Concealment (Extra)']
		],
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Bernetti 9)'],
			grip['Engraved Bernetti Grips']
		],
		magazine: [
			magazine['Extended Mag. (Bernetti 9)']
		],
		sight: [
			sight['Marksman Sight'],
			...pistolSight
		],
		lowerReceiver: [
			lowerReceiver['Custom Titanium Frame']
		],
		upperReceiver: [
			upperReceiver['The Elite Slide']
		]
	}
}

export default bernetti9