import content from 'data/source/downloadableContent'

import underbarrel from '../../modifications/underbarrel'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const littleFriend762 = {
	name: 'Little Friend 7.62',
	image: 'contraband',
	source: content['Scarface Character Pack'],
	inventorySlot: 'primary',
	reputation: 41,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 20,
		totalAmmo: 60,
		rateOfFire: 612,
		damage: 160,
		accuracy: 72,
		stability: 44,
		concealment: 8,
		threat: 22,
		reload: 3.2
	},
	extraStats: {
		tacticalReload: 2.55,
		equipDelays: [0.5, 0.6],
		ammoPickup: [1.08, 2.4],
		recoilHorizontal: [-1.9, 1.9],
		recoilVertical: [1.14, 1.52],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		underbarrel: [
			underbarrel['Sting Grenade'],
			underbarrel['X1-a Tactical ZAPper'],
			underbarrel['Viper Grenade']
		]
	}
} as const satisfies WeaponData

export default littleFriend762