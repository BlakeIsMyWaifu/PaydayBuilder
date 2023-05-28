import source from 'data/source/miscSources'

import ammunition from '../../modifications/ammunition'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const decaTechnologiesCompoundBow: WeaponData = {
	name: 'DECA Technologies Compound Bow',
	image: 'elastic',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Special',
	firingMode: 'Single Shot',
	cost: 749e3,
	stats: {
		magazine: 1,
		totalAmmo: 30,
		rateOfFire: 300,
		damage: 2000,
		accuracy: 96,
		stability: 96,
		concealment: 27,
		threat: 37,
		reload: 1.3
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.85, 0.85],
		ammoPickup: null,
		recoilHorizontal: [-0.12, 0.12],
		recoilVertical: [1.08, 1.2],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Explosive Arrow (DECA)'],
			ammunition['Poison Arrow (DECA)']
		],
		boost: specialBoost,
		grip: [
			grip['Wooden Grip (DECA)'],
			grip['Ergonomic Grip (DECA)']
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
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		upperReceiver: [
			upperReceiver['Tactical Frame']
		]
	}
}

export default decaTechnologiesCompoundBow