import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const akronHC = {
	name: 'Akron HC',
	image: 'hcar',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'primary',
	reputation: 48,
	weaponType: 'LMG',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 20,
		totalAmmo: 160,
		rateOfFire: 600,
		damage: 128,
		accuracy: 72,
		stability: 40,
		concealment: 10,
		threat: 34,
		reload: 3.7
	},
	extraStats: {
		tacticalReload: 3.2,
		equipDelays: [0.5, 0.5],
		ammoPickup: [2.0, 3.0],
		recoilHorizontal: [-2.0, 2.0],
		recoilVertical: [1.2, 1.6],
		spread: 1.68,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			{
				name: 'Short Barrel',
				image: 'wpn_fps_lmg_hcar_barrel_short',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 3'],
				cost: 14e3,
				stats: {
					accuracy: -4,
					stability: -4,
					concealment: 2
				}
			},
			{
				name: 'DMR Barrel',
				image: 'wpn_fps_lmg_hcar_barrel_dmr',
				icon: 'inv_mod_barrel',
				slot: 'barrel',
				source: content['McShay Weapon Pack 3'],
				cost: 21e3,
				stats: {
					magazine: -10,
					totalAmmo: -80,
					damage: 40
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
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Buckeye Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: lightMachineGunBoost,
		exclusiveSet: [
			{
				name: 'Aureate',
				image: 'wpn_fps_lmg_hcar_body_conversionkit',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['McShay Weapon Pack 3'],
				cost: 9e3,
				specialEffect: ['Ammo pickups locked to 6-12'],
				stats: {
					magazine: 80,
					totalAmmo: 160,
					// TODO rateOfFire: 400,
					damage: -40,
					accuracy: 4,
					stability: 4,
					concealment: 3
				}
			}
		],
		gadget: lightMachineGunGadget,
		magazine: [
			{
				name: 'Large Magazine',
				image: 'wpn_fps_lmg_hcar_m_drum',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 3'],
				cost: 21e3,
				stats: {
					magazine: 50,
					concealment: -4
				}
			},
			{
				name: 'Standard Magazine',
				image: 'wpn_fps_lmg_hcar_m_stick',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['McShay Weapon Pack 3'],
				cost: 21e3,
				stats: {
					magazine: 20,
					concealment: -2
				}
			}
		],
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
			stock['Tactical Stock (Main)'],
			stock['Folding Stock'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
} as const satisfies WeaponData

export default akronHC