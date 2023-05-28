import source from 'data/source/miscSources'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const $57Ap: WeaponData = {
	name: '5/7 AP',
	image: 'lemming',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 26,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 581e3,
	stats: {
		magazine: 15,
		totalAmmo: 45,
		rateOfFire: 600,
		damage: 120,
		accuracy: 48,
		stability: 36,
		concealment: 29,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [0.23, 0.67],
		recoilHorizontal: [-1.05, 1.05],
		recoilVertical: [2.52, 3.78],
		spread: 3.12,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['TiN Treated Barrel']
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Extended Magazine (5/7 AP)']
		],
		sight: pistolSight
	}
}

export default $57Ap