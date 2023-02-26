import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import magazine from '../../modifications/magazine'
import underbarrel from '../../modifications/underbarrel'
import { type WeaponData } from '../../weaponTypes'
import { pistolBarrelExt, pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const kangArmsModel54: WeaponData = {
	name: 'Káng Arms Model 54',
	image: 'type54',
	source: content['Jiu Feng Smuggler Pack 3'],
	inventorySlot: 'secondary',
	reputation: 24,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 534e3,
	stats: {
		magazine: 10,
		totalAmmo: 60,
		rateOfFire: 480,
		damage: 85,
		accuracy: 64,
		stability: 36,
		concealment: 28,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.5, 2.1],
		recoilHorizontal: [-1.05, 1.05],
		recoilVertical: [2.52, 3.78],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['KA54 Barrel Extender']
		],
		barrelExt: pistolBarrelExt,
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['KA54 Extended Magazine']
		],
		sight: pistolSight,
		underbarrel: [
			underbarrel['KA54 Bull Stopper Addon'],
			underbarrel.Flechette,
			underbarrel['AP Slug']
		]
	}
}

export default kangArmsModel54