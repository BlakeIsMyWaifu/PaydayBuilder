import content from 'data/source/downloadableContent'

import { ModificationList } from '../weaponTypes'

export type BoltModificationList =
	'Quickdraw Speedbolt'

const bolt: ModificationList<BoltModificationList> = {
	'Quickdraw Speedbolt': {
		name: 'Quickdraw Speedbolt',
		image: 'wpn_fps_snp_scout_bolt_speed',
		icon: 'inv_mod_bolt',
		slot: 'bolt',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			concealment: -1 // ??? reload?
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn Sniper Rifle'
			]
		}
	}
}

export default bolt