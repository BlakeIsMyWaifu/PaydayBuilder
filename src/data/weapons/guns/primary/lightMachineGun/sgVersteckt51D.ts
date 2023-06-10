import content from 'data/source/downloadableContent'

import custom from '../../modifications/custom'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const sgVersteckt51D = {
	name: 'SG Versteckt 51D',
	image: 'hk51b',
	source: content['McShay Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 38,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 696800,
	stats: {
		magazine: 60,
		totalAmmo: 180,
		rateOfFire: 667,
		damage: 110,
		accuracy: 48,
		stability: 28,
		concealment: 19,
		threat: 37,
		reload: 3.65
	},
	extraStats: {
		tacticalReload: 3.1,
		equipDelays: [0.55, 0.6],
		ammoPickup: [4.5, 6.3],
		recoilHorizontal: [-2.3, 1.38],
		recoilVertical: [2.3, 1.84],
		spread: 3.6,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Kalt Barrel',
				image: 'wpn_fps_lmg_hk51b_b_fluted',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack'],
				cost: 28e3,
				stats: {
					damage: 2,
					accuracy: 8,
					stability: 4,
					concealment: -1
				}
			}
		],
		barrelExt: lightMachineGunBarrelExt,
		boost: lightMachineGunBoost,
		custom: [
			custom['Single Fire'],
			custom['Auto Fire']
		],
		foregrip: [
			{
				name: 'Schatten Foregrip',
				image: 'wpn_fps_lmg_hk51b_fg_railed',
				icon: 'inv_mod_foregrip',
				slot: 'foregrip',
				source: content['McShay Weapon Pack'],
				cost: 44e3,
				stats: {
					stability: 8,
					concealment: -1
				}
			}
		],
		gadget: lightMachineGunGadget,
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
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25']
		],
		stock: [
			{
				name: 'Zittern Stock',
				image: 'wpn_fps_lmg_hk51b_s_extended',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['McShay Weapon Pack'],
				cost: 9e3,
				stats: {
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default sgVersteckt51D