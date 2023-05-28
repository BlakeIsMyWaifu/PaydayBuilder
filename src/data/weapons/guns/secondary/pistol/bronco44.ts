import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import grip from '../../modifications/grip'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoostConcealment } from '../commonModifications/pistolModifications'

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
			barrelExt['Flash Hider'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoostConcealment,
		extra: [
			extra['Bronco Scope Mount']
		],
		grip: [
			grip['Ergo Wooden Grip']
		],
		secondarySight: [
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['Signature Magnifier Gadget x6.25']
		],
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
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