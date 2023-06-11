import source from 'data/source/miscSources'

import theJudge from '../../secondary/shotgun/theJudge'
import { type WeaponData } from '../../weaponTypes'
import { akimboShotgunAmmunition, akimboShotgunBarrelExt, akimboShotgunBoost, akimboShotgunGadget } from '../commonModifications/akimboShotgunModifications'

const akimboJudge = {
	name: 'Akimbo Judge',
	image: 'x_judge',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Akimbo Shotgun',
	firingMode: 'Selective firing',
	cost: 1117200,
	stats: {
		magazine: 10,
		totalAmmo: 40,
		rateOfFire: 500,
		damage: 155,
		accuracy: 52,
		stability: 0,
		concealment: 29,
		threat: 28,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [0.2, 0.6],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [4.2, 3.6],
		spread: 2.88,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		ammunition: akimboShotgunAmmunition,
		barrelExt: akimboShotgunBarrelExt,
		boost: akimboShotgunBoost,
		gadget: akimboShotgunGadget,
		lowerReceiver: theJudge.modifications.lowerReceiver
	}
} as const satisfies WeaponData

export default akimboJudge