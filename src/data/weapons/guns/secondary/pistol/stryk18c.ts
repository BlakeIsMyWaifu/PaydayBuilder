import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const stryk18c: WeaponData = {
	name: 'STRYK 18c',
	image: 'glock_18c',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 29,
	weaponType: 'Pistol',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 20,
		totalAmmo: 160,
		rateOfFire: 909,
		damage: 35,
		accuracy: 52,
		stability: 56,
		concealment: 29,
		threat: 10,
		reload: 2.12
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.6, 5.6],
		recoilHorizontal: [-0.48, 0.48],
		recoilVertical: [0.48, 0.64],
		spread: 2.88,
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
			barrelExt['Ventilated Compensator'],
			barrelExt['Velocity Compensator'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		grip: [
			grip['Laser Grip (Chimano)'],
			grip['Platypus Grip'],
			grip['Ergo Grip (STRYK / Chimano Custom)']
		],
		magazine: [
			magazine['Extended Magazine (Chimano)']
		],
		sight: pistolSight,
		stock: [
			stock.Stock
		]
	}
}

export default stryk18c