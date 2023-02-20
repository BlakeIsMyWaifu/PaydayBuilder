import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'

const aranG2: WeaponData = {
	name: 'Aran G2',
	image: 'contender',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'secondary',
	reputation: 28,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 1,
		totalAmmo: 10,
		rateOfFire: 35,
		damage: 480,
		accuracy: 64,
		stability: 4,
		concealment: 20,
		threat: 10,
		reload: 2.78
	},
	extraStats: {
		tacticalReload: null,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.55, 0.65],
		recoilHorizontal: [-1.45, 1.45],
		recoilVertical: [8.41, 8.7],
		spread: 2.16,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			barrel['Long Barrel (Aran G2)'],
			barrel['Short Barrel (Aran G2)']
		],
		barrelExt: [
			barrelExt['Phantom Suppressor']
		],
		boost: [
			boost.Concealment,
			boost.Stability,
			boost.Accuracy,
			boost['Team Boost'],
			boost['Total Ammo (Main)']
		],
		// TODO exclusive set
		foregrip: [
			foregrip['Kanden Foregrip']
		],
		grip: [
			grip['Bounty Grip']
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
			sight['Reconnaissance Sight'],
			sight['Theia Magnified Scope'],
			sight['Box Buddy Sight'],
			sight['Iron Sights']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Bounty Stock']
		]
	}
}

export default aranG2