import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type UpperReceiverModification = keyof typeof upperReceiver

const upperReceiver = {
	'Exotique Receiver': {
		name: 'Exotique Receiver',
		image: 'wpn_fps_m4_upper_reciever_edge',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 1,
			stability: 4
		}
	},
	'LW Upper Receiver': {
		name: 'LW Upper Receiver',
		image: 'wpn_fps_upg_ass_m4_upper_reciever_ballos',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr. DJ'
		},
		stats: {
			accuracy: 4,
			stability: 8
		}
	},
	'THRUST Upper Receiver': {
		name: 'THRUST Upper Receiver',
		image: 'wpn_fps_upg_ass_m4_upper_reciever_core',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'OVE SAW 72000'
		},
		stats: {
			damage: 2,
			accuracy: -8
		}
	},
	'Shell Rack': {
		name: 'Shell Rack',
		image: 'wpn_fps_shot_r870_body_rack',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 2, // TODO different with different guns
			concealment: -2
		}
	},

	'Orthogon Upper Receiver': {
		name: 'Orthogon Upper Receiver',
		image: 'wpn_fps_m4_uupg_upper_radian',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['McShay Mod Pack'],
		cost: 21e3,
		stats: {
			damage: 4,
			stability: 4,
			concealment: 1
		}
	},
	'Taktika Railed Cover': {
		name: 'Taktika Railed Cover',
		image: 'wpn_fps_upg_ak_body_upperreceiver_zenitco',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['McShay Mod Pack'],
		cost: 21e3,
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 4
		}
	}
} as const satisfies ModificationCollection

export default upperReceiver