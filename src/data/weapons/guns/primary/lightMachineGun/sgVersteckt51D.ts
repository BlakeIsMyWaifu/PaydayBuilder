import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import custom from '../../modifications/custom'
import foregrip from '../../modifications/foregrip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const sgVersteckt51D: WeaponData = {
	name: 'SG Versteckt 51D',
	image: 'hk51b',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 38,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 696800,
	stats: {
		magazine: 60,
		totalAmmo: 180,
		rateOfFire: 667,
		damage: 110,
		accuracy: 48,
		stability: 28,
		concealment: 19,
		threat: 37,
		reload: 3.65
	},
	extraStats: {
		tacticalReload: 3.1,
		equipDelays: [0.55, 0.6],
		ammoPickup: [4.5, 6.3],
		recoilHorizontal: [-2.3, 1.38],
		recoilVertical: [2.3, 1.84],
		spread: 3.6,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Kalt Barrel']
		],
		barrelExt: [
			...lightMachineGunBarrelExt,
			barrelExt['Marmon Compensator']
		],
		boost: lightMachineGunBoost,
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		foregrip: [
			foregrip['Schatten Foregrip']
		],
		gadget: lightMachineGunGadget,
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
		stock: [
			stock['Zittern Stock']
		]
	}
}

export default sgVersteckt51D