import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type BoostModification = keyof typeof boost

const boost = {
	'Concealment': {
		name: 'Concealment',
		image: 'wpn_fps_upg_bonus_concealment_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			concealment: 1
		}
	},
	'Stability': {
		name: 'Stability',
		image: 'wpn_fps_upg_bonus_recoil_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4
		}
	},
	'Accuracy': {
		name: 'Accuracy',
		image: 'wpn_fps_upg_bonus_spread_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4
		}
	},
	'Team Boost': {
		name: 'Team Boost',
		image: 'wpn_fps_upg_bonus_team_exp_money_p3',
		icon: 'inv_mod_bonus_team',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['+3% Experience & money reward for you and your crew.'],
		stats: {}
	},
	'Accuracy (- Shotguns)': {
		name: 'Accuracy',
		image: 'wpn_fps_upg_bonus_spread_n1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 12600,
		stats: {
			accuracy: -4
		}
	},
	'Total Ammo': {
		name: 'Total Ammo',
		image: 'wpn_fps_upg_bonus_total_ammo_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: 2 // TODO different per weapon
		}
	},
	'Damage (Flamethrower)': {
		name: 'Damage',
		image: 'wpn_fps_upg_bonus_damage_p1', // - wpn_fps_upg_bonus_damage_p3 ? wpn_fps_upg_bonus_damage_p1
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			damage: 1
		}
	},
	'Concealment (Extra)': {
		name: 'Concealment',
		image: 'wpn_fps_upg_bonus_concealment_p3',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			concealment: 3
		}
	}
} as const satisfies ModificationCollection

export default boost