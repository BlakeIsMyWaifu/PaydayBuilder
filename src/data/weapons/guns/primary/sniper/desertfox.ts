import content from 'data/source/downloadableContent'

import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight, sniperSight } from '../commonModifications/sniperModifications'

const desertfox = {
	name: 'Desertfox',
	image: 'desertfox',
	source: content['John Wick Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 34,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 773e3,
	stats: {
		magazine: 5,
		totalAmmo: 30,
		rateOfFire: 60,
		damage: 480,
		accuracy: 76,
		stability: 12,
		concealment: 19,
		threat: 28,
		reload: 3.86
	},
	extraStats: {
		tacticalReload: 2.72,
		equipDelays: [0.75, 0.45],
		ammoPickup: [0.7, 1.0],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 1.44,
		damageModifier: [1.0, 1.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Long Barrel (Desertfox)',
				image: 'wpn_fps_snp_desertfox_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['John Wick Weapon Pack'],
				cost: 21e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: 12,
					concealment: -3
				}
			},
			{
				name: 'Silenced Barrel (Desertfox)',
				image: 'wpn_fps_snp_desertfox_b_silencer',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['John Wick Weapon Pack'],
				cost: 44e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					damage: -8,
					accuracy: -4,
					stability: 4,
					concealment: -1,
					threat: -22
				}
			}
		],
		boost: sniperBoost,
		gadget: sniperGadget,
		secondarySight: sniperSecondarySight,
		sight: sniperSight
	}
} as const satisfies WeaponData

export default desertfox