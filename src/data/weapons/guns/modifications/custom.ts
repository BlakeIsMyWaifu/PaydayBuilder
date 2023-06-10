import content from 'data/source/downloadableContent'

import { type ModificationCollection } from '../weaponTypes'

export type CustomModification = keyof typeof custom

const custom = {
	'Single Fire': {
		name: 'Single Fire',
		image: 'wpn_fps_upg_i_singlefire',
		icon: 'inv_mod_singlefire',
		slot: 'custom',
		source: content['Gage Weapon Pack #01'],
		cost: 50400,
		acquisition: {
			bonus: 5
		},
		specialEffect: ['Locks firing mode of a weapon to single fire.'],
		stats: {
			accuracy: 1,
			stability: -8
		}
	},
	'Auto Fire': {
		name: 'Auto Fire',
		image: 'wpn_fps_upg_i_autofire',
		icon: 'inv_mod_autofire',
		slot: 'custom',
		source: content['Gage Weapon Pack #01'],
		cost: 86800,
		acquisition: {
			bonus: 5
		},
		specialEffect: ['Locks firing mode of a weapon to fully-automatic.'],
		stats: {
			damage: 1,
			accuracy: -4,
			stability: 8
		}
	}
} as const satisfies ModificationCollection

export default custom