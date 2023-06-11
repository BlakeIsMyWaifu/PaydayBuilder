import source from 'data/source/miscSources'

import custom from '../../modifications/custom'
import magazine from '../../modifications/magazine'
import grimm12G from '../../secondary/shotgun/grimm12G'
import { type WeaponData } from '../../weaponTypes'
import { akimboShotgunAmmunition, akimboShotgunBarrelExt, akimboShotgunBoost, akimboShotgunGadget } from '../commonModifications/akimboShotgunModifications'

const brothersGrimm12G = {
	name: 'Brothers Grimm 12G',
	image: 'x_basset',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 27,
	weaponType: 'Akimbo Shotgun',
	firingMode: 'Selective firing',
	cost: 847e3,
	stats: {
		magazine: 16,
		totalAmmo: 96,
		rateOfFire: 333,
		damage: 18,
		accuracy: 12,
		stability: 12,
		concealment: 21,
		threat: 28,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [4.8, 7.2],
		recoilHorizontal: [-1.35, 1.35],
		recoilVertical: [3.78, 3.24],
		spread: 5.28,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: akimboShotgunAmmunition,
		barrelExt: akimboShotgunBarrelExt,
		boost: akimboShotgunBoost,
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		foregrip: grimm12G.modifications.foregrip,
		gadget: akimboShotgunGadget,
		magazine: [
			magazine['Big Brother Magazine']
		]
	}
} as const satisfies WeaponData

export default brothersGrimm12G