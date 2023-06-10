import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import sight from '../../modifications/sight'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const argosIII = {
	name: 'Argos III',
	image: 'ultima',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 34,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 618400,
	stats: {
		magazine: 7,
		totalAmmo: 35,
		rateOfFire: 270,
		damage: 110,
		accuracy: 48,
		stability: 40,
		concealment: 24,
		threat: 28,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: [3.4, 0.57],
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.88, 1.23],
		recoilHorizontal: [-0.4, 0.4],
		recoilVertical: [3.8, 4.0],
		spread: 3.12,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: [
			barrelExt['Shark Teeth Nozzle'],
			barrelExt['The Silent Killer Suppressor'],
			barrelExt['King\'s Crown Compensator'],
			barrelExt['Shh!'],
			barrelExt['Donald\'s Horizontal Leveller'],
			{
				name: 'Try-Core Compensator',
				image: 'wpn_fps_sho_ultima_ns_comp',
				icon: 'inv_mod_barrel_ext',
				slot: 'barrelExt',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					damage: 4,
					stability: 12,
					concealment: -3
				}
			}
		],
		boost: shotgunBoost,
		exclusiveSet: [
			{
				name: 'Triple Tech Threat',
				image: 'wpn_fps_sho_ultima_body_kit',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					accuracy: -4,
					stability: 8,
					concealment: -1
				}
			}
		],
		extra: [
			{
				name: 'ShellSwitch M8 Ammo Cache',
				image: 'wpn_fps_sho_ultima_body_rack',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					totalAmmo: 5,
					concealment: -2
				}
			}
		],
		gadget: shotgunGadget,
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
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['CASSIAN Sharp Sight x3.25']
		],
		stock: [
			{
				name: 'Flak Frame Null Stock',
				image: 'wpn_fps_sho_ultima_s_light',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					stability: 8,
					concealment: -1
				}
			}
		]
	}
} as const satisfies WeaponData

export default argosIII