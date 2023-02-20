import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const akronHC: WeaponData = {
	name: 'Akron HC',
	image: 'hcar',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'primary',
	reputation: 48,
	weaponType: 'LMG',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 20,
		totalAmmo: 160,
		rateOfFire: 600,
		damage: 128,
		accuracy: 72,
		stability: 40,
		concealment: 10,
		threat: 34,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 3.2,
		equipDelays: [0.5, 0.5],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-2.0, 2.0],
		recoilVertical: [1.2, 1.6],
		spread: 1.68,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (Akron HC)'],
			barrel['DMR Barrel']
		],
		barrelExt: lightMachineGunBarrelExt,
		boost: lightMachineGunBoost,
		// TODO exclusive set
		gadget: lightMachineGunGadget,
		magazine: [
			magazine['Large Magazine'],
			magazine['Standard Magazine']
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
		stock: [
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		]
	}
}

export default akronHC