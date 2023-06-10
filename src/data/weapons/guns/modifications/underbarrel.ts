import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type UnderbarrelModification = keyof typeof underbarrel

const underbarrel = {
	'Sting Grenade': {
		name: 'Sting Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_hornet',
		icon: 'inv_mod_ammo_custom',
		slot: 'underbarrel',
		source: source['Base Game'], // TODO Find update, around start of 2023
		cost: 14e3,
		specialEffect: ['Shoots an AP shotgun round.', 'Receives bonuses from skills', 'Suffers from damage falloff'],
		stats: {}
	},
	'Viper Grenade': {
		name: 'Viper Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'underbarrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {}
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
		}
	}
} as const satisfies ModificationCollection

export default underbarrel