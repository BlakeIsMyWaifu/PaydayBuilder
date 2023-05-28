import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationList } from '../weaponTypes'

export type UnderbarrelModificationsList =
	| 'Sting Grenade'

	// KETCHNOV BYK-1
	| 'Frag Round'
	| 'Viper Grenade'
	| 'X1-a Tactical ZAPper'

	// Káng Arms Model 54
	| 'KA54 Bull Stopper Addon'
	| 'Flechette'
	| 'AP Slug'

	// Campbell 74
	| 'Infernal Flamethrower'

const underbarrel: ModificationList<UnderbarrelModificationsList> = {
	'Sting Grenade': {
		name: 'Sting Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_hornet',
		icon: 'inv_mod_ammo_custom',
		slot: 'underbarrel',
		source: source['Base Game'], // TODO Find update, around start of 2023
		cost: 14e3,
		specialEffect: ['Shoots an AP shotgun round.', 'Receives bonuses from skills', 'Suffers from damage falloff'],
		stats: {},
		compatibleWeapons: {}
	},
	'Frag Round': {
		name: 'Frag Round',
		image: 'wpn_fps_upg_a_underbarrel_frag_groza',
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
	},
	'X1-a Tactical ZAPper': {
		name: 'X1-a Tactical ZAPper',
		image: 'wpn_fps_upg_a_grenade_launcher_electric',
		icon: 'inv_mod_ammo_custom',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		specialEffect: ['Electrocutes all targets within its radius'],
		stats: {
			damage: -80
		},
		compatibleWeapons: {}
	},
	'KA54 Bull Stopper Addon': {
		name: 'KA54 Bull Stopper Addon',
		image: 'wpn_fps_pis_type54_underbarrel_custom',
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
	'Infernal Flamethrower': {
		name: 'Infernal Flamethrower',
		image: 'wpn_fps_lmg_kacchainsaw_flamethrower',
		icon: 'inv_mod_ammo_dragons_breath',
		slot: 'underbarrel',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			totalAmmo: -60,
			accuracy: -12,
			stability: -8,
			concealment: -8
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Campbell 74'
			]
		}
	}
}

export default underbarrel