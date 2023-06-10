import source from 'data/source/miscSources'

import goliath12G from '../../secondary/shotgun/goliath12G'
import { type WeaponData } from '../../weaponTypes'
import { akimboShotgunAmmunition, akimboShotgunBarrelExt, akimboShotgunBoost, akimboShotgunGadget } from '../commonModifications/akimboShotgunModifications'

const akimboGoliath12G = {
	name: 'Akimbo Goliath 12G',
	image: 'x_rota',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Akimbo Shotgun',
	firingMode: 'Selective firing',
	cost: 714e3,
	stats: {
		magazine: 12,
		totalAmmo: 72,
		rateOfFire: 333,
		damage: 42,
		accuracy: 56,
		stability: 8,
		concealment: 13,
		threat: 28,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [3.6, 5.4],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [3.92, 3.36],
		spread: 2.64,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		ammunition: akimboShotgunAmmunition,
		barrel: goliath12G.modifications.barrel,
		barrelExt: akimboShotgunBarrelExt,
		boost: akimboShotgunBoost,
		gadget: akimboShotgunGadget
	}
} as const satisfies WeaponData

export default akimboGoliath12G