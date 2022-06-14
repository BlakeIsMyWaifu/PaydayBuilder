import content from 'data/source/downloadableContent'

import { ModificationList } from '../weaponTypes'

export type UnderbarrelModificationsList =
	// Káng Arms Model 54
	'KA54 Bull Stopper Addon' |
	'Flechette' |
	'AP Slug' |

	// KETCHNOV BYK-1
	'Frag Round' |
	'Viper Grenade'

const underbarrel: ModificationList<UnderbarrelModificationsList> = {
	'KA54 Bull Stopper Addon': {
		name: 'KA54 Bull Stopper Addon',
		image: 'KA54_Bull_Stopper_Addon',
		icon: 'inv_mod_ammo_custom',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -4
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'Flechette': {
		name: 'Flechette',
		image: 'wpn_fps_upg_a_piercing',
		icon: 'inv_mod_ammo_piercing',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -4
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'AP Slug': {
		name: 'AP Slug',
		image: 'wpn_fps_upg_a_slug',
		icon: 'inv_mod_ammo_slug',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -4
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'Frag Round': {
		name: 'Frag Round',
		image: 'inv_mod_ammo_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1'
			]
		}
	},
	'Viper Grenade': {
		name: 'Viper Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1'
			]
		}
	}
}

export default underbarrel