import source from 'data/source/miscSources'

import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const union556 = {
	name: 'Union 5.56',
	image: 'corgi',
	source: source['Reservoir Dogs'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 42e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 857,
		damage: 59,
		accuracy: 68,
		stability: 68,
		concealment: 20,
		threat: 12,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [0.78, 1.04],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_ass_corgi_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					accuracy: -8,
					concealment: 3
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		lowerReceiver: [
			{
				name: 'Dunes Tactical Receiver',
				image: 'wpn_fps_ass_corgi_b_short', // - wpn_fps_corgi_body_lower_strap
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: source['Base Game'],
				cost: 9e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		],
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight
	}
} as const satisfies WeaponData

export default union556