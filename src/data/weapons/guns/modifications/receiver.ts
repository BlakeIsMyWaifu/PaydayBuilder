import content from 'data/source/downloadableContent'

import { ModificationList } from '../weaponTypes'

export type ReceiverModificationsList =
	| 'Serpent'

const receiver: ModificationList<ReceiverModificationsList> = {
	'Serpent': {
		name: 'Serpent',
		image: '???',
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