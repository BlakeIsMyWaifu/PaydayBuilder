import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const deagle: WeaponData = {
	name: 'Deagle',
	image: 'deagle',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 36,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 822e3,
	stats: {
		magazine: 10,
		totalAmmo: 60,
		rateOfFire: 400,
		damage: 120,
		accuracy: 76,
		stability: 28,
		concealment: 28,
		threat: 24,
		reload: 3.1
	},
	extraStats: {
		tacticalReload: 1.85,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.15, 1.15],
		recoilVertical: [2.76, 4.14],
		spread: 1.44,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			...pistolBarrelExt,
			barrelExt['La Femme Compensator'],
			barrelExt['OVERKILL Compensator']
		],
		boost: pistolBoost,
		extra: [
			extra['Deagle Scope Mount']
		],
		gadget: pistolGadget,
		grip: [
			grip['Ergo Grip (Deagle)'],
			grip['Bling Grip (Deagle)']
		],
		magazine: [
			magazine['Extended Mag. (Deagle)']
		],
		sight: pistolSight,
		slide: [
			slide['Long Barrel'],
			slide['Custom Milled Barrel']
		]
	}
}

export default deagle