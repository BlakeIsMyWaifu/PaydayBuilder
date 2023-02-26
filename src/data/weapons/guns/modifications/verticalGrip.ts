import content from 'data/source/downloadableContent'

import { type ModificationList } from '../weaponTypes'

export type VerticalGripModificationsList =
	| 'Twinkle Grip'

const verticalGrip: ModificationList<VerticalGripModificationsList> = {
	'Twinkle Grip': {
		name: 'Twinkle Grip',
		image: 'wpn_fps_smg_schakal_vg_surefire',
		icon: 'inv_mod_vertical_grip',
		slot: 'verticalGrip',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	}
}

export default verticalGrip