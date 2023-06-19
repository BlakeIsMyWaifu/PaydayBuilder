import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const steakout12G = {
	name: 'Steakout 12G',
	image: 'aa12',
	source: content['The Butcher\'s BBQ Pack'],
	inventorySlot: 'primary',
	reputation: -1, // TODO
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 8,
		totalAmmo: 72,
		rateOfFire: 300,
		damage: 42,
		accuracy: 28,
		stability: 44,
		concealment: 9,
		threat: 28,
		reload: 4.1
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.55, 0.55],
		ammoPickup: [3.6, 5.4],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			{
				name: 'Long Barrel',
				image: 'wpn_fps_sho_aa12_barrel_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Suppressed Barrel',
				image: 'wpn_fps_sho_aa12_barrel_silenced',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 36e3,
				acquisition: {
					bonus: 1
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -2,
					accuracy: 4,
					stability: -8,
					concealment: -2,
					threat: -22
				},
				incompatibleSlot: ['barrelExt']
			}
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: shotgunCustom,
		gadget: shotgunGadget,
		magazine: [
			{
				name: 'Drum Mag',
				image: 'wpn_fps_sho_aa12_mag_drum',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['The Butcher\'s BBQ Pack'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					magazine: 12,
					concealment: -4
				}
			}
		],
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
} as const satisfies WeaponData

export default steakout12G