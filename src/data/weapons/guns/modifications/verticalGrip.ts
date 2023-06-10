import content from 'data/source/downloadableContent'

import { type ModificationCollection } from '../weaponTypes'

export type VerticalGripModification = keyof typeof verticalGrip

const verticalGrip = {
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
		}
	}
} as const satisfies ModificationCollection

export default verticalGrip