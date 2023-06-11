import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type SecondarySight = keyof typeof secondarySight

const secondarySight = {
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'Riktpunkt Magnifier Gadget x6.25': {
		name: 'Riktpunkt Magnifier Gadget x6.25',
		image: 'wpn_fps_upg_o_xpsg33_magnifier',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'45 degree red-dot sight': {
		name: '45 degree red-dot sight',
		image: 'wpn_fps_upg_o_45rds',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4
		},
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'45 Degree Ironsights': {
		name: '45 Degree Ironsights',
		image: 'wpn_fps_upg_o_45steel',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			concealment: 1
		},
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'Signature Magnifier Gadget x6.25': {
		name: 'Signature Magnifier Gadget x6.25',
		image: 'wpn_fps_upg_o_sig',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'Angled Sight': {
		name: 'Angled Sight',
		image: 'wpn_fps_upg_o_45iron',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Triple Kill'
		},
		stats: {}
	}
} as const satisfies ModificationCollection

export default secondarySight