import content from 'data/source/downloadableContent'

import { type ModificationCollection } from '../weaponTypes'

export type ExtraModificationsList = keyof typeof extra

const extra = {
	'Scope Mount': {
		name: 'Scope Mount',
		image: 'wpn_fps_upg_o_ak_scopemount',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: '$1.8M Speedrun'
		},
		stats: {
			stability: 4,
			concealment: -1
		}
	}
} as const satisfies ModificationCollection

export default extra