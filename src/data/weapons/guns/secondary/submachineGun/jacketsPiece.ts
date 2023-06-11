import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget } from '../commonModifications/submachineGunModifications'

const jacketsPiece = {
	name: 'Jacket\'s Piece',
	image: 'cobray',
	source: content['Jacket Character Pack'],
	inventorySlot: 'secondary',
	reputation: 12,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 261e3,
	stats: {
		magazine: 32,
		totalAmmo: 160,
		rateOfFire: 1200,
		damage: 57,
		accuracy: 52,
		stability: 68,
		concealment: 25,
		threat: 10,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 2.05,
		equipDelays: [0.5, 0.55],
		ammoPickup: [4.8, 8.8],
		recoilHorizontal: [-1.3, 1.3],
		recoilVertical: [-0.78, 1.56],
		spread: 2.88,
		damageModifier: [1.0, 0.6]
	},
	modifications: {
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Slotted Barrel Extension'],
			barrelExt['Werbell\'s Suppressor'],
			barrelExt['Ported Compensator'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		stock: [
			stock['Standard Stock (Main)'],
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock']
		],
		upperReceiver: [
			{
				name: '80\'s Calling',
				image: 'wpn_fps_smg_cobray_body_upper_jacket',
				icon: 'inv_mod_upper_receiver',
				slot: 'upperReceiver',
				source: content['Jacket Character Pack'],
				cost: 9e3,
				acquisition: {
					infinite: true
				},
				stats: {
					damage: 1,
					stability: 20,
					concealment: -3
				}
			}
		]
	}
} as const satisfies WeaponData

export default jacketsPiece