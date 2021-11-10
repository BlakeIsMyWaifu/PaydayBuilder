import content from 'data/source/downloadableContent'

import assaultRifles from '../primary/assaultRifles'
import { WeaponModificationList } from '../weaponTypes'

export type UpperReceiverModificationsList =
	// Commando 553
	'Heat Treated Body'

const upperReciever: WeaponModificationList<UpperReceiverModificationsList> = {
	'Heat Treated Body': {
		name: 'Heat Treated Body',
		image: 'wpn_fps_ass_s552_body_standard_black',
		slot: 'Upper Reciever',
		source: content['Armored Transport'],
		cost: 21e3,
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 4
		},
		compatibleWeapons: [
			assaultRifles['Commando 553 Rifle']
		]
	}
}

export default upperReciever