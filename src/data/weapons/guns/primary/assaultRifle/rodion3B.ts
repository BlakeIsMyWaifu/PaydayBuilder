import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleGadget } from '../commonModifications/assaultRifleModifications'

const rodion3B = {
	name: 'Rodion 3B',
	image: 'tkb',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'primary',
	reputation: 50,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 90,
		totalAmmo: 180,
		rateOfFire: 800,
		damage: 60,
		accuracy: 60,
		stability: 36,
		concealment: 16,
		threat: 24,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [1.0, 0.5],
		ammoPickup: [5.4, 8.1],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['KS12-A Burst Muzzle'],
			barrelExt['Fyodor Muzzle Brake'],
			barrelExt['Federation Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		bolt: [
			{
				name: 'Taktika Deluxe Charging Handle',
				image: 'wpn_fps_ass_tkb_bolt_rp4',
				icon: 'inv_mod_bolt',
				slot: 'bolt',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -1,
					reload: -0.3
				}
			}
		],
		boost: assaultRifleBoost,
		exclusiveSet: [
			{
				name: 'Strelok',
				image: 'wpn_fps_ass_tkb_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					damage: -5,
					accuracy: 16,
					stability: 12,
					concealment: -1
				}
			}
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		lowerReceiver: [
			{
				name: 'Arkady Ammo Pouch',
				image: 'wpn_fps_ass_tkb_body_pouch',
				icon: 'inv_mod_lower_receiver',
				slot: 'lowerReceiver',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					totalAmmo: 45,
					accuracy: -4,
					stability: 4,
					concealment: -2
				}
			}
		],
		magazine: [
			{
				name: 'Siberian Speed Pull Magazine',
				image: 'wpn_fps_ass_tkb_m_bakelite',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4,
					concealment: -2,
					reload: -0.6
				}
			}
		],
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['Biometric Analyzer x1.25'],
			{
				name: 'Svidetel Iron Sight', // TODO scope level
				image: 'wpn_fps_ass_tkb_o_tritium',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					accuracy: 4
				}
			},
			{
				name: 'Angular Rail', // TODO scope level
				image: 'wpn_fps_ass_tkb_o_tt01',
				icon: 'inv_mod_scope',
				slot: 'sight',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		],
		stock: [
			{
				name: 'Shoulder Pad',
				image: 'wpn_fps_ass_tkb_s_tigr',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				stats: {
					stability: 4
				}
			}
		]
	}
} as const satisfies WeaponData

export default rodion3B