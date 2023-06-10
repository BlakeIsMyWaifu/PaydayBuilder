import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight } from '../commonModifications/assaultRifleModifications'

const jp36 = {
	name: 'JP36',
	image: 'g36',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 16,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 349e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 706,
		damage: 54,
		accuracy: 40,
		stability: 64,
		concealment: 19,
		threat: 13,
		reload: 3.85
	},
	extraStats: {
		tacticalReload: 2.85,
		equipDelays: [0.6, 0.6],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 3.6,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			{
				name: 'Compact Foregrip',
				image: 'wpn_fps_ass_g36_fg_c',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'Polizei Special Foregrip',
				image: 'wpn_fps_ass_g36_fg_ksk',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: source['Base Game'],
				cost: 36e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -2
				}
			},
			{
				name: 'JP36 Long Foregrip',
				image: 'wpn_fps_upg_g36_fg_long',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					accuracy: 8,
					stability: 4,
					concealment: -3
				}
			}
		],
		gadget: assaultRifleGadget,
		magazine: [
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			{
				name: 'JP36 Original Sight x2',
				image: 'wpn_fps_ass_g36_o_vintage',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['Gage Spec Ops Pack'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			},
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		stock: [
			{
				name: 'Solid Stock',
				image: 'wpn_fps_ass_g36_s_kv',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 28e3,
				stats: {
					concealment: 2
				}
			},
			{
				name: 'Sniper Stock',
				image: 'wpn_fps_ass_g36_s_sl8',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: source['Base Game'],
				cost: 71e3,
				stats: {
					accuracy: 4,
					stability: 8,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default jp36