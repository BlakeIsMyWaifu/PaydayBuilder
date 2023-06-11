import content from 'data/source/downloadableContent'

import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cr805B = {
	name: 'CR 805B',
	image: 'hajk',
	source: content['The Biker Heist'],
	inventorySlot: 'secondary',
	reputation: 2,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 58e3,
	stats: {
		magazine: 30,
		totalAmmo: 90,
		rateOfFire: 750,
		damage: 99,
		accuracy: 72,
		stability: 68,
		concealment: 18,
		threat: 10,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 2.0,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.9, 3.15],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [-0.78, 1.56],
		spread: 1.68,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrel: [
			{
				name: 'Medium Barrel',
				image: 'wpn_fps_smg_hajk_b_medium',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Biker Heist'],
				cost: 9e3,
				stats: {
					accuracy: -4,
					concealment: 2
				}
			},
			{
				name: 'Short Barrel',
				image: 'wpn_fps_smg_hajk_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Biker Heist'],
				cost: 9e3,
				stats: {
					accuracy: -12,
					concealment: 5
				}
			}
		],
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine'],
			magazine['Plated AR Magazine']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight
	}
} as const satisfies WeaponData

export default cr805B