import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { specialBoostTotalAmmo, specialGadget } from '../commonModifications/specialModifications'

const cashBlaster: WeaponData = {
	name: 'Cash Blaster',
	image: 'money',
	source: source['8th Anniversary Event'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 33600,
	stats: {
		magazine: 400,
		totalAmmo: 800,
		rateOfFire: 2000,
		damage: 95,
		accuracy: 0,
		stability: 0,
		concealment: 21,
		threat: 37,
		reload: 8.5
	},
	extraStats: {
		tacticalReload: 8.5,
		equipDelays: [0.85, 0.85],
		ammoPickup: [2.0, 6.0],
		recoilHorizontal: [0, 0],
		recoilVertical: [0, 0],
		spread: 6.0,
		damageModifier: null
	},
	modifications: {
		boost: specialBoostTotalAmmo,
		gadget: specialGadget
	}
}

export default cashBlaster