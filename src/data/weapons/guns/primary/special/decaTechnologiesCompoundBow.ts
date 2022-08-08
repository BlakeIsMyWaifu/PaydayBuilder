import source from 'data/source/miscSources'

import ammunition from '../../modifications/ammunition'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import upperReceiver from '../../modifications/upperReceiver'
import { WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialSight } from '../commonModifications/specialModifications'

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
		boost: specialBoostTotalAmmo,
		grip: [
			grip['Wooden Grip (DECA)'],
			grip['Ergonomic Grip (DECA)']
		],
		sight: [
			...specialSight,
			sight['Compact Profile Sight'],
			sight['Maelstrom Sight'],
			sight['Advanced Combat Sight'],
			sight['Reconnaissance Sight']
		],
		upperReceiver: [
			upperReceiver['Tactical Frame']
		]
	}
}

export default decaTechnologiesCompoundBow