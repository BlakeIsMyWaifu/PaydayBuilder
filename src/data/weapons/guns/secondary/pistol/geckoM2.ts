import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const geckoM2: WeaponData = {
	name: 'Gecko M2',
	image: 'maxim9',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 12,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 208800,
	stats: {
		magazine: 17,
		totalAmmo: 68,
		rateOfFire: 480,
		damage: 100,
		accuracy: 64,
		stability: 44,
		concealment: 29,
		threat: 9,
		reload: 2.15
	},
	extraStats: {
		tacticalReload: 1.5,
		equipDelays: [0.35, 0.5],
		ammoPickup: [1.7, 2.38],
		recoilHorizontal: [-0.95, 0.95],
		recoilVertical: [2.28, 3.42],
		spread: 2.16,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			barrel['UpShot Barrel'],
			barrel['Pinnacle Barrel']
		],
		barrelExt: [
			barrelExt['IPSC Compensator'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Flash Hider']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Stack S3 Magazine']
		],
		sight: pistolSight
	}
}

export default geckoM2