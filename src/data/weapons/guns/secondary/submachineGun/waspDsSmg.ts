import content from 'data/source/downloadableContent'

import gadget from '../../modifications/gadget'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBarrelExt, submachineGunBoost } from '../commonModifications/submachineGunModifications'

const waspDsSmg = {
	name: 'Wasp-DS SMG',
	image: 'fmg9',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 15,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 261600,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 1333,
		damage: 40,
		accuracy: 64,
		stability: 36,
		concealment: 29,
		threat: 22,
		reload: 2.48
	},
	extraStats: {
		tacticalReload: 1.51,
		equipDelays: [0.5, 1.8],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [-1.68, 3.78],
		spread: 2.64,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: submachineGunBarrelExt,
		boost: submachineGunBoost,
		exclusiveSet: [
			{
				name: 'Whisper 9 Silencer',
				image: 'wpn_fps_smg_fmg9_conversion',
				icon: 'inv_mod_ammo_explosive', // TODO update icon
				slot: 'exclusiveSet',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 9e3,
				acquisition: {
					bonus: 1
				},
				stats: {
					damage: 2,
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			}
		],
		extra: [
			{
				name: 'Rake Ultra Grip',
				image: 'wpn_fps_smg_fmg9_grip_tape',
				icon: 'inv_mod_extra',
				slot: 'extra',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7e3,
				stats: {
					stability: 4
				}
			}
		],
		gadget: [
			gadget['Tactical Pistol Light'],
			gadget['Pocket Laser'],
			gadget['Medved R4 Laser Sight']
		],
		magazine: [
			{
				name: 'Celerity X9 Magazine',
				image: 'wpn_fps_smg_fmg9_m_speed',
				icon: 'inv_mod_magazine',
				slot: 'magazine',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					reload: -0.7,
					accuracy: 4,
					stability: 4,
					concealment: -2
				}
			}
		],
		stock: [
			{
				name: 'Bounce Slate RX Stock',
				image: 'wpn_fps_smg_fmg9_stock_padded',
				icon: 'inv_mod_stock',
				slot: 'stock',
				source: content['Jiu Feng Smuggler Pack 4'],
				cost: 7200,
				stats: {
					accuracy: 8,
					stability: 8,
					concealment: -2
				}
			}
		]
	}
} as const satisfies WeaponData

export default waspDsSmg