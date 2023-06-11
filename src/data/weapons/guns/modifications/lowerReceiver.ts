import content from 'data/source/downloadableContent'

import { type ModificationCollection } from '../weaponTypes'

export type LowerReceiverModification = keyof typeof lowerReceiver

const lowerReceiver = {
	'THRUST Lower Receiver': {
		name: 'THRUST Lower Receiver',
		image: 'wpn_fps_upg_ass_m4_lower_reciever_core',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'OVE SAW 72000'
		},
		stats: {
			damage: 2
		}
	},
	'Orthogon Lower Receiver': {
		name: 'Orthogon Lower Receiver',
		image: 'wpn_fps_m4_uupg_lower_radian',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 4,
			concealment: -1
		}
	}
} as const satisfies ModificationCollection

export default lowerReceiver