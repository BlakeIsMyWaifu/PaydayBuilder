import source from 'data/source/miscSources'

import custom from '../../modifications/custom'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunGadget, shotgunSecondarySight, shotgunSight } from '../commonModifications/shotgunModifications'

const grimm12G = {
	name: 'Grimm 12G',
	image: 'basset',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 27,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 605e3,
	stats: {
		magazine: 8,
		totalAmmo: 104,
		rateOfFire: 300,
		damage: 18,
		accuracy: 12,
		stability: 48,
		concealment: 21,
		threat: 28,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.16,
		equipDelays: [0.55, 0.55],
		ammoPickup: [5.2, 7.8],
		recoilHorizontal: [-0.36, 0.36],
		recoilVertical: [3.42, 3.6],
		spread: 5.28,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		foregrip: [
			{
				name: 'Little Brother Foregrip',
				image: 'wpn_fps_sho_basset_fg_short',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 10800,
				stats: {
					stability: -12,
					concealment: 3
				}
			}
		],
		gadget: shotgunGadget,
		magazine: [
			magazine['Big Brother Magazine']
		],
		secondarySight: shotgunSecondarySight,
		sight: shotgunSight
	}
} as const satisfies WeaponData

export default grimm12G