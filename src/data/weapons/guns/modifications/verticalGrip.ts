import content from 'data/source/downloadableContent'
import { ModificationList } from '../weaponTypes'

export type VerticalGripModificationsList =
	'Twinkle Grip'

const verticalGrip: ModificationList<VerticalGripModificationsList> = {
	'Twinkle Grip': {
		name: 'Twinkle Grip',
		image: 'wpn_fps_smg_schakal_vg_surefire',
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
				'Jackal Submachine Gun'
			]
		}
	}
}

export default verticalGrip