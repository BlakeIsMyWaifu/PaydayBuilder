import source from 'data/source/miscSources'

import upperReceiver from '../../modifications/upperReceiver'
import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialGadget } from '../commonModifications/specialModifications'

const xl556Microgun: WeaponData = {
	name: 'XL 5.56 Microgun',
	image: 'shuno',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 30,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 676e3,
	stats: {
		magazine: 750,
		totalAmmo: 750,
		rateOfFire: 2000,
		damage: 35,
		accuracy: 32,
		stability: 24,
		concealment: 5,
		threat: 31,
		reload: 7.8
	},
	extraStats: {
		tacticalReload: 7.8,
		equipDelays: [0.9, 1.5],
		ammoPickup: [7.5, 26.25],
		recoilHorizontal: [-0.36, 0.48],
		recoilVertical: [-0.12, 0.24],
		spread: 4.08,
		damageModifier: null
	},
	modifications: {
		boost: specialBoostTotalAmmo,
		gadget: specialGadget,
		upperReceiver: [
			upperReceiver['Heat Sink Barrel'],
			upperReceiver['XS Heat Sink Barrel'],
			upperReceiver['XS Barrel']
		]
	}
}

export default xl556Microgun