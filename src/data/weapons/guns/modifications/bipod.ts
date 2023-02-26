import source from 'data/source/miscSources'

import { type ModificationList } from '../weaponTypes'

export type BipodModificationsList =
	| 'Lion\'s Bipod'

const bipod: ModificationList<BipodModificationsList> = {
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
		compatibleWeapons: {
			lightMachineGun: [
				'KSP 58',
				'RPK',
				'KSP',
				'Buzzsaw 42',
				'Brenner-21'
			]
		},
		incompatibleSlot: [] // brenner 21 incompatible with foregrip
	}
}

export default bipod