import content from 'data/source/downloadableContent'

import secondarySight from '../../modifications/secondarySight'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const valkyria = {
	name: 'Valkyria',
	image: 'asval',
	source: content['Sokol Character Pack'],
	inventorySlot: 'primary',
	reputation: 29,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 652e3,
	stats: {
		magazine: 30,
		totalAmmo: 220,
		rateOfFire: 896,
		damage: 50,
		accuracy: 56,
		stability: 64,
		concealment: 26,
		threat: 0,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 2.6,
		equipDelays: [0.5, 0.5],
		ammoPickup: [6.6, 12.1],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 2.64,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Prototype Barrel',
				image: 'wpn_fps_ass_asval_b_proto',
				icon: 'inv_mod_silencer',
				slot: 'barrel',
				source: content['Sokol Character Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				specialEffect: ['Silences Weapon'],
				stats: {
					accuracy: -4,
					concealment: 2
				}
			}
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		secondarySight: [
			secondarySight['Riktpunkt 45 degree Sight'],
			secondarySight['45 degree red-dot sight'],
			secondarySight['45 Degree Ironsights']
		],
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Solid Stock',
				image: 'wpn_fps_ass_asval_s_solid',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Sokol Character Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					stability: 20,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default valkyria