import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import extra from '../../modifications/extra'
import gadget from '../../modifications/gadget'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { pistolBoost } from '../commonModifications/pistolModifications'

const bronco44: WeaponData = {
	name: 'Bronco .44',
	image: 'new_raging_bull',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 6,
	weaponType: 'Pistol',
	firingMode: 'Double action',
	cost: 134e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 400,
		damage: 175,
		accuracy: 76,
		stability: 4,
		concealment: 26,
		threat: 24,
		reload: 2.25
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.45, 0.5],
		ammoPickup: [1.35, 1.89],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [3.48, 5.22],
		spread: 1.44,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrelExt: [
			barrelExt['Flash Hider']
		],
		boost: [
			...pistolBoost,
			boost['Concealment (Extra)']
		],
		extra: [
			extra['Bronco Scope Mount']
		],
		gadget: [
			gadget['Riktpunkt Magnifier Gadget'],
			gadget['Signature Magnifier Gadget']
		],
		grip: [
			grip['Ergo Wooden Grip']
		],
		sight: [
			sight['The Professional\'s Choice Sight'],
			sight['Surgeon Sight'],
			sight['See More Sight'],
			sight['Combat Sight'],
			sight['Speculator Sight'],
			sight['Trigonom Sight'],
			sight['Holographic Sight'],
			sight['Compact Holosight'],
			sight['Solar Sight'],
			sight['Military Red Dot Sight (1)'],
			sight['Military Red Dot Sight (2)'],
			sight['Milspec Scope'],
			sight['Acough Optic Scope'],
			sight['Compact Profile Sight'],
			sight['Maelstrom Sight'],
			sight['Advanced Combat Sight'],
			sight['Reconnaissance Sight']
		],
		slide: [
			slide['Aggressor Barrel'],
			slide['Pocket Surprise Barrel'],
			slide['Ventilated Barrel'],
			slide['Overcompensating Barrel']
		],
		upperReceiver: [
			upperReceiver['Slimline Body']
		]
	}
}

export default bronco44