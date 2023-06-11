import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type SightModification = keyof typeof sight

const sight = {
	'Holographic Sight x1.5': {
		name: 'Holographic Sight x1.5',
		image: 'wpn_fps_upg_o_eotech',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'The Professional\'s Choice Sight x1.5': {
		name: 'The Professional\'s Choice Sight x1.5',
		image: 'wpn_fps_upg_o_t1micro',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Surgeon Sight x1.25': {
		name: 'Surgeon Sight x1.25',
		image: 'wpn_fps_upg_o_docter',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Acough Optic Scope x3.25': {
		name: 'Acough Optic Scope x3.25',
		image: 'wpn_fps_upg_o_acog',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 44e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'Military Red Dot Sight x2': {
		name: 'Military Red Dot Sight x2',
		image: 'wpn_fps_upg_o_aimpoint',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'Military Red Dot Sight Special x2': {
		name: 'Military Red Dot Sight Special x2',
		image: 'wpn_fps_upg_o_aimpoint_2',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content.Lootbag,
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'Milspec Scope x2': {
		name: 'Milspec Scope x2',
		image: 'wpn_fps_upg_o_specter',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'See More Sight x1.5': {
		name: 'See More Sight x1.5',
		image: 'wpn_fps_upg_o_cmore',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Armored Transport'],
		cost: 43200,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Combat Sight x2': {
		name: 'Combat Sight x2',
		image: 'wpn_fps_upg_o_cs',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Compact Holosight x1.5': {
		name: 'Compact Holosight x1.5',
		image: 'wpn_fps_upg_o_eotech_xps',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'Speculator Sight x1.5': {
		name: 'Speculator Sight x1.5',
		image: 'wpn_fps_upg_o_reflex',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Trigonom Sight x1.5': {
		name: 'Trigonom Sight x1.5',
		image: 'wpn_fps_upg_o_rx01',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Solar Sight x1.5': {
		name: 'Solar Sight x1.5',
		image: 'wpn_fps_upg_o_rx30',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'Reconnaissance Sight x2': {
		name: 'Reconnaissance Sight x2',
		image: 'wpn_fps_upg_o_spot',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Spec Ops Pack'],
		cost: 62e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Rangefinder'],
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'Compact Tactical Box Sight x2.5': {
		name: 'Compact Tactical Box Sight x2.5',
		image: 'wpn_fps_upg_o_tf90',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Christmas 2020 Update'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'Compact Profile Sight x1.5': {
		name: 'Compact Profile Sight x1.5',
		image: 'wpn_fps_upg_o_fc1',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: -4
		}
	},
	'Maelstrom Sight x1.5': {
		name: 'Maelstrom Sight x1.5',
		image: 'wpn_fps_upg_o_uh',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -2
		}
	},
	'CASSIAN Elite Score x4.5': {
		name: 'CASSIAN Elite Score x4.5',
		image: 'wpn_fps_upg_o_hamr',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2
		}
	},
	'Biometric Analyzer x1.25': {
		name: 'Biometric Analyzer x1.25',
		image: 'wpn_fps_upg_o_health',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		specialEffect: ['Health Display'],
		stats: {
			accuracy: 4,
			concealment: -1
		}
	},
	'Advanced Combat Sight x3.25': {
		name: 'Advanced Combat Sight x3.25',
		image: 'wpn_fps_upg_o_bmg',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'CASSIAN Sharp Sight x3.25': {
		name: 'CASSIAN Sharp Sight x3.25',
		image: 'wpn_fps_upg_o_atibal',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 62e3,
		specialEffect: ['Piggyback Mode'],
		stats: {
			accuracy: 4,
			stability: 24,
			concealment: -2
		}
	},
	'Z5 Owl Glass Universal Scope x2.5': {
		name: 'Z5 Owl Glass Universal Scope x2.5',
		image: 'wpn_fps_upg_o_poe',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Theia Magnified Scope x10': {
		name: 'Theia Magnified Scope x10',
		image: 'wpn_fps_upg_o_leupold',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Sniper Pack'],
		cost: 49600,
		acquisition: {
			achievement: 'Didn\'t See That Coming Did You?'
		},
		specialEffect: [
			'Auto-Tagger',
			'Range Finder'
		],
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'Box Buddy Sight x10': {
		name: 'Box Buddy Sight x10',
		image: 'wpn_fps_upg_o_box',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Spec Ops Pack'],
		cost: 62e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4,
			concealment: -3
		}
	},
	'CASSIAN Iron Sights x1': {
		name: 'CASSIAN Iron Sights x1',
		image: 'wpn_fps_upg_o_mbus_pro',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		}
	},
	'Trace Optic x6.25': {
		name: 'Trace Optic x6.25',
		image: 'wpn_fps_upg_o_northtac',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		}
	},
	'Tuunbaq Scope x4.5 / x10': {
		name: 'Tuunbaq Scope x4.5 / x10',
		image: 'wpn_fps_upg_o_schmidt',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 4'],
		cost: 62e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2
		}
	},
	'Pistol Red Dot Sight x1.5': {
		name: 'Pistol Red Dot Sight x1.5',
		image: 'wpn_fps_upg_o_rmr',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			accuracy: 4,
			concealment: -1
		}
	},
	'SKOLD Micro Reflex Sight x1.5': {
		name: 'SKOLD Micro Reflex Sight x1.5',
		image: 'wpn_fps_upg_o_rms',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			concealment: -1
		}
	},
	'Riktpunkt Holosight x1.5': {
		name: 'Riktpunkt Holosight x1.5',
		image: 'wpn_fps_upg_o_rikt',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			concealment: -1
		}
	},
	'Marksman Sight x1.25': {
		name: 'Marksman Sight x1.25',
		image: 'wpn_upg_o_marksmansight_rear',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 4
		}
	}
} as const satisfies ModificationCollection

export default sight