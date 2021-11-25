import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type BipodModificationsList =
	'Lion\'s Bipod'

const bipod: ModificationList<BipodModificationsList> = {
	'Lion\'s Bipod': {
		name: 'Lion\'s Bipod',
		image: 'wpn_fps_upg_bp_lmg_lionbipod',
		slot: 'bipod',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP 58 Light Machine Gun',
				'RPK Light Machine Gun',
				'KSP Light Machine Gun',
				'Buzzsaw 42 Light Machine Gun',
				'Brenner-21 Light Machine Gun'
			]
		},
		incompatibleSlot: [] // brenner 21 incompatible with foregrip
	}
}

export default bipod