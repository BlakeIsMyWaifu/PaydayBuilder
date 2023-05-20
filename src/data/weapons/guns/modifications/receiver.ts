import content from 'data/source/downloadableContent'

import { type ModificationList } from '../weaponTypes'

export type ReceiverModificationsList =
	| 'Serpent'

const receiver: ModificationList<ReceiverModificationsList> = {
	'Serpent': {
		name: 'Serpent',
		image: 'wpn_fps_gre_ms3gl_body_modern',
		icon: 'inv_mod_receiver',
		slot: 'receiver',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			special: [
				'Basilisk 3V'
			]
		}
	}
}

export default receiver