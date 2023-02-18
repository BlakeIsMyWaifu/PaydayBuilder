import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import gadget from '../../modifications/gadget'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'

const northStar: WeaponData = {
	name: 'North Star',
	image: 'victor', // TODO image
	source: content['A Criminal Carol'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Sniper',
	firingMode: 'Semi-Automatic',
	cost: 773e3,
	stats: {
		magazine: 10,
		totalAmmo: 20,
		rateOfFire: 150,
		damage: 160,
		accuracy: 52,
		stability: 8,
		concealment: 16,
		threat: 26,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [0.9, 0.9],
		ammoPickup: [1.0, 1.5],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [7.0, 5.6],
		spread: 2.88,
		damageModifier: [1.0, 1.1]
	},
	modifications: {
		barrelExt: [
			barrelExt['Tiwaz Silencer']
		],
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost'],
			boost['Total Ammo (Main)']
		],
		// TODO exclusive set
		gadget: [
			gadget['Assault Light'],
			gadget['Tactical Laser Module'],
			gadget['Compact Laser Module'],
			gadget['Military Laser Module'],
			gadget['LED Combo'],
			gadget['Stealth Laser Module']
		],
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Titanium Skeleton Grip']
		],
		// TODO secondary sight
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
			sight['Reconnaissance Sight'],
			sight['Theia Magnified Scope'],
			sight['Box Buddy Sight'],
			sight['Iron Sights']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock']
		]
	}
}

export default northStar