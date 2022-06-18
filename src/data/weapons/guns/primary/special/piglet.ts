import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import barrel from '../../modifications/barrel'
import gadget from '../../modifications/gadget'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { specialBoost, specialGadget, specialSight } from '../commonModifications/specialModifications'

const piglet: WeaponData = {
	name: 'Piglet',
	image: 'm32',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: 43,
	weaponType: 'Special',
	firingMode: 'Double action',
	cost: 920e3,
	stats: {
		magazine: 6,
		totalAmmo: 12,
		rateOfFire: 60,
		damage: 1300,
		accuracy: 96,
		stability: 96,
		concealment: 10,
		threat: 37,
		reload: 19.21
	},
	extraStats: {
		tacticalReload: [9.21, 2.0],
		equipDelays: [0.85, 0.85],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Incendiary Round']
		],
		barrel: [
			barrel['Short Barrel (Piglet)']
		],
		boost: specialBoost,
		gadget: [
			...specialGadget,
			gadget['Riktpunkt Magnifier Gadget'],
			gadget['Signature Magnifier Gadget']
		],
		sight: [
			...specialSight,
			sight['Compact Profile Sight'],
			sight['Maelstrom Sight'],
			sight['Advanced Combat Sight'],
			sight['Reconnaissance Sight']
		],
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['No Stock (Piglet)'],
			stock['Contractor Stock']
		]
	}
}

export default piglet