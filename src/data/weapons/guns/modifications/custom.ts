import content from 'data/source/downloadableContent'

import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const fireModeWeapons: CompatibleWeapons = {
	assaultRifle: [
		'Golden AK.762'
	]
}

export type CustomModificationsList =
	| 'Single Fire'
	| 'Auto Fire'

const custom: ModificationList<CustomModificationsList> = {
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
		},
		compatibleWeapons: fireModeWeapons
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
		},
		compatibleWeapons: fireModeWeapons
	}
}

export default custom