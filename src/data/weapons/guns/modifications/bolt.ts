import content from 'data/source/downloadableContent'

import { ModificationList } from '../weaponTypes'

export type BoltModificationList =
	| 'Quickdraw Speedbolt'
	| 'Taktika Deluxe Charging Handle'

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
				'Pronghorn'
			]
		}
	},
	'Taktika Deluxe Charging Handle': {
		name: 'Taktika Deluxe Charging Handle',
		image: 'wpn_fps_ass_tkb_bolt_rp4',
		icon: 'inv_mod_bolt',
		slot: 'bolt',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1,
			reload: -0.3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Rodion 3B'
			]
		}
	}
}

export default bolt