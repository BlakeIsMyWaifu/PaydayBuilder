import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type GadgetModification = keyof typeof gadget

const gadget = {
	'Assault Light': {
		name: 'Assault Light',
		image: 'wpn_fps_upg_fl_ass_smg_sho_surefire',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Flashlight'],
		stats: {
			concealment: -1
		}
	},
	'Tactical Laser Module': {
		name: 'Tactical Laser Module',
		image: 'wpn_fps_upg_fl_ass_smg_sho_peqbox',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			concealment: -1
		}
	},
	'Compact Laser Module': {
		name: 'Compact Laser Module',
		image: 'wpn_fps_upg_fl_ass_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		specialEffect: ['Laser'],
		stats: {}
	},
	'Military Laser Module': {
		name: 'Military Laser Module',
		image: 'wpn_fps_upg_fl_ass_peq15',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'LED Combo': {
		name: 'LED Combo',
		image: 'wpn_fps_upg_fl_ass_utg',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['The Butcher Mod Pack 2'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 8,
			concealment: -2
		}
	},
	'Stealth Laser Module': {
		name: 'Stealth Laser Module',
		image: 'wpn_fps_upg_fl_dbal_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			accuracy: 4,
			stability: -4
		}
	},
	'Tactical Pistol Light': {
		name: 'Tactical Pistol Light',
		image: 'wpn_fps_upg_fl_pis_tlr1',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 14e3,
		specialEffect: ['Flashlight'],
		stats: {
			concealment: -1
		}
	},
	'Pocket Laser': {
		name: 'Pocket Laser',
		image: 'wpn_fps_upg_fl_pis_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			concealment: -1
		}
	},
	'Micro Laser': {
		name: 'Micro Laser',
		image: 'wpn_fps_upg_fl_pis_crimson',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source.Community,
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Laser'],
		stats: {}
	},
	'Combined Module': {
		name: 'Combined Module',
		image: 'wpn_fps_upg_fl_pis_x400v',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source.Community,
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'Polymer Flashlight': {
		name: 'Polymer Flashlight',
		image: 'wpn_fps_upg_fl_pis_m3x',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Flashlight'],
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Medved R4 Laser Sight': {
		name: 'Medved R4 Laser Sight',
		image: 'wpn_fps_upg_fl_pis_perst',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			stability: 4,
			concealment: -1
		}
	}
} as const satisfies ModificationCollection

export default gadget