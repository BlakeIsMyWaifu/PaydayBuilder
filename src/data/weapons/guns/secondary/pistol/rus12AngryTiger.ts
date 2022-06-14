import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import { WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget } from '../commonModifications/pistolModifications'

const rus12AngryTiger: WeaponData = {
	name: 'RUS-12 Angry Tiger',
	image: 'rsh12',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 581e3,
	stats: {
		magazine: 5,
		totalAmmo: 20,
		rateOfFire: 400,
		damage: 210,
		accuracy: 52,
		stability: 20,
		concealment: 25,
		threat: 28,
		reload: 2.25
	},
	extraStats: {
		tacticalReload: 2.25,
		equipDelays: [0.45, 0.5],
		ammoPickup: [0.75, 0.25],
		recoilHorizontal: [-1.25, 1.25],
		recoilVertical: [7.25, 7.5],
		spread: 2.88,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['RUS-J Long Valley Barrel and Stabilizer'],
			barrel['RUS-K Tactical Short Barrel']
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Flash Hider'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['RUS Custom Wood Grip']
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
		]
	}
}

export default rus12AngryTiger