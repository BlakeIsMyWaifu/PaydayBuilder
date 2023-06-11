import source from 'data/source/miscSources'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const goliath12G = {
	name: 'Goliath 12G',
	image: 'rota',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 23,
	weaponType: 'Shotgun',
	firingMode: 'Double action',
	cost: 510e3,
	stats: {
		magazine: 6,
		totalAmmo: 54,
		rateOfFire: 333,
		damage: 42,
		accuracy: 56,
		stability: 44,
		concealment: 13,
		threat: 28,
		reload: 2.55
	},
	extraStats: {
		tacticalReload: 2.55,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.7, 4.05],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_sho_rota_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 3
				}
			},
			{
				name: 'Silenced Barrel',
				image: 'wpn_fps_sho_rota_b_silencer',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 44e3,
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: -4,
					stability: 4,
					concealment: -1,
					threat: -22
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		gadget: shotgunGadget,
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
} as const satisfies WeaponData

export default goliath12G