import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type BipodModification = keyof typeof bipod

const bipod = {
	'Lion\'s Bipod': {
		name: 'Lion\'s Bipod',
		image: 'wpn_fps_upg_bp_lmg_lionbipod',
		icon: 'inv_mod_bipod',
		slot: 'bipod',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {},
		incompatibleSlot: [] // brenner 21 incompatible with foregrip
	}
} as const satisfies ModificationCollection

export default bipod