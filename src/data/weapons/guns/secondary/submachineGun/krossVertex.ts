import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import stock from '../../modifications/stock'
import { WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSight } from '../commonModifications/submachineGunModifications'

const krossVertex: WeaponData = {
	name: 'Kross Vertex',
	image: 'polymer',
	source: content['Gage Ninja Pack'],
	inventorySlot: 'secondary',
	reputation: 39,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 896e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 1200,
		damage: 58,
		accuracy: 52,
		stability: 76,
		concealment: 20,
		threat: 10,
		reload: 2.5
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.5, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [-0.22, 0.44],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			...submachineGunBarrelExt,
			barrelExt['HPS Suppressor'],
			barrelExt['Precision Barrel']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		sight: submachineGunSight,
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock']
		]
	}
}

export default krossVertex