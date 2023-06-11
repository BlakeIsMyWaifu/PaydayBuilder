import content from 'data/source/downloadableContent'

import custom from '../../modifications/custom'
import grip from '../../modifications/grip'
import { type WeaponData } from '../../weaponTypes'
import { akimboShotgunAmmunition, akimboShotgunBarrelExt, akimboShotgunBoost, akimboShotgunGadget } from '../commonModifications/akimboShotgunModifications'
import vd12 from '../shotgun/vd12'

const akimboVd12 = {
	name: 'Akimbo VD-12',
	image: 'x_sko12',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Akimbo Shotgun',
	firingMode: 'Selective firing',
	cost: 747600,
	stats: {
		magazine: 20,
		totalAmmo: 60,
		rateOfFire: 273,
		damage: 50,
		accuracy: 28,
		stability: 36,
		concealment: 15,
		threat: 28,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.5],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [4.2, 3.6],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: akimboShotgunAmmunition,
		barrel: vd12.modifications.barrel,
		barrelExt: akimboShotgunBarrelExt,
		boost: akimboShotgunBoost,
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		exclusiveSet: vd12.modifications.exclusiveSet,
		foregrip: vd12.modifications.foregrip,
		gadget: akimboShotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		]
	}
} as const satisfies WeaponData

export default akimboVd12