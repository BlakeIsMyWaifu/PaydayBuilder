import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const deagle: WeaponData = {
	name: 'Deagle',
	image: 'deagle',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 36,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 822e3,
	stats: {
		magazine: 10,
		totalAmmo: 60,
		rateOfFire: 400,
		damage: 120,
		accuracy: 76,
		stability: 28,
		concealment: 28,
		threat: 24,
		reload: 3.1
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [2.76, 4.14],
		spread: 1.44,
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
			barrelExt['La Femme Compensator'],
			barrelExt['OVERKILL Compensator'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		extra: [
			extra['Deagle Scope Mount']
		],
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Deagle)'],
			grip['Bling Grip (Deagle)']
		],
		magazine: [
			magazine['Extended Magazine (Deagle)']
		],
		secondarySight: [
			secondarySight['Riktpunkt Magnifier Gadget x6.25'],
			secondarySight['Signature Magnifier Gadget x6.25']
		],
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Marksman Sight x1.25'],
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
			sight['Pistol Red Dot Sight x1.5'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Riktpunkt Holosight x1.5'],
			sight['SKOLD Micro Reflex Sight x1.5'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		slide: [
			slide['Long Barrel'],
			slide['Custom Milled Barrel']
		]
	}
}

export default deagle