import source from 'data/source/miscSources'

import { type WeaponData } from './weaponTypes'

const placeholderWeapon: WeaponData = {
	name: 'AMCAR',
	image: 'amcar',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 0,
	stats: {
		magazine: 0,
		totalAmmo: 0,
		rateOfFire: 0,
		damage: 0,
		accuracy: 0,
		stability: 0,
		concealment: 0,
		threat: 0,
		reload: 0
	},
	extraStats: {
		tacticalReload: 0,
		equipDelays: [0, 0],
		ammoPickup: [0, 0],
		recoilHorizontal: [0, 0],
		recoilVertical: [0, 0],
		spread: 0,
		damageModifier: [0, 0]
	},
	modifications: {
		boost: []
	}
}

export default placeholderWeapon