import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type AmmunitionModification = keyof typeof ammunition

const ammunition = {
	'Tombstone Slug': {
		name: 'Tombstone Slug',
		image: 'wpn_fps_upg_a_rip',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: source['Base Game'],
		cost: 36e3,
		acquisition: {
			infinite: true
		},
		specialEffect: [
			'Poisons enemies',
			'Penetrates body armor'
		],
		stats: {
			totalAmmo: -20,
			damage: -4,
			accuracy: 4
		}
	},
	'000 Buckshot': {
		name: '000 Buckshot',
		image: 'wpn_fps_upg_a_custom',
		icon: 'inv_mod_ammo_custom',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		stats: {
			damage: 15
		}
	},
	'HE Round': {
		name: 'HE Round',
		image: 'wpn_fps_upg_a_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Creates an explosion on impact'],
		stats: {
			totalAmmo: -5,
			damage: 3,
			accuracy: -12
		}
	},
	'Flechette': {
		name: 'Flechette',
		image: 'wpn_fps_upg_a_piercing',
		icon: 'inv_mod_ammo_piercing',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Penetrates body armor'],
		stats: {
			damage: -3,
			accuracy: 8
		}
	},
	'AP Slug': {
		name: 'AP Slug',
		image: 'wpn_fps_upg_a_slug',
		icon: 'inv_mod_ammo_slug',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Penetrates body armor, shields, enemies and thin walls'],
		stats: {
			totalAmmo: -8, // different ammo per gun
			damage: 15,
			accuracy: 8
		}
	},
	'Dragon\'s Breath Round': {
		name: 'Dragon\'s Breath Round',
		image: 'wpn_fps_upg_a_dragons_breath',
		icon: 'inv_mod_ammo_dragons_breath',
		slot: 'ammunition',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Sets enemies on fire'],
		stats: {
			totalAmmo: -5,
			damage: -6,
			accuracy: -4
		}
	},
	'Sting Grenade': {
		name: 'Sting Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_hornet',
		icon: 'inv_mod_ammo_custom',
		slot: 'ammunition',
		source: source['Base Game'], // TODO Find update, around start of 2023
		cost: 14e3,
		specialEffect: ['Shoots an AP shotgun round.', 'Receives bonuses from skills', 'Suffers from damage falloff'],
		stats: {}
	},
	'Incendiary Round': {
		name: 'Incendiary Round',
		image: 'wpn_fps_upg_a_grenade_launcher_incendiary',
		icon: 'inv_mod_ammo_dragons_breath',
		slot: 'ammunition',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['35% chance to set targets on fire'],
		stats: {
			damage: -1270
		}
	},
	'X1-a Tactical ZAPper': {
		name: 'X1-a Tactical ZAPper',
		image: 'wpn_fps_upg_a_grenade_launcher_electric',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Electrocutes all targets within its radius'],
		stats: {
			damage: -180 // Different per weapon
		}
	},
	'Viper Grenade': {
		name: 'Viper Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_poison',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Spawns a poison gas cloud'],
		stats: {
			damage: 40 // Different per weapon
		}
	}
} as const satisfies ModificationCollection

export default ammunition