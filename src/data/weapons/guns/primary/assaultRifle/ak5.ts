import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const ak5 = {
	name: 'AK5',
	image: 'ak5',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 749e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 706,
		damage: 66,
		accuracy: 60,
		stability: 60,
		concealment: 18,
		threat: 14,
		reload: 3.08
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.45, 0.6],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.5, 1.5],
		recoilVertical: [0.9, 1.2],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			{
				name: 'CQB Barrel',
				image: 'wpn_fps_ass_ak5_b_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['The Butcher Mod Pack 2'],
				cost: 9e3,
				stats: {
					damage: 2,
					accuracy: 4,
					concealment: 2
				}
			}
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['KS12-A Burst Muzzle'],
			barrelExt['KS12-S Long Silencer'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Karbin Ceres Handguard',
				image: 'wpn_fps_ass_ak5_fg_ak5c',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					damage: 1,
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'Belgian Heat Handguard',
				image: 'wpn_fps_ass_ak5_fg_fnc',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 80e3,
				stats: {
					stability: -4,
					concealment: 1
				}
			}
		],
		gadget: assaultRifleGadget,
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			{
				name: 'Bertil Stock',
				image: 'wpn_fps_ass_ak5_s_ak5b',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: 4,
					concealment: -1
				}
			},
			{
				name: 'Caesar Stock',
				image: 'wpn_fps_ass_ak5_s_ak5c',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 53e3,
				stats: {
					stability: 8,
					concealment: 2
				}
			}
		]
	}
} as const satisfies WeaponData

export default ak5