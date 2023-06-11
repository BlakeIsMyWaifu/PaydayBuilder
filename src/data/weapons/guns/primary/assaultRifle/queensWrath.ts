import content from 'data/source/downloadableContent'

import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const queensWrath = {
	name: 'Queen\'s Wrath',
	image: 'l85a2',
	source: content['Clover Character Pack'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 534e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 723,
		damage: 65,
		accuracy: 64,
		stability: 60,
		concealment: 16,
		threat: 12,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.5,
		equipDelays: [0.75, 0.45],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.8, 1.8],
		recoilVertical: [1.2, 1.65],
		spread: 2.16,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'Prodigious Barrel',
				image: 'wpn_fps_ass_l85a2_b_long',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Clover Character Pack'],
				cost: 9e3,
				stats: {
					accuracy: 4,
					concealment: -3
				}
			},
			{
				name: 'Diminutive Barrel',
				image: 'wpn_fps_ass_l85a2_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['Clover Character Pack'],
				cost: 9e3,
				stats: {
					concealment: 3
				}
			}
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Versatile Foregrip',
				image: 'wpn_fps_ass_l85a2_fg_short',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Clover Character Pack'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: 1
				}
			}
		],
		gadget: assaultRifleGadget,
		grip: [
			{
				name: 'Delightful Grip',
				image: 'wpn_fps_ass_l85a2_g_worn',
				icon: 'inv_mod_grip',
				slot: 'grip',
				source: content['Clover Character Pack'],
				cost: 9e3,
				stats: {
					stability: 4
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

export default queensWrath